import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {Button, Card, CardSection, Field, Spinner} from './common';
import {emailChanged, loginStart, loginSuccess, passwordChanged} from '../actions';

class LoginForm extends Component {
    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.errorText}>Authentication Failed !!</Text>
                </View>
            );
        }
    }

    onButtonPressed() {
        const {email, password} = this.props;
        this.props.loginStart(true);
        this.props.loginSuccess({email, password});
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large'/>
            );
        } else {
            return (
                <Button
                    onPress={this.onButtonPressed.bind(this)}
                    text='Login'
                />
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Field
                        onChangeText={this.onEmailChanged.bind(this)}
                        title={'Email'}
                        value={this.props.email}
                        placeholder='abc@xyz.com'
                    />
                </CardSection>
                <CardSection>
                    <Field
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                        title='Password'
                        placeholder='******'
                        secureInput
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorText: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginSuccess, loginStart})(LoginForm);

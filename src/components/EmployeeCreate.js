import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from "./common/Card";
import {CardSection} from "./common/CardSection";
import {Field} from "./common/Field";
import {Button} from "./common/Button";
import {updateEmployee} from "../actions";
import {Picker, Text} from "react-native";

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Field
                        title="Name"
                        placeholder="Shrey Gupta"
                        value={this.props.name}
                        onChangeText={text => this.props.updateEmployee({prop: 'name', value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Field
                        title="Phone"
                        placeholder="8726-212-000"
                        value={this.props.phone}
                        onChangeText={text => this.props.updateEmployee({prop: 'phone', value: text})}
                    />
                </CardSection>
                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.updateEmployee({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button
                        text="Create"
                    />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    console.log(state.employeeForm);
    return {
        name,
        phone,
        shift
    }
};

export default connect(mapStateToProps, {updateEmployee})(EmployeeCreate);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
        );
    }
}


export default connect(
    null,
)(EmployeeList);
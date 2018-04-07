import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";


const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" initial/>
            </Scene>
            <Scene key="main">
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="List Of Employees"
                    rightTitle="Add"
                    onRight={() => {
                        Actions.employeeCreate()
                    }}
                    initial
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
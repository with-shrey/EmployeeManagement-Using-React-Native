//Import Libraries
import React from 'react';
import {Platform, Text, View} from 'react-native';


//make Component
const Header = ({children}) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    );
};

//Styles Goes Here
const styles = {
    viewStyle: {
        backgroundColor: '#d2d7dd',
        justifyContent: 'center',
        //alignItems: 'center',
        height: 50,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        elevation: 4
    },
    textStyle: {
        paddingLeft: 10,
        fontSize: 15,
        textAlign: (Platform.OS === 'ios') ? 'center' : 'left'
    }
};

//Make component available to other parts
export {Header};

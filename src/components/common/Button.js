import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, text}) => (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
);


const styles = {
    buttonStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 45,
        backgroundColor: '#fff',
        borderColor: '#ff00ff',
        borderWidth: 2,
        borderRadius: 5

    },
    textStyle: {
        color: '#ff00ff',
    }
};

export {Button};

import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Field = ({onChangeText, title, value, placeholder, secureInput}) => (
    <View style={style.containerStyle}>
        <Text style={style.labelStyle}>
            {title}
        </Text>
        <TextInput
            secureTextEntry={secureInput}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={style.inputStyle}
        />
    </View>
);

const style = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    inputStyle: {
        flex: 2,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 23
    }
};

export {Field};

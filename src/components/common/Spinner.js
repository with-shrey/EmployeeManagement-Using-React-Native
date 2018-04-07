import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const Spinner = ({size}) => (
    <View style={style.spinnerContainer}>
        <ActivityIndicator size={size || 'large'}/>
    </View>
);


const style = {
    spinnerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45
    },
};

export {Spinner};

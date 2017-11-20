import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default Button = (props) => {
    return (<TouchableOpacity disabled={props.disabled} style={props.disabled ? styles.disabled : styles.standard} onPress={props.onPressItem}>
        <Text style={{ color: 'white', textAlign: 'center' }}>{props.children}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    standard: {
        backgroundColor: 'purple',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5
    },
    disabled: {
        backgroundColor: 'purple',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 5,
        opacity: 0.3
    }
}
);
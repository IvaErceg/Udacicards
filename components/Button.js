import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default Button = (props) => {
    return (<TouchableOpacity style={{ backgroundColor: 'purple', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, margin: 5 }} onPress={props.onPressItem}>
        <Text style={{ color: 'white' }}>{props.children}</Text>
    </TouchableOpacity>
    )
}
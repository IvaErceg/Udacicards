import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';

export default class QuizQuestion extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text>Test</Text>
                    <Button>Flip</Button>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        position: 'relative',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        width: 200,
        height: 400,
        margin: 5
    },
    title: {
        fontSize: 20,
    }
});

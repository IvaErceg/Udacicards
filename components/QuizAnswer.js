import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';

export default class QuizAnswer extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text>test</Text>
                    <Button>Correct</Button>
                    <Button>Incorrect</Button>
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
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        width: 200,
        height: 100,
        margin: 5
    },
    title: {
        fontSize: 20,
    }
});

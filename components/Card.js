import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import { connect } from 'react-redux';
import { removeCard } from '../actions';

class Card extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <Text>{this.props.question}</Text>
                    <Text>{this.props.answer}</Text>
                    <Button onPressItem={()=> console.log(this.props.question)}>Delete</Button>
                    <Button>Edit</Button>
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
        height: 200,
        margin: 5
    },
    title: {
        fontSize: 20,
    }
});

export default connect(null, { removeCard })(Card);
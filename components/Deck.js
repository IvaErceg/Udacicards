import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';
import { FontAwesome } from '@expo/vector-icons'

export default Deck = (props) => {
        return (
            <TouchableOpacity onPress={props.onPressItem}>
                <View style={styles.container}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text>{props.cards || 0} {props.cards === 1 ? 'card' : 'cards'}</Text>
                    <Button onPressItem={props.removeItem}>
                        <FontAwesome name='trash' size={20}></FontAwesome>
                    </Button>
                </View>
            </TouchableOpacity>
        )
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

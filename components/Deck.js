import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text>{this.props.cards}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
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


export default Deck;
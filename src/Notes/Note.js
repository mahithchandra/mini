import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class myApp extends Component {
    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <View style={styles.textContainer}>
                    <Text style={styles.note}>{this.props.val.note}</Text>
                    <Text style={styles.date}>{this.props.val.date}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.addButton} onPress={this.props.deleteMethod}>
                        <Icon name="delete-empty" color="#FFF" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        padding: 15,
        borderWidth: 1,
        borderColor: '#e2e2e2',
        margin: 10,
    },
    textContainer: {
        flex: 7
    },
    iconContainer: {
        flex: 1
    },
    addButton: {
        height: 40,
        width: 40,
        backgroundColor: '#c0392b',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    note: {
        fontSize: 16,
        color: '#0a3d62'
    },
    date: {
        fontSize: 14,
        color: '#079992'
    }
});

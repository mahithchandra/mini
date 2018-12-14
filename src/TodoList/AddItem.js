import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';

export default class AddItem extends Component {
    constructor() {
        super()
        this.state = {
            task: '',
            venue: '',
            time: '',
            type: ''
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView>
                <View style={styles.item}>
                    <Text>{`${this.state.task}  ${this.state.venue}  ${this.state.time}  ${this.state.type}`}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Enter Task</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.task}
                        onChangeText={(text) => this.setState({ task: text })}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Enter Venue</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.venue}
                        onChangeText={(text) => this.setState({ venue: text })}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Enter Time</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.time}
                        onChangeText={(text) => this.setState({ time: text })}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Enter Type</Text>
                    <TextInput
                        style={styles.input}
                        value={this.state.type}
                        onChangeText={(text) => this.setState({ type: text })}
                    />
                </View>
                <View style={[styles.item, styles.actionContainer]}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    item: {
        width: '100%',
        paddingVertical: 10
    },
    label: {
        color: '#333',
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    input: {
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
        paddingLeft: 10
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 8,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    buttonText: {
        color: '#fff',
        fontSize: 14
    }
})
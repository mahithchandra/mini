import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Note from './Note'

export default class myApp extends Component {

    constructor() {
        super()
        this.state = {
            noteArray: [{ 'date': 'testDate', 'note': 'Test Notes' }],
            noteText: ''
        }
    }

    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleNote(key)} />
        })
        return (
            <View style={styles.container}>
                <View style={styles.headerBG}>
                    <Text style={styles.headerText}>- My Notes -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Icon name="plus" color="#FFF" size={35} />
                </TouchableOpacity>
                <TextInput style={styles.input}
                    onChangeText={(noteText) => this.setState({ noteText })} value={this.state.noteText}
                    placeholder='Enter Note Here...' placeholderTextColor='black' underlineColorAndroid='transparent'
                />
            </View>
        )
    }

    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push(
                {
                    'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
                    'note': this.state.noteText
                }
            )
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' })
        }
    }

    deleNote(key) {
        this.state.noteArray.splice(key, 1)
        this.setState({ noteArray: this.state.noteArray })
    }

}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        flex: 1
    },
    headerBG: {
        backgroundColor: '#0a3d62',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 20,
        borderBottomWidth: 6,
        borderBottomColor: '#2f6389'
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'sans-serif-bold',
        fontWeight: 'bold'
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 50
    },
    addButton: {
        height: 50,
        width: 50,
        backgroundColor: '#eb2f06',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        bottom: 33,
        elevation: 5
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        alignSelf: 'stretch',
        backgroundColor: '#60a3bc',
        padding: 15,
        color: '#fff',
        borderTopWidth: 2,
        borderTopColor: '#ccc'
    }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const iconColorMap = {
    sport: { color: '#1abc9c', icon: 'basketball' },
    food: { color: '#3498db', icon: 'food' },
    workout: { color: '#e74c3c', icon: 'walk' },
    travel: { color: '#34495e', icon: 'bus' },
    medical: { color: '#e67e22', icon: 'medical-bag' },
    sleep: { color: '#f39c12', icon: 'bed-empty' }
}

export default class Item extends Component {
    render() {
        const { item = {} } = this.props
        const iconColor = iconColorMap[item.type] || {}
        return (
            <View style={styles.container}>
                <View style={[styles.iconContainer, { backgroundColor: iconColor.color || '#e74c3c' }]}>
                    <Icon name={iconColor.icon || 'rocket'} size={42} color='#fff' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.description}>{item.task}</Text>
                    <Text style={styles.venue}>{item.venue}</Text>
                    <Text style={styles.subtext}>{item.desc}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
        );
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
        borderRadius: 140 / 2,
        margin: 10,
    },
    iconContainer: {
        flex: 2,
        width: 30,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        paddingVertical: 20,
        marginTop: 10
    },
    textContainer: {
        flex: 7,
    },
    icon: {
        color: '#fff',
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        color: '#333'
    },
    venue: {
        fontSize: 14,
        color: '#666'
    },
    subtext: {
        fontSize: 14,
        color: '#8f8f8f'
    },
    time: {
        fontSize: 14,
        color: '#e74c3c'
    }
});

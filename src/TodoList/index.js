import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Item from './Item';
import AddItem from './AddItem'
export default class TodoList extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    type: 'workout',
                    task: 'Morning Workouta',
                    venue: 'Indira Park',
                    desc: 'This 30-minute workout will jumpstart your day',
                    time: '5:30AM'
                },
                {
                    type: 'sport',
                    task: 'Playing Cricket',
                    venue: 'LB Stadium',
                    desc: 'Cricket is a game that requires physical agility to bat, bowl, and field.',
                    time: '6:00AM'
                },
                {
                    type: 'food',
                    task: 'Breakfast',
                    venue: 'Minerva Hotel',
                    desc: 'Breakfast tends to be the toughest meal on the program.',
                    time: '8:00AM'
                },
                {
                    type: 'travel',
                    task: 'Go to office',
                    venue: 'Gachibowli',
                    desc: 'Idiomatically one would usually say I shall go by bus.',
                    time: '8:30AM'
                },
                {
                    type: 'medical',
                    task: 'Consult Doctor',
                    venue: 'Narayanaguda',
                    desc: 'Doctor Consultation only on Practo *5 minute response time.',
                    time: '7:00PM'
                },
                {
                    type: 'sleep',
                    task: 'Go to bed',
                    venue: 'Home',
                    desc: 'A relaxing, routine activity right before bedtime conducted away from bright lights.',
                    time: '9:30PM'
                }
            ]
        }
    }

    // componentDidMount() {
    //     const items1 = this.state.items
    //     const me = this
    //     setTimeout(function () {
    //         items1.push(
    //             {
    //                 type: 'medical',
    //                 task: 'Buy medicine',
    //                 venue: 'Appolo Pharmacy',
    //                 desc: 'Get upto 25% off on your first medicine order. ',
    //                 time: '9:30PM'
    //             }
    //         )
    //         me.setState({
    //             items: items1
    //         })
    //     }, 5000)
    // }

    render() {
        const items = this.state.items
        return (
            <View style={styles.container}>
                <View style={styles.headerBG}>
                    <Text style={styles.headerText}>ToDoList</Text>
                </View>
                
                <ScrollView>
                <AddItem />
                    {/* {
                        items.map((item, index) => {
                            return <Item item={item} key={index} />
                        })
                    } */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBG: {
        backgroundColor: '#6b52ae',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight:50,
        padding:10,
        marginBottom: 10,
        borderBottomWidth: 6,
        borderBottomColor: '#a28ed8'
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'sans-serif-bold',
        fontWeight: 'bold'
    }
});

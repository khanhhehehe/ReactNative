import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProductName(props) {
    return (
        <View>
            <Text style={styles.text}> {props.name} </Text>
            <ProductDesc desc={props.description ? props.description : 'Updating...'} />
        </View>
    )
} 
export function ProductDesc(props) {
    return (
        <Text>{props.desc}</Text>
    );
}
const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 30,
    },
});

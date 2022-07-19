import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Add Item" onPress={() => navigation.navigate('Add')} />
            <Button title="List Item" onPress={() => navigation.navigate('List')} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})
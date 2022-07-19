import React, { useState } from "react";
import auth from '@react-native-firebase/auth'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Alert
} from 'react-native'

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const SignUp = () => {
        if (email != '' && Password != "") {
            auth().createUserWithEmailAndPassword(email, Password).then((res) => {
                console.log('response', res);
                Alert.alert("User Created Successfully")
            }).catch((error) => {
                console.log("error", error);
                Alert.alert(error.message)
            })
        }
        else {
            Alert.alert("Both fields are Mandatory")
        }

    }

    const login = () => {
        auth().signInWithEmailAndPassword(email, Password).then((res) => {
            console.log('response', res)
            navigation.navigate("Home")

        })
            .catch((error) => {
                console.log("error", error);
            })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.inputView}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"

            />
            <TextInput style={styles.inputView}
                placeholder="Password"
                value={Password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <View style={{ flexDirection: 'row' }}>
                <Button title="Login" onPress={login} />
                <Button title="SignUp" onPress={SignUp} />

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputView: {
        width: '50%',
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 10,
        marginTop: 20
    }
})
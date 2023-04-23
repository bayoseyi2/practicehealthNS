import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'

const rnsImage = require ('../assets/rnslogo1.png');

export default function Login( { navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then(()=> console.log('Login Successful'))
            .catch((err) => Alert.alert("Login error", err.message));
        }
    };

    return(
        <View style={styles.container}>
            <Image source={rnsImage} style={styles.rnsImage}/>
            <View style={styles.whiteSheet}></View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',

    },
    title:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'purple',
        padding: 12
    },
    rnsImage:{
        width: '100%',
        height: 200,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover',
        backgroundColor:'#808080'

    },
    whiteSheet: {
        width: '100%', 
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#808080',
        borderTopLeftRadius: 60,
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    }, 
    button:{
        backgroundColor: `#00bfff`,
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})
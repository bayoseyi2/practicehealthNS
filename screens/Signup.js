import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase'

const rnsImage = require ('../assets/rnslogo1.png');

export default function Signup( { navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignup= () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
            .then(()=> console.log('Signup Successful'))
            .catch((err) => Alert.alert("Login error", err.message));
        }
    };

    return(
        <View style={styles.container}>
            

            <View style={styles.whiteSheet}></View>
                <SafeAreaView styles={styles.form}>
                <Image source={rnsImage} style={styles.rnsImage}/>
                    <Text style={styles.supertitle}>PracticeHealthNS </Text>
                    <Text style={styles.title}>Sign Up </Text>
                    <TextInput
                    style = {styles.input}
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType='emailAddress'
                    autofocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput
                    style = {styles.input}
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
                        <Text style={{fontWeight: 'bold', color: 'white', fontSize:16}}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{marginTop:20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 12}}>Are you an existing user? </Text>
                    
                    <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: `#2f4f4f`, fontWeight: '600', fontSize:12}}>Log In</Text>
                    </TouchableOpacity>
                    </View>
                </SafeAreaView>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',

    },
    supertitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        padding: 12
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color:`#2f4f4f`,
        padding: 20,
        
    },
    rnsImage:{
        width: '100%',
         height: 200,
        // position: 'absolute',
        // top: 0,
        // resizeMode: 'cover',
        // backgroundColor:'#808080'

    },
    whiteSheet: {
        width: '100%', 
        height: '75%',
        position: 'absolute',
        bottom: 10,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
    },
    form:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: 50
    }, 
    button:{
        backgroundColor: `#2f4f4f`,
        height: 58,
        borderRadius: 10,
        width:'85%',
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    input: {
        borderColor: "gray",
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        marginBottom:20,
        marginLeft:20
        
      },
})
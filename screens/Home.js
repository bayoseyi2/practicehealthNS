import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import colors from '../screens/colors';
import { Entypo } from "@expo/vector-icons";

const rnsImage = require ('../assets/rnslogo1.png');

const Home = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <Image source={rnsImage} 
                style={{width: 40, height: 40, marginRight: 15}}
                />
            ),
        });
    }, [navigation]);
    
    return (
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")} style={styles.chatButton}>
          <Entypo name="chat" size={15} color={colors.lightGray}/>
        </TouchableOpacity>
        </View> 
    );
};
export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#808080',
        backgroundColor: 'orange',
        justifyContent: 'flex-end',
        alignItems:'flex-end'
        

    },
    chatButton:{
        backgroundColor: colors.primary,
        height: 50,
        width: 50, 
        borderRadius: 25,
        alignItems: 'center',
        justifyContent:'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,

    }
    
    
    
        
      
})
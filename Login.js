import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import { useState } from "react/cjs/react.development";
import Forgot from "./Forgot";
import Signup from "./Signup";
import { getData } from "./Utility";
import Home from "./Home";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUserData = async () => {
        let obj = {
           
            email: email,
            password: password,
        };
        //console.log(obj);
        let value = await getData(email, obj,'Stored data');
        console.log('Login ' + value);
        
    }


    return (
        <View style={styles.container}>


            <TextInput
                placeholder='Enter Email ID'
                keyboardType='email-address'
                style={styles.TextInput}>
            </TextInput>

            <TextInput
                placeholder='Password'
                keyboardType='visible-password'
                style={styles.TextInput}>
            </TextInput>
            <View>
                <TouchableOpacity onPress={()=>{ navigation.navigate('Forgot') }}>
                    <Text style={styles.foget} >Forget Password</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.TouchableOpacity}
           onPress={getUserData }>
                <Text onPress={ () => { navigation.navigate('Home')}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TouchableOpacity}  onPress={() => { navigation.navigate('Signup') }}>
                <Text>SignUp</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    TextInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,

        margin: 10,
        width: '60%'
    },
    TouchableOpacity: {
        borderColor: '#164d40',
        borderWidth: 3,
        width: '30%',
        alignItems: 'center',
        marginHorizontal: '40%',
        backgroundColor: 'green',
        margin: 10,
        padding: 20,
        borderRadius: 8

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'


    },
    foget: {
        color: '#4d1d20',
        fontSize: 15,
        marginLeft: 120,
        marginTop: -10

    }

})
export default Login;


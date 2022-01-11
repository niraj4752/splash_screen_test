import React, { Component, useState } from 'react';
import { picker } from 'react-native'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { setData } from './Utility';
import Login from './Login';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [mobileNo, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setUserData = async () => {
        let obj = {
            firstName: firstName,
            mobileNo: mobileNo,
            email: email,
            password: password
        };
        console.log(obj);
        let res = await setData(email, obj,'Stored data');
        console.log('SigUp ' + res);
       // if (res == 200) {
       //     navigation.navigate({ Login });
       // }
        //else {
           // alert('user exit');
       // }
    };




    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Name'
                    keyboardType='default'
                    style={styles.TextInput}
                    onChangeText={(value) => setFirstName(value)}

                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Mobile'
                    keyboardType='phone-pad'
                    style={styles.TextInput}
                    onChangeText={(value) => setMobileNumber(value)}

                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"
                    placeholder='Enter Email ID'
                    keyboardType='email-address'
                    style={styles.TextInput}
                    onChangeText={(value) => setEmail(value)}

                >
                </TextInput>

                <TextInput
                    placeholderTextColor="#80888a"

                    placeholder='Password'
                    keyboardType='visible-password'
                    style={styles.TextInput}
                    onChangeText={(value) => setPassword(value)}

                >
                </TextInput>



                
                <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={() => setUserData()}
                >
                    <Text>SignUp</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.TouchableOpacity}
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text>Log In</Text>
                </TouchableOpacity>


                

            </View>
        </ScrollView>
    );
}


// onPress={()=>{this.props.navigation.navigate('Login')}}

const styles = StyleSheet.create({
    TextInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: '#9ed0db',
        margin: 10,
        width: '60%',

    },
    TouchableOpacity: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%',
        alignItems: 'center',
        marginHorizontal: '40%',
        backgroundColor: '#22abc9',
        margin: 10,
        padding: 20

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        

    }
});
export default Signup;
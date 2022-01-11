import React from "react";
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { useState } from "react";

const Forgot= ({navigation}) => {
    const [email, setEmail] = useState('');
    const [dropdown, setDropdown] = useState('What is your father name?');
    const [values, setValues] = useState('');

    return (
        <View style={styles.container}>
         
            <View style={styles.input}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail({email})}
                />
            </View>
            <View style={styles.input}>
                <Picker
                    selectedValue={dropdown}
                    style={styles.picker}
                    onValueChange={(itemValue,itemIndex) => setDropdown( itemValue )}
                >
                    <Picker.Item label="What is your first school name?" value="school name?" />
                    <Picker.Item label="What is your best friend name?" value="friend name?" />
                </Picker>
            </View>

            <View style={styles.input}>
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#003f5c"
                    placeholder="Answer"
                    onChangeText={(values) => setValues({ values })}
                    value={values}
                />
            </View>
            <TouchableOpacity style={styles.button}
            onPress={()=>{navigation.navigate('Login')}}
           
            >
                <Text >Log In</Text>
            </TouchableOpacity>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5480c7",
        alignItems: "center",
        justifyContent: "center",
    },
    TextInput: {
       
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#050505",
        height: 50,
    },

    input: {
        marginBottom: 20,
        alignItems: "center",
        backgroundColor: "#696b6e",
        borderRadius: 5,
        width: "70%",
        height: 45,
      
    },
   
    picker: {
        height: 50,
        width: 250
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#65c974",
        borderColor: "#0c0d0c",
        borderWidth: 1,
        width: "40%",
        borderRadius: 15,
        height: 50
    },
    
});
export default Forgot;
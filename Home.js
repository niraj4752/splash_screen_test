import React, { Component, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import watch from "./src/consts/watch";
const width=Dimensions.get('screen').width/2-30
const Home = () => {
    const categories = ['MEN', 'WOMEN', 'BOY', 'GIRL'];

    const [categoriesIndex, setCategoriesIndex] = useState(0)

    const CategoriesList = () => {
        return (
            <View style={style.categoriesContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => { setCategoriesIndex(index) }} >
                        <Text key={index} style={[style.categoriesText, categoriesIndex == index && style.categoriesTextSelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>))}

            </View>
        );
    };

    const Card = ({ watch}) => {
        return (
        
        <View style={style.card} >
           <View>
                <Icon name="favorite" size={18}/>
            </View>
            <View style={{height:100,alignItems:'center',}}>
            <Image 
            style={{flex:1,resizeMode:'contain'}}
            source={watch.img}/>
            </View>
            <Text style={{fontWeight:'bold',fontSize:17,marginTop:10,color:'black'}}>{watch.name} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,}}>
                <Text style={{fontSize:19, fontWeight:'bold',color:"black"}}>₹ {watch.price} </Text>
                <View style={style.addBtn}>
                    <Text style={style.addBtnText}>+</Text>
                </View>
            </View>
        </View>
        );
    };
    return (
        <SafeAreaView
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'grey' }} >

            <View style={style.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}> Welcome To watch shop</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>Watch Shop</Text>
                </View>
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <Icon name="search" style={{ marginLeft: 20 }} />
                    <TextInput placeholder="search " style={style.input} />
                </View>
                <View style={style.btn}>
                    <Icon name="sort" size={30} />
                </View>
            </View>
            <CategoriesList />
            <FlatList columnWrapperStyle={{justifyContent:'space-between'}}
            numColumns={2} 
            data={watch}
                renderItem={({ item }) => <Card watch={item} />}
                />
        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    searchContainer: {
        height: 50,
        backgroundColor: '#5aad70',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        flex: 1
    },
    btn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoriesText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    categoriesTextSelected: {
        color: 'green',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: 'green'
    },
    card: {
        height: 225,
        backgroundColor: '#e0d0ce',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15
    },
    addBtn:{
        height:25,
        width:25,
        backgroundColor:'green',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    addBtnText:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
    
    }

});
export default Home;
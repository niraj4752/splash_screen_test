import React,{ Component } from "react";
import {View,Text,ImageBackground,Image} from 'react-native'
import Signup from "./Signup";

var bg=require('./backgroundScreen.jpg');
var logo=require('./smart-watch.png')

class Splash extends Component{
    constructor(props)
    {
        super(props);
        setTimeout(()=>
        {
            this.props.navigation.navigate('Signup');
        },5000);
    }
    render(){
        return(
<ImageBackground 
source={bg} style={{height:'100%',width:'100%'}}
>
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image source={logo}  style={{height:100, width:100}} >

    </Image>
</View>
</ImageBackground>
        );
    }
}

export default Splash;


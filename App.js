import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from './Splash';
import Login from './Login';
import { setData } from './Utility';
import { getData } from './Utility';
import Forgot from './Forgot'
import Home from './Home';
import Signup from './Signup';
import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();

const App=()=>
{
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} initialRouteName="Splash"  >
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login } />
        <Stack.Screen name="Signup" component={Signup } />
        <Stack.Screen name='setData' component={setData}/>
        <Stack.Screen name='getData' component={getData}/>
       <Stack.Screen  name='Forgot'  component={Forgot }/>
       <Stack.Screen  name='Home'    component={Home}/>
       

        


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
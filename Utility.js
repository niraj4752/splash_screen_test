import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
  try {
    let user=await getData(key);
    if(user!=null){
      return 400;
    }
    else{
      await AsyncStorage.setItem(key, JSON.stringify(value));
    console.warn('successfully done');
    return 200;
    }
    
  } catch (error) {
    console.warn('some error in setdata code');
  }
};
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('fetch Sucessfully');
      return JSON.parse(value);
      
    }
  } catch (error) {
    console.warn('error in getData');
    console.warn(error);
  }
};
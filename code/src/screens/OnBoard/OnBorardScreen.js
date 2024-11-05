import React ,{useEffect} from 'react';
import {View, Text,Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';




 const  OnBoardScreen=() => {
  const navigation = useNavigation();
  useEffect(() => {
   
      const timeout = setTimeout(() => {
     navigation.navigate('SwiperScreen');
    }, 2000); 
   return () => clearTimeout(timeout);
  }, [navigation]);

    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/images/Logo.png')} style={styles.logostyle}></Image>
        <Text style={styles.hiremestyle}>Hireme</Text>
       
      </View>
    );
  }
  export default OnBoardScreen;
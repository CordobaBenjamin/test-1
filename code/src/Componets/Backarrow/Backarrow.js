import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Backarrow = ({IconName}) =>{
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
      };
 return(
<View>
<TouchableOpacity onPress={goBack}>
 <Image source={IconName} style={styles.backimg}/>
 </TouchableOpacity>
 </View>  
 )   
}
const styles = StyleSheet.create({
    backimg:{
        height:20,
        width:20,
        marginTop:30,
        marginLeft:35, 
        tintColor:'#0e0140'
    
        

    } 
})
export default Backarrow;
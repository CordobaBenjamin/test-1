import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({title, getButton, onPress, googlebuttonstyle,NEXTButton}) =>{
 return(
    <View>
<TouchableOpacity onPress={onPress}>
 <View style={[styles.buttonstyle,getButton, googlebuttonstyle,NEXTButton]}>
<Text style={styles.textstyle}>{title}</Text>
 </View> 
 </TouchableOpacity>
 </View>  
 )   
}
const styles = StyleSheet.create({
     buttonstyle:{
     height:50,
     width:110,
   
     marginBottom:20,
 
     alignSelf:'center',
     justifyContent:'center', 
     marginTop:60, 
     backgroundColor:'#0e0140',
     borderRadius:20

    },
    textstyle:{
        fontSize:18,
        textAlign:'center',
        color:'#ffffff'

    }
})
export default Button;
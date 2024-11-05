import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BlueButton = ({title,onPress,registerbutton,JobDetailsbutton, continueButton,agreestyle,textStylebutt,choosejonbutton
  }) =>{
 return(
    
       <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonstyle,registerbutton,JobDetailsbutton,continueButton,agreestyle,choosejonbutton]}>
        <View style={{flexDirection:'row', alignSelf:'center'}}>
         
          <Text style={[styles.textstyle,textStylebutt]}>{title}</Text>
        </View>
    </View>
  
    </TouchableOpacity>

 )   
}
const styles = StyleSheet.create({

  buttonstyle:{
        height:60,
        width:'85%',
      
     backgroundColor:'#0e0140',
        borderRadius:25,
        margin:10,
        justifyContent:'center',
        alignSelf:"center"
    },
    textstyle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fff',
       
    },
   
})
export default BlueButton;
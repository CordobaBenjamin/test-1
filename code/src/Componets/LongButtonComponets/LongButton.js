import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LongButton = ({title,
  viewStyle,
   contibutstyle,
    onPress,
     IconName,
     textStylebutt, 
     viewstyleR,
     agreestyle,
     continustyle,
     textStyleagree,
     textStylebutt2,
     imgstyle,
     continustyle1, newchatbutton,
     newchattext ,
    addiconstyle
    }) =>{
 return(
    
       <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonstyle, contibutstyle, viewStyle, viewstyleR, continustyle, agreestyle, continustyle1, newchatbutton]}>
        <View style={{flexDirection:'row', alignSelf:'center'}}>
          <Image source={IconName} style={[styles.img,addiconstyle]}/>
          <Text style={[styles.textstyle, textStylebutt, imgstyle, textStyleagree ,textStylebutt2,newchattext]}>{title}</Text>
        </View>
    </View>
  
    </TouchableOpacity>

 )   
}
const styles = StyleSheet.create({

  buttonstyle:{
        height:60,
        width:350,
        borderColor:'#0e0140',
        borderWidth:2,
        backgroundColor:'#FFFFFF',
        borderRadius:25,
        margin:10,
        justifyContent:'center',
    },
    textstyle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#0e0140',
       
    },
    img:{
      height:25,
      width:25,
    
      
    } 
})
export default LongButton;
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'
    },
    Selectedcitytext:{
        fontSize:20, 
         marginLeft:20, 
        color:'#0e0140',
        fontWeight:'bold',
        // textAlign:'center',
       
    },
    closeimg:{
        height:18,
        width:18, marginLeft:40
    },
    searchview:{
       height:55,
       width:'86%' ,
        alignSelf:'center',
         borderRadius:50,
         borderWidth:2,
         borderColor:'#f6f6f6', 
         marginTop:20, 
         justifyContent:'center'
    }, 
    searchimg:{
        height:27, 
        width:27,
        tintColor:'#d9d9d9',
         marginLeft:20,
         marginTop:10
        
    },
    radiobutonview:{
        height:25,
        width:25,
        borderRadius:25,
        // backgroundColor:'red',
        marginLeft:30,
        borderWidth:2,
        borderColor:'#f6f6f6'
    },
    textstyle:{
        fontSize:18,
         marginLeft:20,
         color:'#0e0140',
         fontWeight:'800'
    },
    checked: {
        backgroundColor:'#0e0140',
      },
      checkedstyle:{
        backgroundColor:'#fff',
      },
})
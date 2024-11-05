import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor:'#fdfdff'
        },
      textinputstyle:{
          color: '#000000',
          fontSize: 15,
          padding: 10,
          height:55,
          width:'85%',
          borderWidth:2 ,
          borderRadius:20,
          borderColor:'#e5e8ec' , 
          alignSelf:'center'
       
      },
      emailtext:{
          fontSize:15,
          fontWeight:'bold',
          color:'#323d47',
          alignSelf:'flex-start',
          marginTop:25,
          marginLeft:35
      },
      textstyle:{
        justifyContent:'center',
       
         
      },
      loremtext:{
          fontSize:15,
          color:'#abb1b6',
          marginBottom:10,
         textAlign:'center'
        
      },
      youraccounttext:{
          fontSize:25,
          fontWeight:'bold',
          color:'#0e0140',
         textAlign:'center',
         margin:5
      }, 
      showimg:{
         height:25,
         width:25,
         marginTop:6,
         tintColor:'#0e0140'
        },
        nextstyle:{
            height:25,
            width:25, 
            position:'absolute',
            right:0
        } ,
        
        selectedview:{
            height:55,
            width:'85%',
            borderRadius:20,
            borderWidth:2,
            borderColor:'#e5e8ec', 
            marginTop:20,
            justifyContent:'center',
            padding:10, alignSelf:'center'

        },
        selectText:{
            fontSize:16,
            fontWeight:'500',
            color:'#0e0140',
            
        },
        nextimg:{
            height:25,
            width:25,
            tintColor:'#0e0140'
          
        },
        textStylebutt:{
            color:'white',
            
          },
          viewstyleR:{
         width:'100%',
         backgroundColor:'#0e0140',
         marginTop:20,
         alignSelf:'center'
          },
          textalread1:{
            fontSize:15
        },
        textalread:{
            textAlign:'center',
            fontSize:15,
        
        },
        registerbutton:{
            // width:'%',
            marginTop:20
        }
})
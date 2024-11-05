import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
         flex: 1,
          // alignItems: 'center',
          // justifyContent: 'center',
           backgroundColor: '#0e0140'
      },
      Viewstyle:{
        height:'47%',
        width:'85%',
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:30,
      
      },
      
      img:{
        height:300,
        width:300,
         alignSelf:'center',
          // marginTop:'15%'
          marginTop:30
      },
      textstyle:{
        fontSize:20,
        color:'#0e0140',
        fontWeight:'bold',
        textAlign:'center',
        // padding:20,
        marginTop:20

      },
      textstyle2:{
        fontSize:15,
        textAlign:'center',
        marginTop:10
      },
      skiptext:{
        color:'white' ,
        fontSize:18
      },
      skipview:{
        flex:1, 
        alignSelf:'flex-end',
         padding:20
      },
      getButton:{
        width:150,
      //  backgroundColor:'red',
       marginTop:'10%'
        
      },
      imaView:{
        justifyContent:'center',
        alignItems:'center'
      },
      NEXTButton:{
        // marginBottom:'20%' ,
        marginTop:'15%'
      }
})
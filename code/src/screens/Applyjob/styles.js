import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fdfdff'
      },
      jobdetailstext: {
        marginTop: 30,
        fontSize: 19,
        fontWeight: '500',
        color: '#0e0140', marginLeft:'30%'
    },
    textinputstyle:{
        color: '#000000',
          fontSize: 15,
          padding: 15,
          height:60,
          width:'85%',
         borderWidth:2 ,
         borderRadius:20,
         borderColor:'#e5e8ec', 
         alignSelf:'center', marginTop:10
  },
  fullname:{
        marginLeft:30,
        fontSize: 19,
        fontWeight: '500',
        color: '#0e0140', 
        marginTop:15
  },
  cvview:{
    height:'22%',
    width:'85%',
     borderRadius:20,
    borderWidth:2,
     borderColor:'#e5e8ec',
      alignSelf:'center', 
      marginTop:10,
       justifyContent:'center',
       alignItems:'center'
  }, uploadstyle:{
    height:50, 
    width:50,
    tintColor:'#0e0140',
  
    
  },
  uploadtext:{
    color:'#0e0140',
    fontSize:15,
    fontWeight:'800'
  },  
  continustyle:{
    backgroundColor:"#0e0140",
    alignSelf:'center',
    // marginTop:30,
    width:'85%'
  },
  textStylebutt:{
   
    color:'#ffffff'
  },
  mainviewstyle:{
    height:'55%',
    width:'95%',
    backgroundColor:'#ffffff',
    borderRadius:30,
    borderWidth:2,
    borderColor:'#e5e8ec',
    justifyContent:'center',
    alignSelf:'center'
   
    
  },
  successfulstyle:{
    height:80,
    width:80,
    alignSelf:'center'
  },
  textstylessucc:{
    textAlign:"center",
    fontSize:20,
    fontWeight:'bold',
    color:'#0e0140', marginTop:10
  },
  textstylessucc1:{
    textAlign:"center",
    fontSize:17,
  },  
  agreestyle:{
    width:200,
    alignSelf:'center',
    backgroundColor:'#0e0140',
    marginTop:30
  },
  textStyleagree:{
    marginRight:20,
    color:'white'
  },
})
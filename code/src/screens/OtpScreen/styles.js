import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fdfdff',
        justifyContent:'center',
        alignItems:'center'
      },
      enterotp:{
        fontSize:25,
        fontWeight:'bold', 
        textAlign:'center', 
        marginTop:60,
        color:'#0e0140', 
        marginBottom:25
      },
      wehavejust:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'400', 
        color:'#7c858d'
      },
      emailtext:{
        color:'#0e0140',
        textAlign:'center',
        fontSize:17,
        fontWeight:'400'
      },
      viewstyleR:{
        width:'90%',
        backgroundColor:'#0e0140',
        marginTop:40,
        alignSelf:'center'
         },
         textStylebutt:{
            color:'white',
            
          },
          didnottext:{
            fontSize:17,
            fontWeight:'normal',
            color:'#b0b5bc'
          },
          resendtext:{
            fontSize:18,
            color:'#0e0140',
            fontWeight:'500', 
          },
         otpbox: {
            borderColor: 'black',
            borderRadius: 8,
            borderWidth: 1,
            height: 50,
            width: 50,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            // marginHorizontal: 20,
            borderRadius: 20,
            marginTop:20
          },
          otpContainer: {
            borderWidth: 0,
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            alignSelf:'center'
          },
})
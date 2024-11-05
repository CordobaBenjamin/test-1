import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fdfdff'
  },
 
  manstyle: {
    height: 50,
    width: 50,
    marginLeft: 20,
    marginTop: 20

  },
  msgdot: {
    height: 11,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#339966',
    position: "absolute",
    bottom: 0,
    right: 6,
  },
  textmsgview: {
    height: 50, 
    width: '60%',
    backgroundColor: '#f2f2f2',
    marginLeft: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },
  msgtextstyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'normal', 
    color: '#8c8c8c'
  },
  textmsgview1: {
    height: 50, 
    width: '60%',
    backgroundColor: '#0e0140',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center'

  },
  TextInputstyle: {
    height: 50,
    width: '90%',
    backgroundColor: '#dae0e8',
    flexDirection: 'row',
    bottom: 10,
    position: 'absolute',
    alignSelf: 'center', borderRadius: 50

  },
  widthstyle: {
    height: 40,
    width: 2,
    backgroundColor: '#92969c',
    margin: 10,
    alignSelf: 'center'
  },
  add1: {
   height: 20,
    width: 20,
    alignSelf:'center', 
    tintColor: '#b3b3b3'

  },
  addviewstyle: {
    height: 35,
    width: 35,
    borderRadius: 35,
    justifyContent: 'center',
    backgroundColor: '#0e0140',
    marginTop: 8,
    marginLeft: 10

  },
  timetext:{
    
    marginLeft:'20%', marginTop:10
  },
  timetext1:{
   marginTop:10, alignSelf:'flex-end', marginRight:'20%'
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
},
messagetext: {
  color: '#0e0140',
  marginTop: 30,
  marginLeft: '15%',
  fontSize: 20,
  fontWeight: '800'
},
})
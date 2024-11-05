import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fdfdff'

    },
    messagetext: {
        color: '#0e0140',
        marginTop: 30,
        marginLeft: 100,
        fontSize: 20,
        fontWeight: '900'
    },
    searchview: {
        height: 55,
        width: '85%',
        alignSelf: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f6f6f6',
        marginTop: 30,
        justifyContent: 'center',

    },

    viewigth: {
        width: '85%',
        height: 2,
        backgroundColor: '#bfbfbf',
        alignSelf: 'center',
        marginTop: 10
    },
    msgdot: {
        height: 11,

        width: 10,

        borderRadius: 20,

        backgroundColor: '#339966',

        position: "absolute",
        bottom: 5,
        right: 6,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginTop:10
    },
    senderInfo: {
        marginRight: 12,
    },
    manstyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft:10
    },
    msgdot: {
        height: 12,
        width: 12,
        backgroundColor: 'green',
        borderRadius: 6,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    messageDetails: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    esthername: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0e0140'
    },
    timetext: {
        color: 'gray',
        marginRight:15
    },
    textfind: {
        fontSize: 14,
    },
    msgview: {
        backgroundColor: '#0e0140',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight:15
    },
    msgnumber: {
        color: '#fff',
        fontWeight: '500', 
    },
    headerContainer: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchimg: {
        height: 25,
        width: 25,
        marginLeft: 10,
        tintColor: '#9399a0',
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
    },
    Capture1img: {
        marginLeft: 8,
    },

    newchatbutton:{
        alignSelf:'flex-end',
         marginRight:25,
         height:'22%',
         width:'40%',
         borderRadius:25,
          backgroundColor:'#0e0140', 
          marginTop:'20%'
        
    },
    newchattext:{
        color:'#fff', marginLeft:5
    },
    addiconstyle:{
        tintColor:'#fff',
       
    },
    newchatvewstyle:{
        marginTop:'30%'
    }
})
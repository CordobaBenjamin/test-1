import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fdfdff'
    },
    textstyle: {
        fontSize: 20,
        marginTop: 25,
        fontWeight: '500',
        color: '#0e0140'
    },
    settingsimg: {
        height: 20,
        width: 20,
        marginTop: 25,
        marginRight: 20,
        tintColor: '#0e0140'


    },
    flexDri:{
        flexDirection: 'row', justifyContent: 'space-between'  
    },
    genralview: {
        height: 50,
        justifyContent: 'center',

        margin: 5,
        borderRadius: 10,

        marginTop: 20,
        borderWidth: 1,
        borderColor: '#e5e8ec'

    },
    flexDirection:{
        flexDirection: 'row'
    },
    generaltext: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',

    },

    // imgstyle: {
    //     height: 40,
    //     width: 40,
    //     marginTop: 5,
    //     marginLeft: 5
    // },
    rowtextstyle: {
        color: '#0e0140',

        marginTop: 5,
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10
    },

    // digitalview: {
    //     height: 140,
    //     width: '85%',
    //     alignSelf: 'center',
    //     backgroundColor: '#fff',
    //     borderColor: '#e5e8ec',
    //     borderWidth: 2,
    //     borderRadius: 10,
    //     marginTop: 20
    // },
    rowtextstylemin: {
        color: '#a6a6a6',
        fontSize: 15,
        fontWeight: '700',
        marginTop: 5,
        marginTop: 10
    },
    textfind: {
        marginLeft: 10,
        marginTop: 10

    },
    imgstylesinmypropo: {
        height: 15,
        width: 15,
        marginRight: 20,
        marginTop: 10, 
        tintColor: '#0e0140'
    },
    textapplication: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight: '500',
        color: '#0e0140',

    },
    applicationview: {
        height: 130,
        width: '85%',
        borderWidth: 1,
        borderColor: '#e5e8ec',
        alignSelf: 'center',
        borderRadius:10,
        marginTop: 20

    },
    openedstyle: {
        height: 30,
        width: 90,
        backgroundColor: '#e7f9f0',
        justifyContent: 'center',
        borderRadius: 5, marginTop: 20
    },
    openedtextstyle: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#7fe0ad',
    },





    digitalView: {
        height: 140,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderColor: '#e5e8ec',
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 20
    },
   
    jobContainer: {
        flexDirection: 'row',
        // padding: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop:5,
        marginLeft:5

    },
    jobDetailsContainer: {
        marginLeft: 10,
        flex: 1, 
    },
    jobInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        justifyContent:'space-between',
        marginTop:10
    },
    jobTitle: {
        fontWeight: 'bold',
        marginRight: 10,
        fontSize:15,
         color:'#0e0140'
    },
    rowTextStyleMin: {
        color: '#a6a6a6',
    },
    timeText: {
        // marginLeft: 'auto',
        marginRight:5
    },
    companyText: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    jobDescription: {
        color: '#0e0140',
    },
    notiviewstyle:{
        width:'80%',
         alignSelf:'center',
         height:1, backgroundColor:'#e5e8ec'
    }
})
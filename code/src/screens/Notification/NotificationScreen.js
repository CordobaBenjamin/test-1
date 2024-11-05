import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import { styles } from './styles';
const NotificationScreen = () => {
    const [is_select, setSelect] = useState(null)
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [alldataArray, setAlldataArray] = useState(true);
    const selectcard = async (id) => {
        setSelect(id)

    }
    const toggleArrow = () => {
        setIsUpArrow(!isUpArrow);
    };
    useEffect(() => {
       setSelect(1);
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.flexDri}>
                    <Backarrow
                        IconName={icons.back}
                    />
                    <Text style={styles.textstyle}>{String.notification}</Text>
                    <TouchableOpacity>
                        <Image source={icons.settings} style={styles.settingsimg}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexDirection}>
                    <TouchableOpacity onPress={() => selectcard(1)}>
                        <View style={[styles.genralview, { marginLeft: 30, width: 100, backgroundColor: is_select === 1 ? '#0e0140' : '#fff', }]}>
                            <Text style={[styles.generaltext, { color: is_select === 1 ? '#fff' : '#a6a6a6' }]}>General</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectcard(2)}>
                        <View style={[styles.genralview, { width: 150, backgroundColor: is_select === 2 ? '#0e0140' : '#fff', }]}>
                            <Text style={[styles.generaltext, { color: is_select === 2 ? '#fff' : '#a6a6a6' }]}>My Proposals</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {is_select == '1' ?
                    <View>
                        <View style={styles.digitalView}>
                            <TouchableOpacity
                            // onPress={() => navigation.navigate("")}
                            >
                                <View style={styles.jobContainer}>
                                    <Image style={styles.imgStyle} source={icons.shopee} />
                                    <View style={styles.jobDetailsContainer}>
                                        <View style={styles.jobInfoContainer}>
                                            <Text style={styles.jobTitle}>Senior UI Designer</Text>

                                            <Text style={[styles.rowTextStyleMin, styles.timeText]}>32 Min ago</Text>
                                        </View>
                                        <Text style={styles.companyText}>Shopee Sg</Text>
                                        <Text style={styles.jobDescription}>
                                            {String.Loremipsumdolorsitamet}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.notiviewstyle}></View>
                        <View style={styles.digitalView}>
                            <TouchableOpacity
                            // onPress={() => navigation.navigate("")}
                            >
                                <View style={styles.jobContainer}>
                                    <Image style={styles.imgStyle} source={icons.shopee} />
                                    <View style={styles.jobDetailsContainer}>
                                        <View style={styles.jobInfoContainer}>
                                            <Text style={styles.jobTitle}>Senior UI Designer</Text>
                                            <Text style={[styles.rowTextStyleMin, styles.timeText]}>32 Min ago</Text>
                                        </View>
                                        <Text style={styles.companyText}>Shopee Sg</Text>
                                        <Text style={styles.jobDescription}>
                                            {String.Loremipsumdolorsitamet}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View> : null}
                {is_select == '2' ?
                    <View>
                        {alldataArray ?
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                    <Text style={styles.textapplication}>Application Status ({alldataArray ? alldataArray.length : null})</Text>
                                    {/* {`Application Status (${alldataArray ? alldataArray.length : 0})`} */}
                                    <TouchableOpacity onPress={toggleArrow}>
                                        <Image style={styles.imgstylesinmypropo} source={isUpArrow ? icons.uparrow : icons.downarrow} ></Image>
                                    </TouchableOpacity>
                                </View>
                                {isUpArrow && (
                                    <View>
                                        <View style={styles.applicationview}>
                                            <View style={{ flexDirection: 'row', }}>

                                                <Image style={styles.imgStyle} source={icons.sell}></Image>

                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={[styles.rowtextstyle, { marginLeft: 10 }]}>Senior UI/UX Designer</Text>


                                                    </View>
                                                    <Text style={styles.textfind}>Shell</Text>
                                                    <TouchableOpacity>
                                                        <View style={styles.openedstyle}>
                                                            <Text style={styles.openedtextstyle}> Opened</Text>
                                                        </View>
                                                    </TouchableOpacity>


                                                </View>

                                            </View>
                                        </View>
                                        <View style={styles.applicationview}>
                                            <View style={{ flexDirection: 'row', }}>

                                                <Image style={styles.imgStyle} source={icons.light}></Image>

                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={[styles.rowtextstyle, { marginLeft: 10 }]}>Senior UI/UX Designer</Text>


                                                    </View>
                                                    <Text style={styles.textfind}>Cardano</Text>
                                                    <TouchableOpacity>
                                                        <View style={[styles.openedstyle, { backgroundColor: '#fef2ec' }]}>
                                                            <Text style={[styles.openedtextstyle, { color: '#f9a88a' }]}>Delivered</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                </View>

                                            </View>
                                        </View>
                                        <View style={styles.applicationview}>
                                            <View style={{ flexDirection: 'row', }}>

                                                <Image style={styles.imgStyle} source={icons.M}></Image>

                                                <View>
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <Text style={[styles.rowtextstyle, { marginLeft: 10 }]}>Senior UI/UX Designer</Text>


                                                    </View>
                                                    <Text style={styles.textfind}>Shopee Sg</Text>
                                                    <TouchableOpacity>
                                                        <View style={[styles.openedstyle, { backgroundColor: '#feeded' }]}>
                                                            <Text style={[styles.openedtextstyle, { color: '#f74946' }]}>Cancelled</Text>
                                                        </View>
                                                    </TouchableOpacity>

                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                )}



                            </View>
                            : null}

                    </View>
                    : null}
            </ScrollView>
        </View>
    )
}
export default NotificationScreen;
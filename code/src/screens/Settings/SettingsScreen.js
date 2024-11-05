import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import ReactNativeModal from 'react-native-modal';
const SettingsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState()
    const [focusedBox, setFocusedBox] = useState(false);
    const setData = (status) => {
        setFocusedBox(status);

    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.headerContainer}>
                    <Backarrow IconName={icons.back} />
                    <Text style={styles.messagetext}>{String.settings}</Text>
                </View>
                <View style={styles.settingview}>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.viewstyle}>
                            <View style={styles.mainviewstyle1}>
                                <Text style={styles.styles65}>65%</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.styles65, { marginLeft: 20 }]}>{String.ProfileCo}</Text>
                            </View>
                            <Text style={styles.textfind}>{String.quality}</Text>
                            <Text style={[styles.textfind, { marginTop: 5 }]}>{String.qualit}</Text>
                        </View>
                    </View>


                </View>
                <Text style={styles.accountext}>{String.account}</Text>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("personalifoScreen")}>
                        <View style={styles.rowContainer}>
                            <Image source={icons.userp} style={styles.perimg} />

                            <View style={styles.textAndArrowContainer}>
                                <Text style={styles.textspersonal}>{String.personal}</Text>
                                <TouchableOpacity>
                                    <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </TouchableOpacity>



                </View>
   
                <View style={styles.viewstyleab}></View>
                <View style={{ marginTop:5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("ExperienceScreen")}>
                        <View style={styles.rowContainer}>
                            <Image source={icons.EExxx} style={styles.perimg}></Image>
                            <View style={styles.textAndArrowContainer}>
                                <Text style={styles.textspersonal}>{String.Ex}</Text>
                                <TouchableOpacity>
                                    <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewstyleab}></View>
                <Text style={styles.accountext}>{String.genenal}</Text>
                <View style={{ marginTop:5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Settingnotification")}>
                        <View style={styles.rowContainer}>
                            <Image source={icons.Noooti} style={styles.perimg}></Image>

                            <View style={styles.textAndArrowContainer}>
                                <Text style={styles.textspersonal}>{String.Noti}</Text>

                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.viewstyleab}></View>
                <View style={{ marginTop:5 }}>

                    <View style={styles.rowContainer}>
                        <Image source={icons.languageee} style={styles.perimg}></Image>
                         <View style={styles.textAndArrowContainer}>
                            <Text style={styles.textspersonal}>{String.lang}</Text>
                            <TouchableOpacity>
                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <View style={styles.viewstyleab}></View>
                <View style={{ marginTop:5}}>
                    <View style={styles.rowContainer}>
                        <Image source={icons.Secuu} style={styles.perimg}></Image>

                        <View style={styles.textAndArrowContainer}>
                            <Text style={styles.textspersonal}>{String.sec}</Text>
                            <TouchableOpacity>
                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.viewstyleab}></View>
                <Text style={styles.accountext}>{String.about}</Text>
                <View style={{marginTop:5}}>
                            <TouchableOpacity onPress={() => navigation.navigate("LegelScreen")}>
                    <View style={styles.rowContainer}>
                        <Image source={icons.legelllll} style={styles.perimg}></Image>

                        <View style={styles.textAndArrowContainer}>
                            <Text style={styles.textspersonal}>{String.legal}</Text>
                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />

                        </View>
                    </View>
                            </TouchableOpacity>
                </View>
                <View style={styles.viewstyleab}></View>
                <View style={{marginTop:5 }}>
                    <View style={styles.rowContainer}>
                        <Image source={icons.helper} style={styles.perimg}></Image>

                        <View style={styles.textAndArrowContainer}>
                            <Text style={styles.textspersonal}>{String.help}</Text>
                            <TouchableOpacity>
                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={[styles.viewstyleab,{height:2}]}></View>
                <View style={{ marginTop:5}}>
                    <View style={styles.rowContainer}>
                        <Image source={icons.aboutusss} style={styles.perimg}></Image>

                        <View style={styles.textAndArrowContainer}>
                            <Text style={styles.textspersonal}>{String.about}</Text>
                            <TouchableOpacity>
                                <Image source={icons.settingarrow} style={styles.rightarrowAimg} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={styles.viewstyleab}></View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.logtext}>{String.log}</Text>
                </TouchableOpacity>
                <ReactNativeModal
                    isVisible={modalVisible}
                    backdropColor='#f2f2f2'
                    onBackdropPress={toggleModal}
                    supportedOrientations={['portrait', 'landscape']}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    onRequestClose={() => {
                        setModalVisible(false)
                    }}
                >
                    <View style={styles.mainviewstyle}>
                        <Image source={icons.sure} style={styles.sureimg}></Image>
                        <Text style={styles.suretext}>{String.sure}</Text>
                        <Text style={styles.ullamtext}>{String.ullam}</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                            <View style={[styles.logoutbox, { backgroundColor: focusedBox === 1 ? '#0e0140' : '#fff' }]}>
                                <TouchableOpacity onPress={() => {
                                    setData(1);
                                    navigation.navigate("LoginScreen")
                                }}>

                                    <Text style={[styles.logtextstylee, { color: focusedBox === 1 ? '#fff' : '#0e0140' }]}>Log Out</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.logoutbox, { backgroundColor: focusedBox === 2 ? '#0e0140' : '#fff' }]}>
                                <TouchableOpacity onPress={() => {
                                    setData(2);
                                    setModalVisible(false);
                                }}>
                                    <Text style={[styles.logtextstylee, { color: focusedBox === 2 ? '#fff' : '#0e0140' }]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ReactNativeModal>



            </ScrollView>
        </View>
    )
}
export default SettingsScreen;
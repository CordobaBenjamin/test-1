import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, colorOpacityModal } from 'react-native';
import { styles } from './styles';
import { String } from '../../Helper/string';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import LongButton from '../../Componets/LongButtonComponets/LongButton';

const SavedDetailsScreen = ({ navigation }) => {
    const [focusedBox, setFocusedBox] = useState(false);
    const setData = (status) => {
        setFocusedBox(status);
    };
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.headerContainer}>
                    <Backarrow IconName={icons.back} />
                    <Text style={styles.messagetext}>Saved</Text>
                </View>
                <View style={styles.viewstyle}>
                    <View style={styles.lightimgview}>
                        <Image source={icons.light} style={styles.lightimg}></Image>
                    </View>
                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                    <Text style={styles.shopeetext}>shopee Sg</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity>
                            <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                <Text style={[styles.buttontext, { color: '#808080' }]}>Tow days ago</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View>
                        <Image source={icons.selary} style={[styles.allimg, { marginLeft: 40, height: 60, width: 60, marginTop: -10 }]}></Image>
                        <Text style={styles.alltextstyle}>Salary</Text>
                        <Text style={styles.salarytext}>$6k-$11K</Text>
                    </View>
                    <View>
                        <Image source={icons.job} style={styles.allimg}></Image>
                        <Text style={styles.jobtextstyle}>Jon Type</Text>
                        <Text style={styles.remotetext}>Remote</Text>
                    </View>
                    <View>
                        <Image source={icons.employes} style={[styles.allimg, { marginRight: 40 }]}></Image>
                        <Text style={styles.positiontextstyle}>Position</Text>
                        <Text style={[styles.remotetext,]}>Senior</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: "center", marginTop: 10 }}>
                    <View style={[styles.threeboxstyle, { backgroundColor: focusedBox === 1 ? '#f6f6f6' : '#fff', }]}>
                        <TouchableOpacity onPress={() => setData(1)}>
                            <Text style={[styles.boxtextstyle, { color: focusedBox === 1 ? '#0e0140' : '#a6a6a6' }]}>Description</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.threeboxstyle, { backgroundColor: focusedBox === 2 ? '#f6f6f6' : '#fff', }]}>
                        <TouchableOpacity onPress={() => setData(2)}>
                            <Text style={[styles.boxtextstyle, { color: focusedBox === 2 ? '#0e0140' : '#a6a6a6' }]}>Requirement</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={[styles.threeboxstyle, {
                    marginTop: 10, alignSelf: "center", backgroundColor: focusedBox === 3 ? '#f6f6f6' : '#fff',
                }]}>
                    <TouchableOpacity onPress={() => setData(3)}>
                        <Text style={[styles.boxtextstyle, { color: focusedBox === 3 ? '#0e0140' : '#a6a6a6' }]}>Responsibilities</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.jobDescript}>{String.jobDescription}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={styles.dotstyle}></View>
                    <Text style={styles.jobdestext}>{String.jobdescription}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={styles.dotstyle}></View>
                    <Text style={styles.jobdestext}>{String.loremipsum}</Text>
                </View>
                <LongButton
                    onPress={() => {
                        navigation.navigate("ApplyjobScreen")
                    }}
                    title={String.applynow}
                    continustyle={styles.continustyle}
                    textStylebutt={styles.textStylebutt}

                />
                
                <View style={{ marginTop: 80 }}></View>
            </ScrollView>
        </View>
    )
}
export default SavedDetailsScreen;
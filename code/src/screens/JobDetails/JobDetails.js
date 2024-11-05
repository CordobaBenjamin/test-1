import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, colorOpacityModal } from 'react-native';
import { styles } from './styles';
import { String } from '../../Helper/string';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';

const JobDetails = ({ navigation }) => {
    const [focusedBox, setFocusedBox] = useState(false);
    const setData = (status) => {
        setFocusedBox(status);
    };

    const [isApplied, setApplied] = useState(false);

    const handlePress = () => {
        setApplied(!isApplied);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.backview}>
                    <Backarrow
                        IconName={icons.back}

                    />
                    <Text style={styles.jobdetailstext}>{String.jobdetails}</Text>
                    <TouchableOpacity>
                        <Image source={icons.save} style={styles.saveimg}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewstyle}>
                    <View style={styles.lightimgview}>
                        <Image source={icons.light} style={styles.lightimg}></Image>
                    </View>
                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                    <Text style={styles.shopeetext}>shopee Sg</Text>
                   
                    <View style={styles.fulltimeandday}>
                        <TouchableOpacity>
                     <View style={styles.dayandtimevide}>
                     <Text style={styles.buttontext}>Fulltime</Text>
                     </View>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <View style={styles.dayandtimevide}>
                     <Text style={styles.buttontext}>Tow days ago</Text>
                     </View>
                     </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.salarView}>
                    <View>
                        <Image source={icons.selary} style={[styles.allimg,styles.allimg2]}></Image>
                        <Text style={styles.alltextstyle}>Salary</Text>
                        <Text style={styles.salarytext}>$6k-$11K</Text>
                    </View>
                    <View>
                        <Image source={icons.job} style={styles.allimg}></Image>
                        <Text style={styles.jobtextstyle}>Jon Type</Text>
                        <Text style={styles.remotetext}>Remote</Text>
                    </View>
                    <View>
                        <Image source={icons.employes} style={[styles.allimg,styles.allimg3]}></Image>
                        <Text style={styles.positiontextstyle}>Position</Text>
                        <Text style={[styles.remotetext,]}>Senior</Text>
                    </View>
                </View>
                <View style={ styles. flexrow2}>
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
                    alignSelf:'center',marginTop:10, backgroundColor: focusedBox === 3 ? '#f6f6f6' : '#fff',
                }]}>
                    <TouchableOpacity onPress={() => setData(3)}>
                        <Text style={[styles.boxtextstyle, { color: focusedBox === 3 ? '#0e0140' : '#a6a6a6' }]}>Responsibilities</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.jobDescript}>{String.jobDescription}</Text>
                <View style={styles.flexrow}>
                    <View style={styles.dotstyle}></View>
                    <Text style={styles.jobdestext}>{String.jobdescription}</Text>
                </View>
                <View style={styles.flexrow}>
                    <View style={styles.dotstyle}></View>
                    <Text style={styles.jobdestext}>{String.loremipsum}</Text>
                </View>
                <BlueButton
                    onPress={() => {
                        handlePress();
                        navigation.navigate("NotificationScreen");
                    }}
                    title={isApplied ? String.applyed : String.applynow}
                    JobDetailsbutton={isApplied ? styles.applyButton : styles.JobDetailsbutton}

                    textStylebutt={isApplied ? styles.textStylebutt3  :   styles.textStylebutt}

                />
                <View style={ styles.viewmartop}></View>
            </ScrollView>
        </View>
    )
}
export default JobDetails;
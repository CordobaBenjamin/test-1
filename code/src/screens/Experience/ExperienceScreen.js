import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';
const ExperienceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>    
            <View style={{ flexDirection: 'row' }}>
                <Backarrow
                    IconName={icons.back}
                />
                <Text style={styles.textstyle}>{String.Ex}</Text>

            </View>
              {/* <View style={styles.headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>{String.Ex}</Text>
            </View> */}
            <View style={styles.exxxtview}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.abouttext}>Experience</Text>
                    <TouchableOpacity>
                        <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={styles.imgviewstyle}>
                        <Image style={styles.imgstyle} source={icons.shopee}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.rowtextstyle}>Internship UI/UX Designer</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textfind}>Shopee Sg</Text>
                            <View style={styles.dotview}></View>
                            <Text style={[styles.textfind, { marginLeft: 5 }]}>2019</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.exviewstyle}></View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={styles.imgviewstyle}>
                        <Image style={styles.imgstyle} source={icons.M}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.rowtextstyle}>Junior UI Designer</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textfind}>Cardano</Text>
                            <View style={styles.dotview}></View>
                            <Text style={[styles.textfind, { marginLeft: 5 }]}>2020</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.exviewstyle}></View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={styles.imgviewstyle}>
                        <Image style={styles.imgstyle} source={icons.shopee}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.rowtextstyle}>UI/UX Designer</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textfind}>Shopee Sg</Text>
                            <View style={styles.dotview}></View>
                            <Text style={[styles.textfind, { marginLeft: 5 }]}>2021</Text>
                        </View>
                    </View>
                </View>

            </View>
            
            <BlueButton
                onPress={() => {
                    navigation.navigate("AddnewpositionScreen")
                }}
                title={String.addnewposition}
               
            />
            <View style={styles.educationview}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.abouttext}>Experience</Text>
                    <TouchableOpacity>
                        <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <View style={styles.imgviewstyle}>
                        <Image style={styles.imgstyle} source={icons.eduction}></Image>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.rowtextstyle}>University Of Oxford</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textfind}>Computer Science</Text>
                            <View style={styles.dotview}></View>
                            <Text style={[styles.textfind, { marginLeft: 5 }]}>2019</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop:10}}></View>
            <BlueButton
                 onPress={() => {
                    navigation.navigate("AddneweductionScreen")
                }}
                title={String.addneweducation}
              
            />
           
        <View style={{marginBottom:'20%',height:20, width:100, }}></View>  
        </ScrollView> 
        </View>
    )
}
export default ExperienceScreen;
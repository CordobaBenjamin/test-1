import React, { useState,useRoute } from 'react';
import { Button, View, Text, Image, colorOpacityModal, TouchableOpacity, ScrollView } from 'react-native';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import { styles } from './styles';



const SavedScreen = ({ navigation }) => {
//     const route = useRoute();
//   const savedViews = route.params?.savedText
//   console.log('savedViews==-----',savedViews); 
    return (
        <ScrollView>
            <View style={styles.container}>
               
                <View style={styles.headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>{String.findjob}</Text>
            </View>
                  
   <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => navigation.navigate("SavedDetailsScreen")}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.sell} style={styles.shopeeimg} />
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Sell</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => navigation.navigate("SavedDetailsScreen")}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.light} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => navigation.navigate("SavedDetailsScreen")}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.shopee} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => navigation.navigate("SavedDetailsScreen")}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.M} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginBottom:'70%'}}></View>
        </ScrollView>
    )
}
export default SavedScreen;
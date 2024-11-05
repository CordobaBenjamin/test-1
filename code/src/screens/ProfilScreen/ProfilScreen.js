import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, Alert,TextInput } from 'react-native';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import { styles } from './styles';
const ProfileScreen = ({ navigation }) => {
    const [aboutText, setAboutText] = useState();
    const [isEditing, setEditing] = useState(false);
    const startEditing = () => {
        // Show a custom alert with "Yes" and "No" buttons
        Alert.alert(
          'Edit Mode',
          'You can now edit your About Me information. Do you want to proceed?',
          [
            {
              text: 'No',
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                setEditing(true);
              },
            },
          ]
        );
      };
    const saveChanges = () => {
        setEditing(false);
        // Implement logic to save changes (e.g., API call)
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Backarrow
                        IconName={icons.back}
                    />
                    <Text style={styles.textstyle}>{String.profile}</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("SettingsScreen")
                    }}>
                        <Image source={icons.settings} style={styles.settingsimg}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.imgviewstyle}>
                    <View>
                        <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjX3OJCx0JT7ch7UYIfZ7xPitxZk0qyI1Lg&usqp=CAU' }} style={styles.ingsimg} borderRadius={5}>
                            <View style={styles.profileimg} >
                                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQveBA0tg6S7IsgPj1aSCfnGUmZpY-xUWIHm96W-3KbJfuCVHiSCydmmOgeU6BfMO3YI&usqp=CAU' }} style={styles.proimg}></Image>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <Text style={styles.nametextstyle}>Gustavo Lipshutz</Text>
                <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
                    <Text style={styles.opentextstyle}>Open to work</Text>
                    <View style={styles.circleviwe}>
                        <Image style={styles.rightimg} source={icons.check}></Image>
                    </View>
                </View>
                <Text style={[styles.opentextstyle, { marginTop: 15 }]}>{String.UI}</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <View style={styles.boxviewstyle}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={styles.textstylein}>25</Text>
                                <Text style={styles.textstyleine}>Applied</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxviewstyle}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={styles.textstylein}>10</Text>
                                <Text style={styles.textstyleine}>Reviewed</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewstyle23}></View>
                <View style={styles.aboutview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.abouttext}>About Me</Text>
                        <TouchableOpacity onPress={startEditing}>
                            <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textstyleabout}
                        editable={isEditing}
                        onChangeText={setAboutText}>
                        {String.aboutt} </Text> 
                        
                </View>
                <View style={[styles.aboutview, { height: '15%' }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.abouttext}>Skills</Text>
                        <TouchableOpacity  onPress={startEditing}>
                            <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.skillsContainer}>
                        <View style={styles.skillsRow}>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Design & Creative</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Wireframing UX</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.skillsContainer}>
                        <View style={styles.skillsRow}>
                            <View style={[styles.skillsbox, { marginLeft: 10 }]}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Figma</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>UI Design</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.skillsbox, { marginRight: 10 }]}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Prototype</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>





                    <View style={styles.skillsContainer}>
                        <View style={styles.skillsRow}>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Adobe XD</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>UX Design</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.skillsbox}>
                                <TouchableOpacity>
                                    <Text style={styles.textstyleskills}>Front End</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                </View>
                <View style={styles.experview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.abouttext}>Experience</Text>
                        <TouchableOpacity  onPress={startEditing}>
                            <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.experienceview}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={styles.viewstyle}>
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
                    </View>
                    <View style={styles.experienceview}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={styles.viewstyle}>
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
                    </View>

                    <View style={styles.experienceview}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={styles.viewstyle}>
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
                </View>
                <View style={styles.eucationstyle1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.abouttext}>Education</Text>
                        <TouchableOpacity  onPress={startEditing}>
                            <Image source={icons.Editicon} style={styles.documentimg}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.viewstyle2}>
                            <Image style={styles.imgstyle} source={icons.eduction}></Image>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={styles.rowtextstyle}>University Of Oxford</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textfind}>Computer Science</Text>
                                <View style={styles.dotview}></View>
                                <Text style={[styles.textfind, { marginLeft: 5 }]}>2021</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.marginview}></View>
                <View style={{ marginBottom: '60%' }}></View>
            </ScrollView>
        </View>
    )
}
export default ProfileScreen;
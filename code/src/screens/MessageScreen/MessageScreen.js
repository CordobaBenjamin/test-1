import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import Button from '../../Componets/ButtonComponets/Button';
import { String } from '../../Helper/string';
import LongButton from '../../Componets/LongButtonComponets/LongButton';



const MessageScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>Message</Text>
            </View>

            <View style={styles.searchview}>
                <View style={styles.searchBar}>
                    <TouchableOpacity>
                        <Image source={icons.search} style={styles.searchimg} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search..."
                        value={searchQuery}
                        onChangeText={(text) => {
                            setSearchQuery(text);
                            handleSearch(text);
                        }}
                        style={styles.searchInput}
                    />
                    <TouchableOpacity>
                        <View style={styles.Capture1img}>
                            <Image source={icons.Capture1} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>



            <TouchableOpacity onPress={() => {
                navigation.navigate("ChanceSeptimus")
            }}>
                <View style={styles.messageContainer}>
                    <View style={styles.senderInfo}>
                        <Image source={icons.man} style={styles.manstyle} />
                        <View style={styles.msgdot}></View>
                    </View>
                    <View style={styles.messageDetails}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.esthername}>Esther Howard</Text>
                            <Text style={styles.timetext}>10.20</Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.textfind}>Lorem ipsum dolor sit amet.....</Text>
                            <View style={styles.msgview}>
                                <Text style={styles.msgnumber}>2</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.viewigth}></View>
            <View style={styles.messageContainer}>
                <View style={styles.senderInfo}>
                    <Image source={icons.boy} style={styles.manstyle}></Image>
                    {/* <View style={styles.msgdot}></View> */}
                </View>
                <View style={styles.messageDetails}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.esthername}>Robert Fox</Text>
                        <Text style={styles.timetext}>10.20</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textfind}>Lorem ipsum dolor sit amet.....</Text>
                        <View style={styles.msgview}>
                            <Text style={styles.msgnumber}>2</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.viewigth}></View>
            <View style={styles.messageContainer}>
                <View style={styles.senderInfo}>
                    <Image source={icons.man} style={styles.manstyle} />
                    {/* <View style={styles.msgdot}></View> */}
                </View>
                <View style={styles.messageDetails}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.esthername}>Chance Septimus</Text>
                        <Text style={styles.timetext}>10.20</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textfind}>Lorem ipsum dolor sit amet.....</Text>
                        {/* <View style={styles.msgview}>
        <Text style={styles.msgnumber}>2</Text>
      </View> */}
                    </View>
                </View>
            </View>
            <View style={styles.viewigth}></View>
            <View style={styles.messageContainer}>
                <View style={styles.senderInfo}>
                    <Image source={icons.boy} style={styles.manstyle}></Image>
                    {/* <View style={styles.msgdot}></View> */}
                </View>
                <View style={styles.messageDetails}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.esthername}>Wade Warren</Text>
                        <Text style={styles.timetext}>10.20</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.textfind}>Lorem ipsum dolor sit amet.....</Text>
                      
                    </View>
                </View>
            </View>
          
           <LongButton
           newchatbutton ={styles.newchatbutton}
           title={String.newchat} 
           newchattext={styles.newchattext}
           IconName={icons.add1}
           addiconstyle={styles.addiconstyle}
      />
     
      
        <View style={styles.newchatvewstyle}></View>
        </ScrollView>
        </View>
    )
}
export default MessageScreen;
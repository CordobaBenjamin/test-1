import React, { useState } from 'react';
import { TextInput, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
const ChanceSeptimus = ({ navigation }) => {
    const [messagee, setMessagee] = useState()
    return (
        <View style={styles.container}>
            <ScrollView>
               
 <View style={styles.headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>{String.ChanceSeptimus}</Text>
            </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={icons.man} style={styles.manstyle}></Image>
                        <View style={styles.msgdot}></View>
                    </View>
                    <View style={styles.textmsgview}>
                        <Text style={styles.msgtextstyle}>Lorem ipsum dolor sit et. consecteture adipicing</Text>
                    </View>
                </View>
                <Text style={styles.timetext}>10.30</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>

                    <View style={styles.textmsgview1}>
                        <Text style={[styles.msgtextstyle, { color: '#fff' }]}>Lorem ipsum dolor sit et.</Text>
                    </View>
                 
                    <View>
                        <Image source={icons.boy} style={[styles.manstyle, { marginRight: 20 }]}></Image>

                    </View>
                    
                </View>
                <Text style={styles.timetext1}>10.30</Text>
                     <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                    <View>
                        <Image source={icons.man} style={styles.manstyle}></Image>
                        <View style={styles.msgdot}></View>
                    </View>
                    <View style={styles.textmsgview}>
                        <Text style={styles.msgtextstyle}>Lorem ipsum dolor sit et. consecteture adipicing</Text>
                    </View>
                   
                </View>
                <Text style={styles.timetext}>10.20</Text>
            </ScrollView>
          
            <View>

                <View style={styles.TextInputstyle}>
                    <TouchableOpacity>
                        <View style={styles.addviewstyle}>
                            <Image source={icons.add1}
                                style={styles.add1}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20 }}></View>
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Type your message..."
                        onChangeText={(value) => setMessagee(value)}
                        value={messagee}
                        underlineColorAndroid="transparent"
                    />

                <TouchableOpacity>
                        <View style={[styles.addviewstyle, {backgroundColor:'#fff', marginRight:10}]}>
                            <Image source={icons.send}
                                style={styles.add1}
                            />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>



        </View>


    )
}
export default ChanceSeptimus;
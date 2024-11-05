import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import ReactNativeModal from 'react-native-modal';
const ApplyjobScreen = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [text, setText] = useState();
    const [modalVisible, setModalVisible] = useState()
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
       
        <View>

            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                <Backarrow
                    IconName={icons.back}

                />
                <Text style={styles.jobdetailstext}>{String.Applyjob}</Text>

            </View>
            {/* <ScrollView> */}
            <Text style={styles.fullname}>{String.fullname}</Text>
            <TextInput
                style={styles.textinputstyle}
                placeholder="Enter your name"
                placeholderTextColor={'#808080'}
                onChangeText={(name) => setName(name)}
            />
            <Text style={styles.fullname}>{String.emailaddress}</Text>
            <TextInput
                style={styles.textinputstyle}
                placeholder="Enter your Email Address"
                placeholderTextColor={'#808080'}
                onChangeText={(email) => setEmail(email)}
            />
            <Text style={styles.fullname}>{String.uploadcv}</Text>
            <View style={styles.cvview}>
                <TouchableOpacity>
                    <Image source={icons.upload} style={styles.uploadstyle}></Image>
                </TouchableOpacity>
                <Text style={styles.uploadtext}>{String.uploadFILE}</Text>
            </View>

            <Text style={styles.fullname}>{String.website}</Text>

            <TextInput
                style={styles.textinputstyle}
                placeholder="Https://......"
                placeholderTextColor={'#808080'}
                onChangeText={(text) => setText(text)}
            />
            {/* </ScrollView> */}
            <LongButton
               onPress={() => setModalVisible(true)}
                title={String.continue}
                continustyle={styles.continustyle}
                textStylebutt={styles.textStylebutt}
            />
            <View>
            <ReactNativeModal
                    isVisible={modalVisible}
                    backdropColor='#f2f2f2'
                    onBackdropPress={toggleModal}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    onRequestClose={() => {
                        setModalVisible(false)
                    }}>
                        <View style={styles.mainviewstyle}>
                        <Image source={icons.successful} style={styles.successfulstyle}></Image>
                        <Text style={styles.textstylessucc}>{String.success}</Text>
                        <Text style={styles.textstylessucc1}>{String.youapplication}</Text>
                        <LongButton
            title={String.continue}
            agreestyle={styles.agreestyle}
            textStyleagree={styles.textStyleagree}
            // onPress={() => {
            //   navigation.navigate("SignUpScreen")
            // }}
          />
                        </View>
                    </ReactNativeModal>
            </View>
        </View>
     
    )
}
export default ApplyjobScreen;

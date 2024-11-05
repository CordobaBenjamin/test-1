import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { icons } from '../../Helper/icons';

import { String } from '../../Helper/string';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';




const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [showError, setShowError] = useState(false)
    const [errors, setErrors] = useState({});
    const getError = (email) => {
        const errors = {};
        if (!email) {
            errors.email = 'Please Enter Email';

        } else if (!email.includes('@') || !email.includes('.com')) {
            errors.email = 'Please Valid Email';

        }
        return errors;
    }
    const handelRegister = () => {
        const errors = getError(email);
        if (Object.keys(errors).length > 0) {
            setShowError(true);
            setErrors(showError && errors);
            console.log(errors);
        } else {
            setErrors({});
            setShowError(false);
            console.log('login')
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <Backarrow
                IconName={icons.back}
            />
            <View style={styles.viewstyle}>
                <Text style={styles.createtext}>{String.create}</Text>
                <Text style={styles.loremtext}>{String.lorem1}</Text>
                <LongButton
                    title={String.google}
                    imgstyle={[styles.imgstyle, { marginLeft: 10 }]}
                    IconName={icons.google}
                />
                <LongButton
                    title={String.google}
                    imgstyle={[styles.imgstyle, { marginLeft: 10 }]}
                    IconName={icons.apple}
                />

                <View style={styles.mainview}>
                    <View style={styles.view}>
                        <View style={[styles.Viewstyle, { marginRight: 10 }]}></View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{String.or}</Text>
                    </View>
                    <View style={styles.view}>
                        <View style={[styles.Viewstyle, { marginLeft: 10 }]}></View>
                    </View>
                </View>
                <Text style={styles.emailtext}>Email</Text>
                <TextInput
                    style={styles.textinputstyle}
                    placeholder="Enter your Email address"
                    placeholderTextColor={'#808080'}
                    onChangeText={(email) => setEmail(email)}
                />
                {errors.email && (<Text style={{
                    fontSize: 14,
                    color: 'red',
                    marginTop: 4, padding: 5
                }}>
                    {errors.email}
                </Text>)}
            </View>
            <BlueButton
                onPress={() => {
                    navigation.navigate("RegisterScreen")
                }}
                title={String.withemail}
                // textStylebutt={styles.textStylebutt}
                // contibutstyle={styles.contibutstyle}
            />


            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textalread}>{String.Already}</Text>
                <TouchableOpacity onPress={handelRegister}>
                    <Text onPress={() => {
                        navigation.navigate("HomeScreen")
                    }} style={[styles.textalread, { color: '#0e0140', fontWeight: '700' }]}>{String.Login}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:'10%'}}>
                <Text style={styles.textalread1}>{String.Bysigning}</Text>
                <TouchableOpacity>
                    <Text style={[styles.textalread1, { color: '#0e0140', fontWeight: '700' }]}>{String.Terms}</Text>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={styles.textalread1}>{String.and}</Text>
                <TouchableOpacity>
                    <Text style={[styles.textalread1, { color: '#0e0140', fontWeight: '700' }]}>{String.conditions}</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}
export default LoginScreen;
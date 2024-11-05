import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import { styles } from './styles';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import OTPTextInput from 'react-native-otp-textinput';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';
const Otpscreen = ({ navigation }) => {
  const [otpcode, setOtpcode] = useState('');
  const handleOtpChange = (e) => {
    setOtpcode(e);
  };
  return (
    <View>
      <Backarrow
        IconName={icons.back}
      />
      <Text style={styles.enterotp}>{String.enter}</Text>
      <Text style={styles.wehavejust}>{String.wehavejust}</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={styles.wehavejust}>email </Text>
        <Text style={styles.emailtext}>example@gmail.com</Text>
      </View>
      <OTPTextInput
        handleTextChange={handleOtpChange}
        tintColor="#aaaaaa"
        inputCount={4}
        textInputStyle={styles.otpbox}
        containerStyle={styles.otpContainer}
      />
      <BlueButton
      onPress={()=>{
        navigation.navigate("HomeScreen")
       }}
        title={String.continue}
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
        <Text style={styles.didnottext}>{String.didnot}</Text>
        <Text style={styles.resendtext}>{String.resend}</Text>
      </View>
    </View>
  )
}

export default Otpscreen;
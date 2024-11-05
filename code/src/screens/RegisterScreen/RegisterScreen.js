import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';


const RegisterScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false)
  const [errors, setErrors] = useState({});
  const [hidepassword, setHidepassword] = useState('')
  const getError = (firstName, lastName, password) => {
    const errors = {};
    if (!firstName) {
      errors.firstName = 'Please Enter FirstName';

    } else if (!firstName) {
      errors.firstName = 'Please Valid FirstName';

    }
    if (!lastName) {
      errors.lastName = 'Please Enter lastName';

    } else if (!lastName) {
      errors.lastName = 'Please Valid lastName';

    }
    if (!password) {
      errors.password = 'Enter Password';

    } else if (password.length < 8) {
      errors.password = 'Enter Password of 8 characters';
    }
    return errors;
  }
  const handelRegister = () => {
    const errors = getError(firstName, lastName, password);
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
      <View style={{ marginTop: 10 }}>
        <Text style={styles.youraccounttext}>{String.youaccount}</Text>
        <Text style={styles.loremtext}>{String.lorem}</Text>
      </View>
      <View style={{  }}>
        <Text style={styles.emailtext}>FirstName</Text>
        <TextInput
          style={styles.textinputstyle}
          placeholder="Enter your Firstname"
          placeholderTextColor={'#808080'}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        {errors.firstName && (<Text style={{
          fontSize: 14,
          color: 'red',
          marginTop: 4, padding: 5
        }}>
          {errors.firstName}
        </Text>)}
        <Text style={styles.emailtext}>LastName</Text>
        <TextInput
          style={styles.textinputstyle}
          placeholder="Enter your Lastname"
          placeholderTextColor={'#808080'}
          onChangeText={(lastName) => setLastName(lastName)}
        />
        {errors.lastName && (<Text style={{
          fontSize: 14,
          color: 'red',
          marginTop: 4, padding: 5
        }}>
          {errors.lastName}
        </Text>)}
        <Text style={styles.emailtext}>Password</Text>
        <View style={[styles.textinputstyle, { height: 60 }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput

              placeholder="Create a Password "
              placeholderTextColor={'#808080'}
              secureTextEntry={hidepassword ? false : true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => setPassword(password)}
            />

            {password.length > 1 && (
              <TouchableOpacity onPress={() => setHidepassword(!hidepassword)}>
                {hidepassword ?
                  <Image source={icons.show} style={styles.showimg} />
                  :
                  <Image source={icons.hide} style={styles.showimg} />}
              </TouchableOpacity>)}
          </View>
          {errors.password && (<Text style={{
            fontSize: 14,
            color: 'red',
            marginTop: 4,
            padding: 5
          }}>
            {errors.password}
          </Text>)}
        </View>
        <View style={styles.selectedview}>
        <TouchableOpacity onPress={() => {
              navigation.navigate("SelectedcityScreen")
            }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.selectText}>{String.select}</Text>
           
              <Image source={icons.next} style={styles.nextimg} />
          </View>
            </TouchableOpacity>

        </View>

        <BlueButton
          //  onPress={handelRegister}
          onPress={() => {
            navigation.navigate("ChoosejobScreen")
          }}
          title={String.withemail}
          registerbutton={styles.registerbutton}
         
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center',  }}>
          <Text style={styles.textalread}>{String.Already}</Text>
          <TouchableOpacity
            // onPress={()=>{
            //         navigation.navigate("ChoosejobScreen")
            //        }}
            onPress={handelRegister}
          >
            <Text style={[styles.textalread, { color: '#0e0140', fontWeight: '700' }]}>{String.Login}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:'10%' }}>
          <Text style={styles.textalread1}>{String.Bysigning}</Text>
          <TouchableOpacity>
            <Text style={[styles.textalread1, { color: '#0e0140', fontWeight: '700' }]}>{String.Terms}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
          <Text style={styles.textalread1}>{String.and}</Text>
          <TouchableOpacity>
            <Text style={[styles.textalread1, { color: '#0e0140', fontWeight: '700' }]}>{String.conditions}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>

  );
}
export default RegisterScreen;
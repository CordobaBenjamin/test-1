import React, { useState } from 'react';
import { Button, View, Text, Image, colorOpacityModal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';



const ChoosejobScreen = ({ navigation }) => {
  const [focusedBox, setFocusedBox] = useState(false);
  const setData = (status) => {
    setFocusedBox(status);
    
  };
  return (
    <View style={styles.container}>
      <Backarrow
        IconName={icons.back}
      />

      <Text style={styles.stylechoosetext}>{String.choose}</Text>
      <Text style={styles.areyoutext}>{String.areyou}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <View style={[styles.Viewstyle1,{ borderColor: focusedBox === 1 ? '#0e0140' : '#e5e8ec'}]}>
          <TouchableOpacity onPress={() => setData(1)}>
          <Image source={require('../../../assets/images/job.png')} 
        style={styles.jobimg} />
          <Text style={styles.textstyle}>{String.find}</Text>
          <Text style={styles.textstyle2}>{String.jobdream}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 10 }}></View>
        <View style={[styles.Viewstyle1,{borderColor: focusedBox === 2 ? '#0e0140' : '#e5e8ec'}]}>
        <TouchableOpacity onPress={() => setData(2)}>
          <Image source={require('../../../assets/images/employes.png')}
          style={styles.jobimg} />
          <Text style={styles.textstyle}>{String.employee}</Text>
          <Text style={styles.textstyle2}>{String.employeedream}</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{
        position: 'absolute', alignSelf: 'center',
        bottom: 70
      }}>
        <BlueButton
          onPress={() => {
            navigation.navigate("SpecializationScreen")
          }}
          title={String.continue}
          choosejonbutton={styles.choosejonbutton}
        />
      </View>

    </View>
  );
}
export default ChoosejobScreen;
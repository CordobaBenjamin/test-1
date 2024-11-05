import React, { useState } from 'react';
import { View, Text, colorOpacityModal, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import LongButton from '../../Componets/LongButtonComponets/LongButton';
import ReactNativeModal from 'react-native-modal';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';

const SpecializationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState()
  const [isChecked, setChecked] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }
  const toggleCheckbox = (boxNumber) => {
    console.log('isChecked----', isChecked)
    setChecked(boxNumber === isChecked ? 0 : boxNumber);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Backarrow
          IconName={icons.back}
        />
        <Text style={styles.whattext}>{String.what}</Text>
        <Text style={styles.loremtext}>{String.lorem}</Text>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(1)}>
              <View style={[styles.radiobuttonview, isChecked === 1 ? styles.checked : styles.checkedstyle]}></View>

            </TouchableOpacity>
            <Text style={styles.designtext}>{String.design}</Text>
          </View>
        </View>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(2)}>
              <View style={[styles.radiobuttonview, isChecked === 2 ? styles.checked : styles.checkedstyle]}></View>
            </TouchableOpacity>

            <Text style={styles.designtext}>{String.development}</Text>
          </View>
        </View>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(3)}>
              <View style={[styles.radiobuttonview, isChecked === 3 ? styles.checked : styles.checkedstyle]}></View>
            </TouchableOpacity>
            <Text style={styles.designtext}>{String.engineering}</Text>
          </View>
        </View>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(4)}>
              <View style={[styles.radiobuttonview, isChecked === 4 ? styles.checked : styles.checkedstyle]}></View>
            </TouchableOpacity>
            <Text style={styles.designtext}>{String.salas}</Text>
          </View>
        </View>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(5)}>
              <View style={[styles.radiobuttonview, isChecked === 5 ? styles.checked : styles.checkedstyle]}></View>
            </TouchableOpacity>
            <Text style={styles.designtext}>{String.writing}</Text>
          </View>
        </View>
        <View style={styles.boxline}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleCheckbox(6)}>
              <View style={[styles.radiobuttonview, isChecked === 6 ? styles.checked : styles.checkedstyle]}></View>
            </TouchableOpacity>
            <Text style={styles.designtext}>{String.finance}</Text>
          </View>
        </View>
        <BlueButton
          //  onPress={handelRegister}
          title={String.continue}
          continueButton={styles.continueButton}
          onPress={() => setModalVisible(true)}
        />
        <ReactNativeModal
          isVisible={modalVisible}
          backdropColor='#c8c7cd'
          backdropOpacity={colorOpacityModal}
          onBackdropPress={toggleModal}
          supportedOrientations={['portrait', 'landscape']}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection={['down']}
          onRequestClose={() => {
            setModalVisible(false)
          }}>
          <View style={styles.mainviewstyle}>
            <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 50 }}>
              <Text style={styles.styletext}>{String.agree}</Text>
              <TouchableOpacity>
                <Text style={styles.termstyletext}>{String.termsofservice}</Text>
              </TouchableOpacity>
              <Text style={styles.styletext}>{String.and}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity>
                <Text style={styles.termstyletext}>{String.condition}</Text>
              </TouchableOpacity>
              <Text style={styles.styletext}>{String.including}</Text>
            </View>
            <Text style={styles.toeleStyle}>{String.toelectronic}</Text>

            <BlueButton
              title={String.agrecontinue}
              agreestyle={styles.agreestyle}
              onPress={() => {
                navigation.navigate("SignUpScreen")
              }}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.Disgreestyle}>{String.Disgree}</Text>
            </TouchableOpacity>
          </View>

        </ReactNativeModal>
      </ScrollView>
    </View>
  )
}
export default SpecializationScreen;
import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles';
import { String } from '../../Helper/string';
// import CountryPicker, { getAllCountries } from 'react-native-country-picker-modal';
const  SelectedcityScreen =({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchText, setSearchText] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const handleSearch = (text) => {
      // Handle search logic here
      setSearchText(text);
    };
    const [isChecked, setChecked] = useState(false);
    const toggleModal = () => {
      setModalVisible(!modalVisible)
    }
    const toggleCheckbox = (boxNumber) => {
      console.log('isChecked----', isChecked)
      setChecked(boxNumber === isChecked ? 0 : boxNumber);
    };
    return(
<View style={styles.container}>
    <View style={{flexDirection:'row', marginTop:30, }}>
        <TouchableOpacity  onPress={()=>{
    navigation.navigate("RegisterScreen")
   }}>
        <Image source={require('../../../assets/images/close.png')} style={styles.closeimg}></Image>
        </TouchableOpacity>
    <Text style={styles.Selectedcitytext}>{String.Selected}</Text>
    </View>
 <View style={styles.searchview}>
     <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
       <Image source={require('../../../assets/images/search.png')} style={styles.searchimg}></Image>
     </TouchableOpacity>
       <TextInput
         placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
      />
       </View>
       </View>
       
       {selectedCountry && (
        <View>
          <Text>Selected country: {selectedCountry.name}</Text>
          <Text>Country code: {selectedCountry.cca2}</Text>
          {/* Add more details as needed */}
        </View>
      )}
       <View style={{flexDirection:'row', marginTop:20}}>
       <TouchableOpacity onPress={() => toggleCheckbox(1)}>
       <View style={[styles.radiobutonview,isChecked === 1 ? styles.checked : styles.checkedstyle]}></View>
       </TouchableOpacity>
       <Text style={styles.textstyle}>Afghanistan</Text>
       </View>
      
       <View style={{flexDirection:'row', marginTop:20}}>
       <TouchableOpacity onPress={() => toggleCheckbox(2)}>
       <View style={[styles.radiobutonview,isChecked === 2 ? styles.checked : styles.checkedstyle]}></View>
       </TouchableOpacity>
       <Text style={styles.textstyle}>Albania</Text>
       </View>
       <View style={{flexDirection:'row', marginTop:20}}>
       <TouchableOpacity onPress={() => toggleCheckbox(3)}>
       <View style={[styles.radiobutonview,isChecked === 3 ? styles.checked : styles.checkedstyle]}></View>
       </TouchableOpacity>
       <Text style={styles.textstyle}>Angola</Text>
       </View>
</View>
    )
}
export default SelectedcityScreen
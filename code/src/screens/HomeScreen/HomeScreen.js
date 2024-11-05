import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (text) => {
    
    console.log('Searching for:', text);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', }}>
          <Image source={icons.user} style={styles.profilview}></Image>
          <View>
            <View style={styles.flexdri}>
              <Text style={styles.hiitext}>{String.hii}</Text>
              <Image source={icons.hand} style={styles.logostyle}></Image>
            </View>
            <Text style={[styles.textfind,styles.textfind2]}>{String.find}</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.notification} style={styles.bellstyle}></Image>
          </TouchableOpacity>
        </View>
        <View>
        </View>
        <View style={styles.searchview}>
                <View style={styles.searchBar}>
                    <TouchableOpacity>
                        <Image source={icons.sar} style={styles.searchimg} />
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
        <Text style={styles.recomtext}>{String.recommendation}</Text>
<View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={styles.boxviewstyle}>

            <View style={styles.flexstyle}>
              <View style={styles.viewstyle}>
                <Image source={icons.shopee} style={styles.shopeeimg}></Image>
              </View>
              <View>
                <Text style={styles.seniortext}>Senior UI/UX Designer</Text>
                <Text style={[styles.seniortext,styles.seniortext9]}>Shopee</Text>
                <Text style={[styles.seniortext,styles.seniortext8]}>Jakarta, indonesia(Remote)</Text>
                <Text style={[styles.seniortext, styles.seniortext7]}>$1100-$12.000/Month</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <View style={styles.buttonstyle}>
                      <Text style={styles.buttontext}>Fulltime</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={[styles.buttonstyle, { width: 100 }]}>
                      <Text style={styles.buttontext}>Tow days ago</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>


          </View>
          <View style={[styles.boxviewstyle, { backgroundColor: '#8845a9' }]}>

            <View style={styles.flexstyle}>
              <View style={styles.viewstyle}>
                <Image source={icons.shopee} style={styles.shopeeimg}></Image>
              </View>
              <View>
                <Text style={styles.seniortext}>Senior UI/UX Designer</Text>
                <Text style={[styles.seniortext, styles.seniortext1,]}>Shopee</Text>
                <Text style={[styles.seniortext,styles.seniortext1]}>Jakarta, indonesia(Remote)</Text>
                <Text style={[styles.seniortext,styles.seniortext2]}>$1100-$12.000/Month</Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <View style={[styles.buttonstyle, { backgroundColor: '#bd69f5' }]}>
                      <Text style={styles.buttontext}>Fulltime</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={[styles.buttonstyle,styles.buttonstyle2]}>
                      <Text style={styles.buttontext}>Tow days ago</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        
        </View>
   
        <Text style={styles.recomtext}>{String.recent}</Text>
        <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Findjobs") }}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.M} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Digital Marketing</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, styles.textfindtop]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle,styles.buttonstyle0]}>
                                            <Text style={[styles.buttontext,styles.buttontext1]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle,styles.buttonstyle3 ]}>
                                            <Text style={[styles.buttontext,styles.buttontext1]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Findjobs") }}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.M} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Advertisement Senior</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, styles.buttontext1]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, styles.buttonstyle3]}>
                                            <Text style={[styles.buttontext, styles.buttontext1]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

<View style={{marginBottom:'50%'}}></View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen;
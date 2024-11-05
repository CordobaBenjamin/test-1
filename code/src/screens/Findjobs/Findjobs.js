import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, colorOpacityModal } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import ReactNativeModal from 'react-native-modal';
import LongButton from '../../Componets/LongButtonComponets/LongButton';

const Findjobs = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState()
    const [focusedBox, setFocusedBox] = useState(false);
    const [items, setItems] = useState([]);
    const [progressValue, setProgressValue] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const AddButtonClick = () => {
        if (inputValue === ""){
            alert("Eingabefeld ist Leer");
        } else {
         
            setItems(prevState => [...prevState, inputValue]);
          
            setInputValue('');
        }
    }
    
    const setData = (status) => {
        setFocusedBox(status);

    };
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }
    const handleSearch = (text) => {

        console.log('Searching for:', text);
    };
   useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevValue) => (prevValue < 100 ? prevValue + 10 : prevValue));
    }, 500);

    return () => clearInterval(interval);
  }, []);


  
    return (
        <ScrollView>
            <View style={styles.container}>
              
                  <View style={styles. headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>{String.findjob}</Text>
            </View>

          
                <View style={styles.searchview}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity onPress={handleSearch}>
                            <Image source={icons.sar} style={styles.searchimg} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Search..."
                            value={searchQuery}
                            onChangeText={handleSearch}
                            style={styles.searchInput}
                        />
                        <View style={ styles.widthview}></View>
                        <TouchableOpacity onPress={handleSearch}>
                            <View style={styles.Capture1img}>
                                <Image source={icons.Capture1} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
          
              {/* {items.map((item, index) => ( */}
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.sell} style={styles.shopeeimg} />
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity 
                                   onClick={() => deleteButtonClick(index)}
                                //      onPress={() => {
                                //     navigation.navigate("SavedScreen")
                                // }}
                                >
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Sell</Text>
                                <Text style={[styles.textfind, styles.textfind2]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle,styles.buttonstyle11 ]}>
                                            <Text style={[styles.buttontext,styles.buttontexttt ]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle,styles.buttonstyleee]}>
                                            <Text style={[styles.buttontext,,styles.buttontexttt]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

              {/* ))} */}
                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.light} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Senior UI/UX Designer</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, styles.buttontexttt ]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, styles.buttontexttt ]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.light} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Marketing Manager</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.digitalview}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.jobContainer}>
                            <View style={styles.viewstyle2}>
                                <Image source={icons.M} style={styles.shopeeimg}></Image>
                            </View>
                            <View style={styles.jobDetails}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.digitaltext}>Marketing Manager</Text>
                                    <TouchableOpacity>
                                        <Image source={icons.save} style={styles.saveimg} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.textfind}>Cardano</Text>
                                <Text style={[styles.textfind, { marginTop: 5 }]}>$560-$12,000/Month</Text>
                                <View style={styles.buttonRow}>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Fulltime</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <View style={[styles.buttonstyle, { width: 100, backgroundColor: '#f2f2f2' }]}>
                                            <Text style={[styles.buttontext, { color: '#808080' }]}>Two days ago</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ReactNativeModal
                    isVisible={modalVisible}
                    backdropColor='#c8c7cd'
                    onBackdropPress={toggleModal}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    onRequestClose={() => {
                        setModalVisible(false)
                    }}
                    style={{ justifyContent: 'flex-end', margin: 0, bottom: 0 }}>
                    <View style={styles.modalestyle}>
                        <ScrollView>
                            <View style={styles.modalestylerow}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Image source={icons.close} style={styles.closeimg}></Image>
                                </TouchableOpacity>
                                <Text style={styles.filtertext}>Filter</Text>
                                <Text style={styles.resenttext}>Reset Filters</Text>
                            </View>
                            <Text style={styles.filtertext}>Categories</Text>
                            <View style={styles.categor}>
                                <View style={[styles.catrgoriesbutton, { backgroundColor: focusedBox === 1 ? '#ff751a' : '#f2f2f2', width: '50%', }]}>
                                    <TouchableOpacity onPress={() => setData(1)}>
                                        <View style={{ flexDirection: 'row' }}>
                                            {focusedBox === 1 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 1 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}

                                  
                                            <Text style={[styles.text, { color: focusedBox === 1 ? '#fff' : '#0e0140' }]}>Designer & Craative</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.catrgoriesbutton, { backgroundColor: focusedBox === 2 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(2)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 2 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 2 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 2 ? '#fff' : '#0e0140' }]}>Finance</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.cat}>
                                <View style={[styles.catrgoriesbutton, { width: '60%', backgroundColor: focusedBox === 3 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(3)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 3 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 3 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 3 ? '#fff' : '#0e0140' }]}>Engineering&Architecture</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.catrgoriesbutton, { width: '25%', backgroundColor: focusedBox === 4 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(4)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 4 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 4 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 4 ? '#fff' : '#0e0140' }]}>Writing</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={ styles.catview}>
                                <View style={[styles.catrgoriesbutton, { width: '35%', backgroundColor: focusedBox === 5 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(5)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 5 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 5 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 5 ? '#fff' : '#0e0140' }]}>Marketing</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.catrgoriesbutton, { width: '50%', backgroundColor: focusedBox === 6 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(6)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 6 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 6 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 6 ? '#fff' : '#0e0140' }]}>Develoment & IT</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.modalestylerow}>
                                <Text style={styles.filtertext}>Salaries</Text>
                                <Text style={[styles.resenttext, { fontSize: 15 }]}>$6,000/Month</Text>
                            </View>
                              {/* <ProgressBar ProgressBar={progressValue} />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setProgressValue((prevValue) => (prevValue < 100 ? prevValue + 10 : prevValue))}
                            > */}

                            {/* </TouchableOpacity> */}
                            <View style={styles.progress}></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.text$}>$560</Text>
                                <Text style={[styles.text$, { marginRight: 35 }]}>$12.000</Text>
                            </View>
                            <Text style={styles.filtertext}>Jobs</Text>
                            <View style={ styles.flexDri}>
                                <View style={[styles.catrgoriesbutton, { width: '35%', marginLeft: 20, backgroundColor: focusedBox === 7 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(7)}>
                                        <View style={{ flexDirection: 'row', }}>
                                            {focusedBox === 7 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 7 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.text, { color: focusedBox === 7 ? '#fff' : '#0e0140' }]}>Part time</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.catrgoriesbutton, { width: '35%', marginLeft: 20, backgroundColor: focusedBox === 8 ? '#ff751a' : '#f2f2f2' }]}>
                                    <TouchableOpacity onPress={() => setData(8)}>
                                        <View style={styles.modalestylerow}>
                                            {focusedBox === 8 ? (
                                                <Image source={icons.check} style={[styles.checkimg, { tintColor: focusedBox === 8 ? '#fff' : '#0e0140' }]} />
                                            ) : (

                                                <Image source={icons.add1} style={styles.addimg} />

                                            )}
                                            <Text style={[styles.textall, { color: focusedBox === 8 ? '#fff' : '#0e0140' }]}>Full time</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <LongButton
                                onPress={() => {
                                    navigation.navigate("JobDetails")
                                }}
                                title={String.applyfilter}
                                continustyle1={styles.continustyle1}
                                textStylebutt={styles.textStylebutt}

                            />
                        </ScrollView>
                    </View>


                </ReactNativeModal>
            </View>
                <View style={styles.stylesbottom}></View>
                
        </ScrollView>
    )
}
export default Findjobs;
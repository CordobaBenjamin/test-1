import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { styles } from './styles';

import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import DateTimePicker from '@react-native-community/datetimepicker';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';
const AddneweductionScreen = () => {
    const [title, setTitle] = useState();
    const [complyname, setComplyname] = useState();
    const [school, setSchool] = useState();
    const [study, setStudy] = useState();
    const [grade, setGrade] = useState();
    const [isUpArrow, setIsUpArrow] = useState(true);
    const [description, setDescription] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startDate, setStartDate] = useState('');
    const [selectedDate2, setSelectedDate2] = useState(new Date());
    const [endDate, setEndDate] = useState('');
    const [showDatePicker2, setShowDatePicker2] = useState(false);
    const toggleArrow = () => {
        setIsUpArrow(!isUpArrow);
    };
    const showDatepicker = () => {
        setShowDatePicker(true);
    };
    const onDateChange = (event, date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (date) {
            setSelectedDate(date);
            setStartDate(formatDate(date));
        }
    };
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };
    // second date picker
    const showDatepicker2 = () => {
        setShowDatePicker2(true);
    };
    const onDateChange2 = (event, date) => {
        setShowDatePicker2(Platform.OS === 'ios');
        if (date) {
            setSelectedDate2(date);
            setEndDate(formatDate(date));
        }
    };
    const handleEmploymentTypePress = () => {
        Alert.alert(
            'Alert Title',
            isUpArrow ? 'Open Upper Arrow Pressed' : 'Close Lower Arrow Pressed',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    };

    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Backarrow
                            IconName={icons.back}
                        />
                        <Text style={styles.textstyle}>{String.addneweducation}</Text>

                    </View>
                    {/* <View style={styles.headerContainer}>
                <Backarrow IconName={icons.back} />
                <Text style={styles.messagetext}>{String.addneweducation}</Text>
            </View> */}
                    <Text style={styles.textinput}>School</Text>
                    <TextInput
                        style={styles.textinputstyle}
                        placeholder="Ex: Harvard University"
                        placeholderTextColor={'#808080'}
                        onChangeText={(school) => setSchool(school)}
                    />
                    <Text style={styles.textinput}>Degree</Text>
                    <View style={styles.textinputstyle}>
                        <View style={styles.textInputContainer}>
                            <TouchableOpacity onPress={() => {
                                toggleArrow();
                                handleEmploymentTypePress();
                            }}>
                                <View style={styles.rowContainer}>
                                    <Text style={styles.addnewtextstyle}>Please Select</Text>

                                    <Image
                                        style={styles.imgstylesinmypropo}
                                        source={isUpArrow ? icons.uparrow : icons.downarrow}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.textinput}>Field of study</Text>
                    <TextInput
                        style={styles.textinputstyle}
                        placeholder="Ex: Shopee"
                        placeholderTextColor={'#808080'}
                        onChangeText={(study) => setStudy(study)}
                    />

                    <Text style={styles.textinput}>Start Date</Text>
                    <View style={styles.textinputstyle1}>

                        <TextInput
                            placeholder="Select Date"
                            placeholderTextColor={'#808080'}
                            value={startDate}
                            onChangeText={(startdate) => setStartDate(startdate)}
                        />
                        <TouchableOpacity onPress={showDatepicker}>
                            <Image source={icons.date} style={styles.dateimg}></Image>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onDateChange}
                            />
                        )}
                        {/* <TouchableOpacity>
                        <Image source={icons.date} style={styles.dateimg}></Image>
                    </TouchableOpacity> */}
                    </View>
                    <Text style={styles.textinput}>End Date</Text>
                    <View style={styles.textinputstyle1}>
                        <TextInput
                            placeholder="Select Date"
                            placeholderTextColor={'#808080'}
                            value={endDate}
                            onChangeText={(endDate) => setEndDate(endDate)}
                        />
                        <TouchableOpacity onPress={showDatepicker2}>
                            <Image source={icons.date} style={styles.dateimg}></Image>
                        </TouchableOpacity>
                        {showDatePicker2 && (
                            <DateTimePicker
                                value={selectedDate2}
                                mode="date"
                                is24Hour={true}
                                display="default"
                                onChange={onDateChange2}
                            />
                        )}
                        {/* <TouchableOpacity>
                        <Image source={icons.date} style={styles.dateimg}></Image>
                    </TouchableOpacity> */}
                    </View>
                    <Text style={styles.textinput}>Grade</Text>
                    <TextInput
                        style={styles.textinputstyle}
                        placeholder="EX: Business"
                        placeholderTextColor={'#808080'}
                        onChangeText={(grade) => setGrade(grade)}
                    />
                    <Text style={styles.textinput}>Description</Text>
                    <TextInput
                        style={[styles.textinputstyle, { height: '10%', textAlignVertical: 'top' }]}

                        placeholder="Lorem ipsum"
                        placeholderTextColor={'#808080'}
                        onChangeText={(description) => setDescription(description)}
                    />
                    <BlueButton
                        title={String.savech} />
                </View>
                <View style={styles.button}></View>
            </ScrollView>
        </View>
    )
}
export default AddneweductionScreen;
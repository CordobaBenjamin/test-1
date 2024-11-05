import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, TextInput } from 'react-native';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
import { styles } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
const Settingnotification = () => {
    const [newpostSwitch, setNewpostSwitch] = useState(false);
    const [interviewSwitch, setInterviewSwitch] = useState(false);
    const [messSwitch, setMessSwitch] = useState(false);
    const [newjobpostSwitch, setNewjobpostSwitch] = useState(false);
   
    const toggleArrow = () => {
        setIsUpArrow(!isUpArrow);
    };
   
    const toggleSwitch = (switchName) => {
        switch (switchName) {
            case 'newpost':
                setNewpostSwitch(!newpostSwitch);
                break;
            case 'interview':
                setInterviewSwitch(!interviewSwitch);
                break;
            case 'mess':
                setMessSwitch(!messSwitch);
                break;
            case 'newjobpost':
                setNewjobpostSwitch(!newjobpostSwitch);
                break;
            default:
                break;
        }
    };
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>
                <Backarrow
                    IconName={icons.back}
                />
                <Text style={styles.textstyle}>{String.Noti}</Text>
            </View>
            <View style={styles.messagesNotiview}>
                <Text style={styles.massgetextstyle}>{String.massages}</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.newposttext}>{String.newpost}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#66cc99" }}
                        thumbColor={newpostSwitch ? "#fff" : "#f4f3f4"}
                        onValueChange={() => toggleSwitch('newpost')}
                        value={newpostSwitch}
                    />

                 

                </View>

                <View style={styles.viewstyle}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.newposttext}>{String.interview}</Text>
                    <Switch
            trackColor={{ false: "#767577", true: "#66cc99" }}
            thumbColor={interviewSwitch ? "#fff" : "#f4f3f4"}
            onValueChange={() => toggleSwitch('interview')}
            value={interviewSwitch}
          />

                </View>

                <View style={styles.viewstyle}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.newposttext}>{String.mess}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#66cc99" }}
                        thumbColor={messSwitch ? "#fff" : "#f4f3f4"}
                        onValueChange={() => toggleSwitch('mess')}
                        value={messSwitch}
                    />

                </View>

                <View style={styles.viewstyle}></View>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={styles.newposttext}>{String.newjobpost}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#66cc99" }}
                        thumbColor={newjobpostSwitch ? "#fff" : "#f4f3f4"}
                        onValueChange={() => toggleSwitch('newjobpost')}
                        value={newjobpostSwitch}
                    />


                </View>


            </View>

            <View style={styles.textinputstyle1}>

</View>
        </View>

    )
}
export default Settingnotification;
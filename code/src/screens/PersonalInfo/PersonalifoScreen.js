import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { String } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import BlueButton from '../../Componets/BlueButtonComponents/BlueButton';
const personalifoScreen = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [location, setLocation] = useState();
    const [focusedBox, setFocusedBox] = useState(false);
    const [isEditing, setEditing] = useState(false);

    const startEditing = () => {
        setEditing(true);
    };

    const saveChanges = () => {
        setEditing(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Backarrow
                        IconName={icons.back}
                    />
                    <Text style={styles.textstyle}>{String.personal}</Text>
                    <TouchableOpacity onPress={startEditing}>
                        <Image source={icons.Editicon} style={styles.editerimg}></Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.fullname}>First Name</Text>
                {/* <View  style={styles.textinputstyle}>
                    <Text style={styles.personaltextstyle}>Gustavo</Text>
                </View> */}

                <TextInput
                    style={styles.textinputstyle}
                    placeholder="Gustavo"
                    placeholderTextColor={'#808080'}
                    value={isEditing ? name : undefined}
                    onChangeText={(text) => {
                        setName(text);
                        setEditing(true);
                    }}
                    editable={isEditing}
                />
                <Text style={styles.fullname}>Last Name</Text>

                <TextInput
                    style={styles.textinputstyle}
                    placeholder="LipShutz"
                    placeholderTextColor={'#808080'}
                    value={isEditing ? lastname : undefined}
                    onChangeText={(text) => {
                        setLastname(text);
                        setEditing(true);
                    }}
                    editable={isEditing}
                />
                <Text style={styles.fullname}>Email</Text>


                <TextInput
                    style={styles.textinputstyle}
                    placeholder="xyz@gmail.com"
                    placeholderTextColor={'#808080'}
                    value={isEditing ? email : undefined}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEditing(true);
                    }}
                    editable={isEditing}
                />
                <Text style={styles.fullname}>Phone</Text>


                <TextInput
                    style={styles.textinputstyle}
                    placeholder="+11234567890"
                    placeholderTextColor={'#808080'}
                    value={isEditing ? phone : undefined}
                    onChangeText={(text) => {
                        setPhone(text);
                        setEditing(true);
                    }}
                    editable={isEditing}
                />
                <Text style={styles.fullname}>Location</Text>


                <TextInput
                    style={styles.textinputstyle}
                    placeholder="Lorem ipsum"
                    placeholderTextColor={'#808080'}
                    value={isEditing ? location : undefined}
                    onChangeText={(text) => {
                        setLocation(text);
                        setEditing(true);
                    }}
                    editable={isEditing}
                />
                <BlueButton
                    title={ String.savechange }
                    onPress={saveChanges}
                    JobDetailsbutton={isEditing ? styles.applyButton : styles.JobDetailsbutton}
                    textStylebutt={isEditing ? styles.textStylebutt3 : styles.textStylebutt}

                />
                <View style={{ marginBottom: '30%' }}></View>
            </ScrollView>
        </View>
    )
}
export default personalifoScreen
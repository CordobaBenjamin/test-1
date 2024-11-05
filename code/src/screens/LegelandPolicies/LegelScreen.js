import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import Backarrow from '../../Componets/Backarrow/Backarrow';
import { icons } from '../../Helper/icons';
import { String } from '../../Helper/string';
const LegelScreen =()=>{
    return(
        <View  style={styles.container}>  
        <ScrollView>
        <View style={{ flexDirection: 'row' }}>
                <Backarrow
                    IconName={icons.back}
                />
                <Text style={styles.textstyle}>{String.legal}</Text>

            </View>
            <Text style={styles.termstext}>{String.terms}</Text>
            <Text style={styles.termsloremtext}>{String.termslorem}</Text>
            <Text style={styles.termsloremtext}>{String.termslorem}</Text>
            <Text style={styles.termstext}>{String.changes}</Text>
            <Text style={styles.termsloremtext}>{String.termslorem}</Text>
            <Text style={styles.termsloremtext}>{String.termslorem}</Text>
            </ScrollView>
            </View>
      
    )
}
export default LegelScreen;
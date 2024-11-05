/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { setTopLevelNavigation } from './NavigationHelper';
import OnBoardScreen from './src/screens/OnBoard/OnBorardScreen';
import SwiperScreen from './src/screens/Swiper/SwiperScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import ChoosejobScreen from './src/screens/ChooseJob/ChoosejobScreen';
import SpecializationScreen from './src/screens/Specialization/SpecializationScreen';
import BottomTabNavigation from './src/Componets/BottomTabNavigation/BottomTabNavigation';
import Findjobs from './src/screens/Findjobs/Findjobs';
import JobDetails from './src/screens/JobDetails/JobDetails';
import SelectedcityScreen from './src/screens/Selectedcity/SelectedcityScreen';
import Otpscreen from './src/screens/OtpScreen/Otpscreen';
import SignUpScreen from './src/screens/SignUp/SignUpScreen';
import ChanceSeptimus from './src/screens/ChanceSeptimus/ChanceSeptimus';
import SavedDetailsScreen from './src/screens/SavedDetails/SavedDetailsScreen';
import ApplyjobScreen from './src/screens/Applyjob/ApplyjobScreen';
import NotificationScreen from './src/screens/Notification/NotificationScreen';
import ProfileScreen from './src/screens/ProfilScreen/ProfilScreen';
import SettingsScreen from './src/screens/Settings/SettingsScreen';
import ExperienceScreen from './src/screens/Experience/ExperienceScreen';
import AddnewpositionScreen from './src/screens/AddNewPostion/AddnewpositionScreen';
import AddneweductionScreen from './src/screens/AddNewEduction/AddneweductionScreen';
import LegelScreen from './src/screens/LegelandPolicies/LegelScreen';
import Settingnotification from './src/screens/SettingNotification/Settingnotification';
import SavedScreen from './src/screens/saved/SavedScreen';
import personalifoScreen from './src/screens/PersonalInfo/PersonalifoScreen';

const stack = createStackNavigator()

export default function App({ navigation }) {
  return (
    <NavigationContainer independent ref={(ref) => setTopLevelNavigation(ref)}>
      <StatusBar barStyle="dark-content" />
      <stack.Navigator initialRouteName='OnBoardScreen'>
        <stack.Screen name="OnBoardScreen" component={OnBoardScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SwiperScreen" component={SwiperScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ChoosejobScreen" component={ChoosejobScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SpecializationScreen" component={SpecializationScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SelectedcityScreen" component={SelectedcityScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Otpscreen" component={Otpscreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="HomeScreen" component={BottomTabNavigation} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Findjobs" component={Findjobs} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="JobDetails" component={JobDetails} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ChanceSeptimus" component={ChanceSeptimus} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SavedDetailsScreen" component={SavedDetailsScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ApplyjobScreen" component={ApplyjobScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="personalifoScreen" component={personalifoScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="ExperienceScreen" component={ExperienceScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="AddnewpositionScreen" component={AddnewpositionScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="AddneweductionScreen" component={AddneweductionScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="LegelScreen" component={LegelScreen} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="Settingnotification" component={Settingnotification} options={{ headerShown: false }}></stack.Screen>
        <stack.Screen name="SavedScreen" component={SavedScreen} options={{ headerShown: false }}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
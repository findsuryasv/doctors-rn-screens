/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import Register from './src/Screens/Register/Register';
import Menu from './src/Screens/Menu/Menu';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import Patients from './src/Screens/Patients/Patients';
import Appointment from './src/Screens/Appointment/Appointment';
import Filter from './src/Screens/Filter/Filter';
import Record from './src/Screens/Record/Record';
import Login from './src/Screens/Login/Login';
import Chat from './src/Screens/Chat/Chat';
import Reviews from './src/Screens/Reviews/Reviews';
import PersonalInformation from './src/Screens/PersonalInformation/PersonalInformation';
import Clinic from './src/Screens/Clinic/Clinic';
import SandS from './src/Screens/SandS/SandS';
import Rewards from './src/Screens/Rewards/Rewards';
import EducationAndExperience from './src/Screens/EducationAndExperience/EducationAndExperience';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/Screens/Profile/Profile';
// import { Icon } from 'react-native-paper';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
import Edit from './src/Screens/Edit/Edit';

const Stack = createStackNavigator();

const App = () => {
  const [openDrawer, setToOpenDrawer] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerMode: 'none' }} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" options={{
          headerLeft: () => (<TouchableOpacity
            onPress={() => setToOpenDrawer(!openDrawer)}
            style={{
              paddingLeft: 15,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image source={require('./src/assets/images/bars.png')} style={{ width: 18, height: 18 }} />
          </TouchableOpacity>
          ),
          title: 'Dr ',
          headerStyle: {
            backgroundColor: '#6AA446',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          {
            (props) => <Dashboard {...props} openDrawer={openDrawer} />
          }
        </Stack.Screen>
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="Patients" component={Patients} />
        <Stack.Screen name="Records" component={Record} />
        <Stack.Screen name="Profile" component={Profile} options={{
          headerRight: () => (<TouchableOpacity
            onPress={() => setToOpenDrawer(!openDrawer)}
            style={{
              paddingVertical: 9,
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection:'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <Image source={require('./src/assets/images/pencil.png')} resizeMode='contain' style={{width: 120, height: 50, marginRight: 3}} />
            {/* <Text style={{ fontSize: 14, fontWeight: '600', color: '#808080' }}>Edit Profile</Text> */}
          </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
        <Stack.Screen name="Clinic" component={Clinic} />
        <Stack.Screen name="SandS" component={SandS} />
        <Stack.Screen name="EducationAndExperience" component={EducationAndExperience} />
        <Stack.Screen name="Edit" component={Edit} options={{title: 'Profile/Edit'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

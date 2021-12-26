import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../Services';

const Patients = (props) => {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [patients, setPatients] = React.useState([]);

  const onChangeSearch = query => setSearchQuery(query);

  React.useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const res = await axiosInstance.get(`api/doctors/patients?id=${JSON.parse(user)?.id}`);
        console.log(res?.data);
        setPatients(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={{ padding: 20}}>
      <View style={{ marginBottom: 20, position: 'relative' }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#D9D9D9',
            height: 50,
            borderRadius: 10,
            paddingLeft: 14,
            paddingRight: 35,
          }}
          placeholder="Eg: Name, Clinics, Hospitals, Special.."
        />
        <IconButton
          style={{ position: 'absolute', right: 0 }}
          icon="magnify"
          color="#D9D9D9"
          size={25}
          onPress={() => console.log('Pressed')}
        />
      </View>
      {
        patients.length > 0 && patients.map(p => (
          <View
            key={p?.id}
            style={{
              background: '#FFFFF',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#F1F1F1',
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
              borderRadius: 8,
              padding: 25,
              marginBottom: 12,
            }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              {
                p?.profilePic !== undefined && p?.profilePic !== null && (
                  <View style={{ marginRight: 12 }}>
                    <Image source={{ uri: p?.profilePic, width: 80, height: 80 }} />
                  </View>
                )
              }
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#2C2A28',
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  {p?.personal?.firstName} {p?.personal?.lastName}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={{ marginRight: 28 }}>
                    <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Gender</Text>
                    <Text
                      style={{
                        color: '#2C2A28',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      {p?.gender}
                    </Text>
                  </View>
                  <View style={{ marginRight: 28 }}>
                    <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Age</Text>
                    <Text
                      style={{
                        color: '#2C2A28',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      {p?.age} yrs
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#A4A4A4', fontSize: 10 }}>
                      Blood type
                    </Text>
                    <Text
                      style={{
                        color: '#2C2A28',
                        fontSize: 12,
                        fontWeight: 'bold',
                      }}>
                      {p?.bloodGroup || ''}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 16,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{ width: '35%' }}>
                <Text style={{ color: '#A4A4A4', fontSize: 10, marginBottom: 8 }}>
                  Last consultation
                </Text>
                <View
                  style={{
                    backgroundColor: '#F6F6F6',
                    borderRadius: 9,
                    padding: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{ color: '#2C2A28', fontWeight: 'bold', fontSize: 12 }}>
                    N/A
                  </Text>
                </View>
              </View>
              <View style={{ width: '65%', paddingLeft: 11 }}>
                <Text style={{ color: '#A4A4A4', fontSize: 12, marginBottom: 8 }}>
                  Last consultation for
                </Text>
                <View
                  style={{
                    backgroundColor: '#F6F6F6',
                    borderRadius: 9,
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{ color: '#2C2A28', fontWeight: 'bold', fontSize: 12 }}>
                   N/A
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <TouchableOpacity
              onPress={() => props.navigation.navigate('Records', {id: p?.userId})}
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#E19538',
                  borderRadius: 10,
                  paddingVertical: 13,
                  paddingHorizontal: 25,
                  marginRight: 8,
                }}>
                <Text style={{ color: '#E19538', fontSize: 14, fontWeight: '600' }}>
                  Medical records
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderStyle: 'solid',
                  backgroundColor: '#E19538',
                  borderColor: '#E19538',
                  borderRadius: 10,
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <IconButton
                    icon="chat"
                    size={16}
                    color="#fff"
                    style={{ padding: 0, margin: 0 }}
                  />
                  <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600' }}>
                    {' '}
                    Chat
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))
      }

    </ScrollView>
  );
};

export default Patients;

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

const Patients = () => {
  return (
    <ScrollView style={{ padding: 20, marginTop: 50 }}>
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
      <View
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
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: '#2C2A28',
                fontWeight: 'bold',
                marginBottom: 10,
              }}>
              Srinivasarao
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
                  Nonbinary
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
                  24 yrs
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
                  B +ve
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
                23rd Jan 2021
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
                Mild Migrain
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
    
    </ScrollView>
  );
};

export default Patients;

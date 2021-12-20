import React, { useState } from 'react';
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

const Reviews = () => {

  const [showDownload, setToShowDownload] = useState(true);
  const [showDialog, setToShowDialog] = useState(false);
  
  return (<ScrollView style={{ paddingHorizontal: 20, marginTop: 80 }}>
      <View style={{ marginBottom: 30, position: 'relative' }}>
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
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          borderRadius: 8,
          padding: 17,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 11,
            }}>
            <View
              style={{
                backgroundColor: '#E19538',
                padding: 14,
                borderRadius: 6,
                marginRight: 14,
              }}>
              <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
            </View>
            <View>
              <Text
                style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500' }}>
                Name one
              </Text>
              <Text style={{ color: '#808080', fontSize: 12, marginTop: 4 }}>
                Reviewed yesterday
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 12, color: '#9B9B9B' }}>
            kyehbcouyewbcubdsljhcbeilwucbiewubcuehbucyhbeuybceuybcueybcuewybcuqwybecuaewbcuahbwecuybwqecuvy..
          </Text>
        </View>
      </View>
      <View
        style={{
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          borderRadius: 8,
          padding: 17,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 11,
            }}>
            <View
              style={{
                backgroundColor: '#E19538',
                padding: 14,
                borderRadius: 6,
                marginRight: 14,
              }}>
              <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
            </View>
            <View>
              <Text
                style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500' }}>
                Name one
              </Text>
              <Text style={{ color: '#808080', fontSize: 12, marginTop: 4 }}>
                Reviewed yesterday
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#ECC364"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
            <IconButton
              icon="star"
              color="#D9D9D9"
              size={22}
              style={{ margin: 0, padding: 0, width: 20 }}
            />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 12, color: '#9B9B9B' }}>
            kyehbcouyewbcubdsljhcbeilwucbiewubcuehbucyhbeuybceuybcueybcuewybcuqwybecuaewbcuahbwecuybwqecuvy..
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12, marginBottom: 5 }}>Your reply</Text>
          <View style={{ backgroundColor: '#F6F6F6', borderRadius: 10 }}>
            <Text
              style={{
                color: '#9B9B9B',
                fontSize: 12,
                paddingHorizontal: 7,
                paddingVertical: 5,
              }}>
              kyehbcouyewbcubdsljhcbeilwucbiewubcuehbucyhbeuybceuybcueybcuewybcuqwybecuaewbcuahbwecuybwqecu..
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Reviews;
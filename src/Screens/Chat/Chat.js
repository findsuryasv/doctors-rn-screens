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

 const Chat = () => {
  const [showDownload, setToShowDownload] = useState(true);
  return (
    <ScrollView style={{ paddingHorizontal: 20, marginTop: 80 }}>
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
      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>

      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>
      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>
      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>
      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>
      <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 10, borderBottomWidth: 2, borderStyle: 'solid', borderColor:'#F6F6F6', marginBottom: 6}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#E19538',
              padding: 14,
              borderRadius: 6,
              marginRight: 14
            }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>No</Text>
          </View>
          <View>
            <Text style={{ color: '#2C2A28', fontSize: 14, fontWeight: '600' }}>
              Name one
            </Text>
            <Text style={{ color: '#808080', fontSize: 12, fontWeight: '600', marginTop: 4 }}>
              Some random message?
            </Text>
          </View>
        </View>

        <View>
        <Text style={{fontSize: 10, color: '#808080', marginBottom: 8}}>15 min</Text>
        <View style={{backgroundColor: '#6AA446', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5}}>
        <Text style={{color: '#fff', fontSize: 10, fontWeight: '700'}}>15</Text>
        </View>
        </View>

      </View>
    </ScrollView>
  );
}

export default Chat;
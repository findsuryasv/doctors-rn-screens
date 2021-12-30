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
import { IconButton, Portal, Dialog } from 'react-native-paper';

const Summary=()=> {
  const [showDownload, setToShowDownload] = useState(true);
  const [showDialog, setToShowDialog] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        marginTop: 80,
        overFlow: 'scroll',
      }}>
      <Text style={{ fontSize: 12, padding: 5, color: '#A4A4A4' }}>
        eason for visit
      </Text>
      <Text style={{ fontSize: 20, padding: 5, color: '#2C2A28',fontWeight:600 ,marginBottom:10}}>
        Instent Request
      </Text>

<Text style={{ fontSize: 12, padding: 5, color: '#A4A4A4' }}>
        Notes :
      </Text>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          keyboardType="numeric"
          underlineColorAndroid="#fff"
          style={{
            backgroundColor: '#fff',
            paddingLeft: 15,
            borderColor: '#E19538',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 15,
            borderTopLeftRadius: 15,
            height: 120,
            borderTopRightRadius: 15,
          }}
          placeholder="Deacribeabout yor medical records"
        />
      </View>

      <Text style={{ fontSize: 12, padding: 5, color: '#A4A4A4' }}>
        Analysis :
      </Text>

      <View style={{ marginBottom: 10 }}>
        <TextInput
          keyboardType="numeric"
          underlineColorAndroid="#fff"
          style={{
            backgroundColor: '#fff',
            paddingLeft: 15,
            borderColor: '#E19538',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 15,
            borderTopLeftRadius: 15,
            height: 120,
            borderTopRightRadius: 15,
          }}
          placeholder="Deacribeabout yor medical records"
        />
      </View>

       <Text style={{ fontSize: 12, padding: 5, color: '#A4A4A4' }}>
        Suggestions :
      </Text>

      <View style={{ marginBottom: 10 }}>
        <TextInput
          keyboardType="numeric"
          underlineColorAndroid="#fff"
          style={{
            backgroundColor: '#fff',
            paddingLeft: 15,
            borderColor: '#E19538',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 15,
            borderTopLeftRadius: 15,
            height: 120,
            borderTopRightRadius: 15,
          }}
          placeholder="Deacribeabout yor medical records"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 25,
        }}>

        <TouchableOpacity
          style={{
            width: '80%',
            backgroundColor: '#E19538',
            paddingVertical: 12,
            borderRadius: 10,
            margin: 5,
            borderColor: '#E19538',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#FFFFFF',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Summary;
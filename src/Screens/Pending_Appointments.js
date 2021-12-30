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

const Pending_Appointments=()=> {
  const [showDownload, setToShowDownload] = useState(true);
  const [showDialog, setToShowDialog] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        marginTop: 80,
        maxHeight:'40%',
        overFlow:'scroll'
      }}>
      <View
        style={{
          backgroundColor: '#F0F7EF',
          display: 'flex',
          flexDirection: 'column',
          padding: 15,
          borderRadius: 15
        }}>
        <Text style={{ fontSize: '20', color: '#2C2A28', fontWeight: '600' }}>
          Pending Appointments
        </Text>

<View style={{flexDirection:'column',justifyContent:'space-between',backgroundColor:'white',padding:20,marginVertical:20, borderRadius:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:35,width:40,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#E19538',paddingHorizontal:10,borderRadius:'8'}}>
        <Text style={{textAlign:'center',color:'white'}}>Vs</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width:'50%',
            paddingHorizontal:10

          }}>
          <Text style={{ color: '#2C2A28', fontWeight: '600', fontSize: 18 }}>
            Srinivasarao
          </Text>
            <Text style={{ color: '#A4A4A4', fontWeight: '400', fontSize: 10 }}>
              45,Male
            </Text>
        </View>
        
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '40%',
            backgroundColor: '#F6F6F6',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical:10
          }}>
          <Text style={{ color: '#2C2A28', fontWeight: '600', fontSize: 10 }}>
            28 Apr 2021
          </Text>
          <Text
            style={{
              height: 1,
              backgroundColor: '#D9D9D9',
              width: '60%',
            }}></Text>
          <Text style={{ color: '#A4A4A4', fontWeight: '400', fontSize: 10 }}>
            12:30 am 
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 25 }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Approve</Text>
                </TouchableOpacity>
            </View>
</View>
<View style={{flexDirection:'column',justifyContent:'space-between',backgroundColor:'white',padding:20,marginVertical:20, borderRadius:15}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:35,width:40,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#E19538',paddingHorizontal:10,borderRadius:'8'}}>
        <Text style={{textAlign:'center',color:'white'}}>Vs</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width:'50%',
            paddingHorizontal:10

          }}>
          <Text style={{ color: '#2C2A28', fontWeight: '600', fontSize: 18 }}>
            Srinivasarao
          </Text>
            <Text style={{ color: '#A4A4A4', fontWeight: '400', fontSize: 10 }}>
              45,Male
            </Text>
        </View>
        
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '40%',
            backgroundColor: '#F6F6F6',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical:10
          }}>
          <Text style={{ color: '#2C2A28', fontWeight: '600', fontSize: 10 }}>
            28 Apr 2021
          </Text>
          <Text
            style={{
              height: 1,
              backgroundColor: '#D9D9D9',
              width: '60%',
            }}></Text>
          <Text style={{ color: '#A4A4A4', fontWeight: '400', fontSize: 10 }}>
            12:30 am 
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 25 }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Approve</Text>
                </TouchableOpacity>
            </View>
</View>
      </View>
    
    </ScrollView>
  );
}
export default Pending_Appointments;
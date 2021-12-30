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

const Prescription=()=> {
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
      <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',flex:1,justifyContent:'space-around',marginBottom:20,alignItems:'center',borderColor:'#F1F1F1',borderWidth:1,padding:10,borderRadius:10}}>

      <View style={{flexDirection:'column'}}>
      <Text style={{color:'#2C2A28',fontSize:'18',fontWeight:'700'}}>Medicine name</Text>
       <Text style={{color:'#A4A4A4',fontSize:'10',fontWeight:'400'}}>Information (eg: 500mg)</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Quality</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>10</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Instructions</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>Daily</Text>
      </View>
      </View>

       <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',flex:1,justifyContent:'space-around',marginBottom:20,alignItems:'center',borderColor:'#F1F1F1',borderWidth:1,padding:10,borderRadius:10}}>

      <View style={{flexDirection:'column'}}>
      <Text style={{color:'#2C2A28',fontSize:'18',fontWeight:'700'}}>Medicine name</Text>
       <Text style={{color:'#A4A4A4',fontSize:'10',fontWeight:'400'}}>Information (eg: 500mg)</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Quality</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>10</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Instructions</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>Daily</Text>
      </View>
      </View>

       <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',flex:1,justifyContent:'space-around',marginBottom:20,alignItems:'center',borderColor:'#F1F1F1',borderWidth:1,padding:10,borderRadius:10}}>

      <View style={{flexDirection:'column'}}>
      <Text style={{color:'#2C2A28',fontSize:'18',fontWeight:'700'}}>Medicine name</Text>
       <Text style={{color:'#A4A4A4',fontSize:'10',fontWeight:'400'}}>Information (eg: 500mg)</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Quality</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>10</Text>
      </View>

      <View style={{flexDirection:'column',backgroundColor:'#F6F6F6',padding:10,borderRadius:8}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'700'}}>Instructions</Text>
       <Text style={{color:'#000000',fontSize:'12',fontWeight:'400'}}>Daily</Text>
      </View>
      </View>
      <View style={{alignItems:'flex-end'}}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#F6F6F6',width:'40%',borderRadius:10}}>
<Text style={{color:'#808080',fontSize:'40',fontWeight:'700'}}>+</Text>
<Text style={{color:'#808080',fontSize:'14',fontWeight:'700',paddingTop:5,paddingLeft:10}}>add Medicine</Text>
</View>
      </View>
<View style={{alignItems:'center',marginVertical:20}}>
      <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#E19538',
            paddingVertical: 15,
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
export default Prescription;
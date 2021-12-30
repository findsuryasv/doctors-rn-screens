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

const Popup=()=> {
  const [showDownload, setToShowDownload] = useState(true);
  const [showDialog, setToShowDialog] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        marginTop: 80,
      }}>
     <View style={{backgroundColor:'#F0F7EF',display:'flex',flexDirection:'column',padding:15,borderRadius:15}} >

     <View style={{width:'100%',alignItems:'flex-end'}}>
     <Text style={{paddingHorizontal:8,marginBottom:20, fontSize:20,fontWeight:900,color:'white',backgroundColor:'#A4A4A4'}}>-</Text>
     </View>

     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
     Patient name
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'18',fontWeight:700}}>
     Srinivasa rao
     </Text>
     </View>
     <View style={{height:54,width:54,backgroundColor:"#A4A4A4",borderRadius:8}}>
     </View>
     </View>

     <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
     Age
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'14',fontWeight:900}}>
     35 yrs
     </Text>
     </View>
     <Text style={{color:'#A4A4A4',fontSize:'30'}}>
     |
     </Text>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
    Gender
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'14',fontWeight:900}}>
    Male
     </Text>
     </View>
      <Text style={{color:'#A4A4A4',fontSize:'30'}}>
     |
     </Text>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
     Blood Group
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'14',fontWeight:900}}>
     A+
     </Text>
     
     </View>
     </View>

         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
     Email
     </Text>
     <Text style={{color:'#4F81E1',fontSize:'14',fontWeight:900}}>
     someone123@gmail.com
     </Text>
     </View>
     <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'10'}}>
    Phone No
     </Text>
     <Text style={{color:'#4F81E1',fontSize:'14',fontWeight:900}}>
    9876543210
     </Text>
     </View>
     </View>

     <View style={{height:1,backgroundColor:'gray',marginVertical:10}}></View>

   <View style={{flexDirection:'column'}}>
     <Text style={{color:'#A4A4A4',fontSize:'12'}}>
    Health Vitals:
     </Text>
     <View style={{flexDirection:'row',marginTop:10,marginBottom:2,alignItems:'center',justifyContent:'center'}}>
     <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:700,backgroundColor:'white',padding:12,borderColor:'#E1E6E0',borderWidth:1}}>
    BMI: N/A
     </Text>
     <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:700,backgroundColor:'white',padding:12,borderColor:'#E1E6E0',borderWidth:1}}>
    WEIGHT: 112
     </Text>
     <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:700,backgroundColor:'white',padding:12,borderColor:'#E1E6E0',borderWidth:1}}>
    PLUS: 185
     </Text>
     <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:700,backgroundColor:'white',padding:12,borderColor:'#E1E6E0',borderWidth:1}}>
    BP:120/80
     </Text>
     </View>
      <Text style={{color:'#A4A4A4',fontSize:'10'}}>
    *As per Dec25,2021
     </Text>
     </View>

     <View style={{flexDirection:'column',marginTop:20}}>
     <Text style={{color:'#A4A4A4',fontSize:'12'}}>
    Health Vitals:
     </Text>
     <View style={{flexDirection:'row',marginTop:10,alignItems:'flex-start',justifyContent:'flex-start'}}>
      <Text style={{color:'#2C2A28',fontSize:'16',paddingRight:18}}>
    Hospital name
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'16',paddingRight:18}}>
    Symptomes
     </Text>
     <Text style={{color:'#2C2A28',fontSize:'16',paddingRight:18}}>
    Date
     </Text>
     </View>
<View style={{flexDirection:'row',marginVertical:5,alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'white',padding:15}}>
      <Text style={{color:'#A4A4A4',fontSize:'12',marginRight:70}}>
    Apollo
     </Text>
     <Text style={{color:'#A4A4A4',fontSize:'12',marginRight:70}}>
    knee
     </Text>
     <Text style={{color:'#A4A4A4',fontSize:'12',marginRight:70}}>
    Dec 30 2021
     </Text>
     </View>
     </View>
     </View>
    </ScrollView>
  );
}
export default Popup;
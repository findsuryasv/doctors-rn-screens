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

const MedicalRecords=()=> {
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
     <View style={{display:'flex',flexDirection:'column',borderColor:'#F1F1F1',borderWidth:1,padding:20,borderRadius:10,marginVertical:10}}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
     <Text style={{color:'#2C2A28',fontSize:'12',fontWeight:'400'}}>#1234567</Text>
     <TouchableOpacity style={{borderRadius:10,backgroundColor:'#E8E8E8'}}>
                    <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center',padding:10 }}>Prescrip.pdf</Text>
                </TouchableOpacity>
     </View>

     <View style={{flexDirection:'row',marginVertical:20,justifyContent:"space-between"}}>
     <View style={{flexDirection:'column'}}>
      <Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>submited by</Text>
      <View style={{flexDirection:'row',justifyContent:"center"}}>

<View style={{height:40,width:40,backgroundColor:'gray',margin:5}}></View>
<View style={{flexDirection:'column'}}>
 <Text style={{color:'#2C2A28',fontSize:'16',fontWeight:'700',marginRight:5}}>Dr. Vinuthna</Text>
  <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'400'}}>General medicine</Text>
</View>
<Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'400',paddingTop:5}}>MBBS, MD</Text>
      </View>
     </View>
     <View >
<Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>Uploaded on</Text>
<Text style={{color:'#2C2A28',fontSize:'12',fontWeight:'700'}}>29-12-2021</Text>
     </View>
     </View>

<Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms </Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms1 </Text>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms2 </Text>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms 3</Text>
</View>
     
     </View>

       <View style={{display:'flex',flexDirection:'column',borderColor:'#F1F1F1',borderWidth:1,padding:20,borderRadius:10,marginVertical:10}}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
     <Text style={{color:'#2C2A28',fontSize:'12',fontWeight:'400'}}>#1234567</Text>
     <TouchableOpacity style={{borderRadius:10,backgroundColor:'#E8E8E8'}}>
                    <Text style={{ fontSize: 14, fontWeight: '400', textAlign: 'center',padding:10 }}>Prescrip.pdf</Text>
                </TouchableOpacity>
     </View>

     <View style={{flexDirection:'row',marginVertical:20,justifyContent:"space-between"}}>
     <View style={{flexDirection:'column'}}>
      <Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>submited by</Text>
      <View style={{flexDirection:'row',justifyContent:"center"}}>

<View style={{height:40,width:40,backgroundColor:'gray',margin:5}}></View>
<View style={{flexDirection:'column'}}>
 <Text style={{color:'#2C2A28',fontSize:'16',fontWeight:'700',marginRight:5}}>Dr. Vinuthna</Text>
  <Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'400'}}>General medicine</Text>
</View>
<Text style={{color:'#A4A4A4',fontSize:'12',fontWeight:'400',paddingTop:5}}>MBBS, MD</Text>
      </View>
     </View>
     <View >
<Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>Uploaded on</Text>
<Text style={{color:'#2C2A28',fontSize:'12',fontWeight:'700'}}>29-12-2021</Text>
     </View>
     </View>

<Text style={{color:'#D9D9D9',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms </Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms1 </Text>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms2 </Text>
<Text style={{color:'##A4A4A4',fontSize:'12',fontWeight:'400',marginBottom:5}}>Symptoms 3</Text>
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
export default MedicalRecords;
import * as React from 'react';
import { useState } from "react";
import { Dimensions, View, Image, Text} from "react-native";
import { IconButton, TextInput} from 'react-native-paper'

const Appointment = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ minHeight: Dimensions.get('window').height, flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
            <View >
                <Text style={{ display: 'flex', color: '#000000', fontSize: 20, fontWeight: '500', fontFamily: 'poppins', padding: 10, paddingLeft: 60 }}>Appointments</Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#EEEEEE', width: Dimensions.get('window').width }}></View>
            <View>
            <View style={{ marginBottom: 20, position: 'relative',paddingVertical:15,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',justifyContent:'space-between' }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#D9D9D9',
            height: 50,
            borderRadius: 10,
            paddingLeft: 14,
            paddingRight: 35,
            backgroundColor:'#FFFFFF',
            width:'80%'
          }}
          placeholder="Eg: Name, Clinics, Hospitals, Special.."
        />
        <IconButton
          style={{ position: 'absolute', right: 80 , top:16}}
          icon="magnify"
          color="#D9D9D9"
          size={25}
          onPress={() => console.log('Pressed')}
        />
        <View style={{padding:19,backgroundColor:'#F6F6F6',borderRadius:10}}>
            <Image  source={require('../../assets/images/filtericon.png')}/>
        </View>
      </View>

      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>
<Image style={{height:12,width:12}} source={require('../../assets/images/inpersonicon.png')}/>In Person</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#F88E95',textAlign:'center',borderRadius:10}}>Canceled</Text>
</View>
      </View>

      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#ABD2A5',textAlign:'center',borderRadius:10}}>Completed</Text>
</View>
      </View>


      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#D9D9D9',textAlign:'center',borderRadius:10}}>Expired</Text>
</View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>
<Image style={{height:12,width:12}} source={require('../../assets/images/inpersonicon.png')}/>In Person</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#F88E95',textAlign:'center',borderRadius:10}}>Canceled</Text>
</View>
      </View>

      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#ABD2A5',textAlign:'center',borderRadius:10}}>Completed</Text>
</View>
      </View>


      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#D9D9D9',textAlign:'center',borderRadius:10}}>Expired</Text>
</View>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>
<Image style={{height:12,width:12}} source={require('../../assets/images/inpersonicon.png')}/>In Person</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#F88E95',textAlign:'center',borderRadius:10}}>Canceled</Text>
</View>
      </View>

      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#ABD2A5',textAlign:'center',borderRadius:10}}>Completed</Text>
</View>
      </View>


      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'100%',borderColor:'#F1F1F1', borderWidth: 1,borderColor: "#F1F1F1",padding:10,borderRadius:10,marginBottom:10}}>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'50%'}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:18}}>Srinivasrao</Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>45,Male</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%',backgroundColor:'#F6F6F6',alignItems:'center',borderRadius:10}}>
    <Text style={{color:'#2C2A28',fontWeight:'600',fontSize:10,}}>28 Apr 2021</Text>
    <Text style={{height:1,backgroundColor:'#D9D9D9',width:'60%'}}></Text>
    <Text style={{color:'#A4A4A4',fontWeight:'400',fontSize:10}}>12:30Am</Text>
</View>
<View style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',width:'23%'}}>
<Text style={{color:'#2C2A28',fontWeight:'600',fontSize:12,textAlign:'center'}}>Online</Text>
    <Text style={{color:'#FFFFFF',fontWeight:'400',fontSize:12,backgroundColor:'#D9D9D9',textAlign:'center',borderRadius:10}}>Expired</Text>
</View>
      </View>
      
            </View>
        </View>
    )
}

export default Appointment;
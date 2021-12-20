import React from "react";
import { Dimensions, View, Image, Text, TouchableOpacity } from "react-native";
import { Checkbox, TextInput, RadioButton } from 'react-native-paper'
const Filter = () => {


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
            <View >
                <Text style={{ display: 'flex', color: '#2C2A28', fontSize: 20, fontWeight: '500', fontFamily: 'poppins', padding: 10, paddingLeft: 60 }}>Appointments/Filter</Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#EEEEEE', width: '98%' }}></View>


            <View style={{ display: 'flex', flexDirection: 'row', padding: 30, alignItems: 'center',justifyContent:'space-between' }}>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: '#D9D9D9', height: 34, width: '45%', fontSize: 12 }}
                    placeholder='From:'

                />
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: '#D9D9D9', height: 34, width: '45%', fontSize: 12 }}
                    placeholder='To::'

                />
                <Image source={require('../../assets/images/dataIcon.png')} />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row',width:'100%',justifyContent:'center',alignItems:'center',justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{ backgroundColor: '#E19538', paddingVertical: 17, paddingHorizontal: 50, borderRadius: 10,width:'80%' }}>
                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold',textAlign:'center' }}>Apply</Text>
                </TouchableOpacity>
                <Image source={require('../../assets/images/retryIcon.png')} />

            </View>
        </View>
    )
}
export default Filter;
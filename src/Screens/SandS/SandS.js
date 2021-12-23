import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");

const SandS = () => {
    return (
        <ScrollView style={{display:'flex',flexDirection:'column', minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>
            <Text style={{ fontSize: 12, padding: 5 }}>Services you offer </Text>
            <TextInput
                underlineColorAndroid="#fff"
                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                placeholder='Type and press enter to add your services' />
            <Text style={{ fontSize: 12, padding: 5 }}>Your Specializations</Text>
            <TextInput
                underlineColorAndroid="#fff"
                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                placeholder='Type and press enter to add your Specializations' />

            <View style={{height:250}}>
            </View>    
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25}}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SandS;
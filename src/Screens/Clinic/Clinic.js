import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");

const Clinic = () => {
    return (
        <ScrollView style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'column', paddingVertical: 15 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Clinic name</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Enter Clinic’s name'
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Address line 1</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Door/flat no, Appertement/Society name' />
                <Text style={{ fontSize: 12, padding: 5 }}>Address line 2</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Street name, Area name' />
                <Text style={{ fontSize: 12, padding: 5 }}>City</Text>
                <TextInput
                    underlineColorAndroid="transparent"

                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                    placeholder='City name'
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Pincode</Text>
                <TextInput
                    underlineColorAndroid="transparent"

                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                    placeholder='Postal code'
                />

                <Text style={{ fontSize: 12, padding: 5 }}>State/Province</Text>
                <TextInput
                    underlineColorAndroid="transparent"

                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                    placeholder='State/Province'
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Country</Text>
                <TextInput
                    underlineColorAndroid="transparent"

                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                    placeholder='Country'
                />
                <View style={{position:'relative'}}>
                <Text style={{ fontSize: 12, padding: 5 }}>Signature</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                />
                <View style={{position:'absolute',bottom:15,left:15,padding:15,backgroundColor:'#F6F6F6',borderRadius:5}}>
                    <View style={{backgroundColor:'#FFFFFF',padding:8,borderRadius:5,alignItems:'center'}}>
                    <Image source={require('../../assets/images/addIcon.png')}/>
                    </View>
                <Text style={{fontSize: 10,alignItems:'center',paddingTop:8}}>Add image</Text>
                </View>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between',marginVertical:25 }}>
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

export default Clinic;
import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
const Rewards = () => {
    return (
        <ScrollView style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>
            <View style={{ position: 'relative', marginBottom: 20 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Registrations</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                />
                <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 35, left: 10, padding: 5, backgroundColor: '#F6F6F6', borderRadius: 5 }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderRadius: 5, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/addIcon.png')} />
                    </View>
                    <Text style={{ fontSize: 10, alignItems: 'center', paddingTop: 11, justifyContent: 'center', paddingHorizontal: 50 }}>Add Registrations</Text>
                </View>
            </View>
            <View style={{ position: 'relative', marginBottom: 20 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Memberships</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                />
                <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 35, left: 10, padding: 5, backgroundColor: '#F6F6F6', borderRadius: 5 }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderRadius: 5, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/addIcon.png')} />
                    </View>
                    <Text style={{ fontSize: 10, textAlign: 'left', paddingTop: 11, justifyContent: 'center', paddingHorizontal: 50 }}>Add Memberships</Text>
                </View>
            </View>
            <View style={{ position: 'relative', marginBottom: 20 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Awards</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                />
                <View style={{ position: 'absolute', bottom: 15, left: 15, padding: 15, backgroundColor: '#F6F6F6', borderRadius: 5 }}>
                    <View style={{ backgroundColor: '#FFFFFF', padding: 8, borderRadius: 5, alignItems: 'center' }}>
                        <Image source={require('../../assets/images/addIcon.png')} />
                    </View>
                    <Text style={{ fontSize: 10, alignItems: 'center', paddingTop: 8 }}>Add Awards</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25 }}>
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
export default Rewards;
import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");
import { Controller, useForm } from 'react-hook-form';

const SandS = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const save = async (data) => {
        try {
            const res = await axiosInstance.post('/api/user/register', data);
            console.log(res);
            navigation.navigate('Dashboard')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={{display:'flex',flexDirection:'column', minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>
            <Text style={{ fontSize: 12, padding: 5 }}>Services you offer </Text>
            <Controller
                    name="servicesyouroffer"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                keyboardType='numeric'
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.servicesyouroffer ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, }}
                                placeholder='Type down some words about you'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.servicesyouroffer?.message || ''}</Text>
                        </View>
                    )}
                />
            <Text style={{ fontSize: 12, padding: 5 }}>Your Specializations</Text>
            <Controller
                    name="Specializations"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                keyboardType='numeric'
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.Specializations ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, }}
                                placeholder='Type and press enter to add your Specializations'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.Specializations?.message || ''}</Text>
                        </View>
                    )}
                />

            <View style={{height:250}}>
            </View>    
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25}}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSubmit(save)} style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default SandS;
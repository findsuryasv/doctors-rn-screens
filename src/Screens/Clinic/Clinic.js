import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import { Controller, useForm } from 'react-hook-form';
const { width, height } = Dimensions.get("window");
import axiosInstance from '../../Services';

const Clinic = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const save = async (data) => {
        console.log(data);
        const ClincData={
            requestType:1,
            profile:{
                doctorId: "5db57106-ac58-4aaf-ae79-a0a376269fdd",
                experience:[
                    {
                        hospitalId:'00000000-0000-0000-0000-000000000000',
                        hospital:'test1',
                        from:'2021-11-30T18:30:00.000Z',
                        doctorId:'5db57106-ac58-4aaf-ae79-a0a376269fdd',
                        designation:'doctor',
                        address:{
                            city:data.city,
                            country:data.country,
                            pinCode:data.pincode,
                            state:data.acouStateProvincentry,
                            streetAddress:data.address1
                        }
                    }

                ]
            }
        }
        console.log(JSON.stringify(ClincData));
        try {
            const res = await axiosInstance.post('/api/profile/doctor/', ClincData);
            console.log(res);
            navigation.navigate('Dashboard')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ScrollView style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'column', paddingVertical: 15 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Clinic name</Text>
                <Controller
                        name="clinicname"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Required Input' }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={{ marginBottom: 10 }}>
                                <TextInput
                                    value={value}
                                    onChangeText={(text) => onChange(text)}
                                    underlineColorAndroid="#fff"
                                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10,borderColor: `${!errors?.clinicname ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                                    placeholder='Clinic name'
                                />
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.clinicname?.message || ''}</Text>
                            </View>
                        )}
                        />
              <Text style={{ fontSize: 12, padding: 5 }}>Address line 1</Text>
            <Controller
                name="address1"
                control={control}
                rules={{
                    required: { value: true, message: 'Required Input' }
                }}
                render={({ field: { onChange, value } }) => (
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            value={value}
                            onChangeText={(text) => onChange(text)}
                            underlineColorAndroid="#fff"
                            style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.address1 ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, }}
                            placeholder='Door/flat no, Appertement/Society name'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.address1?.message || ''}</Text>
                    </View>
                )}
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Address line 2</Text>
            <Controller
                name="address2"
                control={control}
                rules={{
                    required: { value: true, message: 'Required Input' }
                }}
                render={({ field: { onChange, value } }) => (
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            value={value}
                            onChangeText={(text) => onChange(text)}
                            underlineColorAndroid="#fff"
                            style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.address2 ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, }}
                            placeholder='Street name , Area nane'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.address2?.message || ''}</Text>
                    </View>
                )}
            />
                <Text style={{ fontSize: 12, padding: 5 }}>City</Text>
             <Controller
                    name="city"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.city ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='City'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.city?.message || ''}</Text>
                        </View>
                    )}
                />
            <Text style={{ fontSize: 12, padding: 5 }}>Pincode</Text>
            <Controller
                    name="pincode"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.pincode ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='PinCode'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.pincode?.message || ''}</Text>
                        </View>
                    )}
                />

            <Text style={{ fontSize: 12, padding: 5 }}>State/Province</Text>
             <Controller
                    name="couStateProvincentry"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.couStateProvincentry ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='State/Province'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.couStateProvincentry?.message || ''}</Text>
                        </View>
                    )}
                />
            <Text style={{ fontSize: 12, padding: 5 }}>Country</Text>
            <Controller
                    name="country"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.country ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Country'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.country?.message || ''}</Text>
                        </View>
                    )}
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

                <TouchableOpacity  onPress={handleSubmit(save)}  style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 100 }}>

            </View>
        </ScrollView>
    )
}

export default Clinic;
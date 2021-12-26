import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, Image, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Checkbox } from 'react-native-paper'
import axiosInstance from '../../Services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {

    const [type, setType] = useState('email');
    const [checked, setChecked] = useState(false);
    const { handleSubmit, control, formState: { errors } } = useForm();

    const save = async (data) => {
        console.log(data)
        try {
            const res = await axiosInstance.post('/api/user/authenticate', { ...data, role: 2 });
            console.log(res);
            await AsyncStorage.setItem('user', JSON.stringify(res.data));
            navigation.navigate('Dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            <View style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#6AA446', flex: 1 }}>
                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 5, position: 'relative' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 120, left: '7%' }}>
                            <View style={{ position: 'relative' }}>
                                <Image source={require('../../assets/images/message.png')} />
                                <Text style={{
                                    color: '#6AA446', fontSize: 24, fontWeight: 'bold',
                                    position: 'absolute', top: 12, left: 24
                                }}>Hi</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 20, fontWeight: "500" }}>Welcome</Text>
                                <Text style={{ color: '#fff', fontFamily: 'Poppins', fontSize: 20, fontWeight: "500" }}>Back Doctor!</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/doctor.png')} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 20, padding: 20, borderTopRightRadius: 20, width: Dimensions.get('window').width, minHeight: Dimensions.get('window').height - 235, position: 'absolute', top: 235, }}>
                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>Login using</Text>
                            <TouchableOpacity onPress={() => setType('email')} style={{
                                backgroundColor: type === 'email' ? '#6AA446' : '#fff', padding: 12, marginLeft: 12,
                                borderWidth: type === 'email' ? 0 : 1, borderStyle: 'solid', borderRadius: 8, borderColor: '#6AA446'
                            }}>
                                <Text style={{ fontSize: 14, color: type === 'mobile' ? '#6AA446' : '#fff', fontWeight: 'bold' }}>Email ID</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#000', marginLeft: 12, fontSize: 13, color: '#0F2D5299' }}>or</Text>
                            <TouchableOpacity onPress={() => setType('mobile')} style={{
                                backgroundColor: type === 'mobile' ? '#6AA446' : '#fff', marginLeft: 12, padding: 12, color: '#6AA446',
                                borderWidth: type === 'mobile' ? 0 : 1, borderStyle: 'solid', borderRadius: 8, borderColor: '#6AA446'
                            }}>
                                <Text style={{ fontSize: 14, color: type === 'email' ? '#6AA446' : '#fff', fontWeight: 'bold' }}>Mobile No</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            {
                                type == 'email' && (
                                    <Controller
                                        name="userName"
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
                                                    style={{ backgroundColor: '#fff', paddingLeft: 15, marginTop: 12, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.userName ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15 }}
                                                    placeholder='Email Address *'
                                                />
                                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.userName?.message || ''}</Text>
                                            </View>
                                        )}
                                    />
                                )
                            }
                            {
                                type == 'mobile' && (
                                    <View style={{ position: 'relative' }}>
                                        <Controller
                                            name="phone"
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
                                                        style={{ backgroundColor: '#fff', paddingLeft: 15, marginTop: 12, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.phone ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15 }}
                                                        placeholder='Mobile name *'
                                                    />
                                                    <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.phone?.message || ''}</Text>
                                                </View>
                                            )}
                                        />
                                        <TouchableOpacity style={{
                                            backgroundColor: '#6AA446', paddingVertical: 11,
                                            paddingHorizontal: 25,
                                            position: 'absolute',
                                            top: 4, right: 4,
                                            borderWidth: 1, borderStyle: 'solid', borderRadius: 12, borderColor: '#6AA446'
                                        }}>
                                            <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Request OTP</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            <Controller
                                name="password"
                                secureTextEntry
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
                                            style={{ backgroundColor: '#fff', paddingLeft: 15, marginTop: 12, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.password ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15 }}
                                            placeholder='Password *'
                                        />
                                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.password?.message || ''}</Text>
                                    </View>
                                )}
                            />
                            <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5, marginBottom: 15 }}>
                                <Text style={{ color: '#4D4D4D', fontSize: 14 }}>
                                    Forgot password?
                                </Text>
                            </View>
                            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', width: '60%' }}>
                                    <Checkbox.Item status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} style={{ width: 12, height: 12, marginRight: 15, marginTop: 3 }} />
                                    <View>
                                        <Text style={{ color: '#4D4D4D', fontSize: 12 }}>
                                            By login to this, I agree to
                                        </Text>
                                        <Text style={{ color: '#6AA446', fontSize: 12 }}>
                                            Terms and Conditions
                                        </Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: '#6AA446', paddingVertical: 12, paddingHorizontal: 35, borderRadius: 10 }}
                                    onPress={handleSubmit(save)}>
                                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
                                <Text style={{ color: '#252524', fontSize: 16 }}>Don’t have an account? </Text>
                                <Text style={{ color: '#6AA446', fontSize: 16 }} onPress={() => navigation.navigate('Register')}>Register now.</Text>
                            </View>
                            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/home_r.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

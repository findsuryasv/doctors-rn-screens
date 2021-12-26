import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { View, Text, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Checkbox, RadioButton } from 'react-native-paper'
import axiosInstance from '../../Services';

const Register = ({navigation}) => {

    const [checked, setChecked] = useState('first');

    const { handleSubmit, control, formState: { errors } } = useForm();

    useEffect(() => {

    }, [])

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
        <ScrollView style={{ minHeight: Dimensions.get('window').height, flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>
            <View style={{ height: 1, backgroundColor: '#EEEEEE', width: Dimensions.get('window').width }}></View>
            <View class="radio-section" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', justifyContent: 'flex-start', width: '100%', paddingVertical: 15 }}>
                <View>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color='#6AA446'
                    />
                </View>
                <Text style={{ fontSize: 15, color: '#200A4D' }}>Patient</Text>
                <View style={{ width: '15%' }}></View>
                <View>
                    <RadioButton
                        value="second"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color='#6AA446'
                    />
                </View>
                <Text style={{ fontSize: 15, color: '#200A4D' }}>Doctor</Text>

            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Controller
                    name="firstName"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.firstName ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='First name *'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.firstName?.message || ''}</Text>
                        </View>
                    )}
                />
                <Controller
                    name="lastName"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.lastName ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Last name *'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.lastName?.message || ''}</Text>
                        </View>
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input', pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Invalid Email' } }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.email ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Email Address *'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.email?.message || ''}</Text>
                        </View>
                    )}
                />

                <View style={{ position: 'relative' }}>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            required: { value: true, message: 'Required Input' },
                            minLength: { value: 10, message: 'Invalid Mobile Number' },
                            maxLength: { value: 10, message: 'Invalid Mobile Number' }
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={{ marginBottom: 10 }}>
                                <TextInput
                                    value={value}
                                    keyboardType='numeric'
                                    onChangeText={(text) => onChange(text)}
                                    underlineColorAndroid="#fff"
                                    style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.phone ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                    placeholder='Mobile Number *'
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
                        borderWidth: 1, borderStyle: 'solid', borderRadius: 12, borderColor: `${!errors?.firstName ? '#6AA446' : 'red'}`
                    }}>
                        <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Request OTP</Text>
                    </TouchableOpacity>
                </View>

                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' },
                        minLength: { value: 6, message: 'Invalid Password' },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.password ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Set Password *'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.password?.message || ''}</Text>
                        </View>
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    rules={{
                        required: { value: true, message: 'Required Input' },
                        minLength: { value: 6, message: 'Invalid confirm Password' },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.confirmPassword ? '#6AA446' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder="Confirm Password *"
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.confirmPassword?.message || ''}</Text>
                        </View>
                    )}
                />
                <Controller
                    name="referalCode"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={{ marginBottom: 10 }}>
                            <TextInput
                                value={value}
                                onChangeText={(text) => onChange(text)}
                                underlineColorAndroid="#fff"
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Referral Code'
                            />
                        </View>
                    )}
                />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', width: Dimensions.get('window').width }}>
                <Checkbox.Item status='checked' style={{ width: 12, height: 12, marginRight: 20 }} />

                <Text style={{ color: '#4D4D4D', fontSize: 12, marginRight: 10 }}>
                    By login to this, I agree to
                </Text>
                <Text style={{ color: '#6AA446', fontSize: 12, marginRight: 10 }}>
                    Terms and Conditions
                </Text>

            </View>
            <TouchableOpacity style={{ backgroundColor: '#6AA446', paddingVertical: 12, borderRadius: 10, margin: 15 }} onPress={handleSubmit(save)}>
                <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Register</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: '#4D4D4D', fontSize: 14, marginRight: 10 }}>
                        Already have an account?
                    </Text>
                    <Text style={{ color: '#6AA446', fontSize: 14, marginRight: 10 }} onPress={() => navigation.navigate('Login')}>
                        Login now
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

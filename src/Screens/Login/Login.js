import React, { useState } from 'react'
import { Dimensions, Image, View, Text, TouchableOpacity } from 'react-native'
import { Checkbox, TextInput } from 'react-native-paper'

const Login = () => {

    const [type, setType] = useState('email');

    return (
        <View style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#6AA446', flex: 1 }}>
            <View style={{ position: 'relative' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, paddingHorizontal: 5, position: 'relative' }}>
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
                                <TextInput
                                    underlineColorAndroid="#fff"
                                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15 }}
                                    placeholder='Email'
                                />
                            )
                        }
                        {
                            type == 'mobile' && (
                                <View style={{ position: 'relative' }}>
                                    <TextInput
                                        underlineColorAndroid="#fff"
                                        style={{
                                            backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15,
                                            paddingRight: 130
                                        }}
                                        placeholder={type === 'email' ? 'Email' : 'Mobile number'}
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
                        <TextInput
                            secureTextEntry
                            underlineColorAndroid="#fff"
                            style={{ backgroundColor: '#fff', marginTop: 12, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15 }}
                            placeholder='Password'
                        />
                        <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', marginTop: 5, marginBottom: 15 }}>
                            <Text style={{ color: '#4D4D4D', fontSize: 14 }}>
                                Forgot password?
                            </Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 15 }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Checkbox.Item status='unchecked' style={{ width: 12, height: 12 }} />
                                <View>
                                    <Text style={{ color: '#4D4D4D', fontSize: 12 }}>
                                        By login to this, I agree to
                                    </Text>
                                    <Text style={{ color: '#6AA446', fontSize: 12 }}>
                                        Terms and Conditions
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#6AA446', paddingVertical: 12, paddingHorizontal: 50, borderRadius: 10 }}>
                                <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15, justifyContent: 'center' }}>
                            <Text style={{ color: '#252524', fontSize: 16 }}>Don’t have an account? </Text>
                            <Text style={{ color: '#6AA446', fontSize: 16 }}>Register now.</Text>
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <Image source={require('../../assets/images/home_r.png')} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

import React,{useState} from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Checkbox, TextInput, RadioButton } from 'react-native-paper'
const Register = () => {
    const [checked, setChecked] = React.useState('first');
    
    return (
        <View style={{ minHeight: Dimensions.get('window').height, flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20 }}>

            <View >
                <Text style={{ display: 'flex', color: '#000000', fontSize: 20, fontWeight: '500', fontFamily: 'poppins', padding: 10, paddingLeft: 60 }}>Register</Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#EEEEEE', width: Dimensions.get('window').width }}></View>
            <View class="radio-section" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', justifyContent: 'flex-start',width:'100%',paddingVertical:15 }}>
                <View>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                        color='#6AA446'
                        /> 
                </View>
                <Text style={{ fontSize: 15, color: '#200A4D' }}>Patient</Text>
                <View style={{width:'15%'}}></View>
                <View>
                    <RadioButton
                        value="second"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                        color='#6AA446'
                    /> 
                </View>
                <Text style={{ fontSize: 15, color: '#200A4D' }}>Doctor</Text>

            </View>

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='First name *'
                />

                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Last name'

                />
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Email *'
                />
                <View style={{ position: 'relative' }}>
                    <TextInput
                        underlineColorAndroid="#fff"
                        style={{
                            backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20,
                            paddingRight: 130
                        }}
                        placeholder='Mobile number *'
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

                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Set Password *'
                />
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Confirm password *'
                />
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#6AA446', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Referral code'
                />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', width: Dimensions.get('window').width }}>
                <Checkbox.Item status='unchecked' style={{ width: 12, height: 12, marginRight: 20 }} />

                <Text style={{ color: '#4D4D4D', fontSize: 12, marginRight: 10 }}>
                    By login to this, I agree to
                </Text>
                <Text style={{ color: '#6AA446', fontSize: 12, marginRight: 10 }}>
                    Terms and Conditions
                </Text>

            </View>
            <TouchableOpacity style={{ backgroundColor: '#6AA446', paddingVertical: 12, borderRadius: 10, margin: 15 }}>
                <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: '#4D4D4D', fontSize: 14, marginRight: 10 }}>
                        Already have an account?
                    </Text>
                    <Text style={{ color: '#6AA446', fontSize: 14, marginRight: 10 }}>
                        Login now
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Register

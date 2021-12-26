import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { IconButton  } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");
import { Controller, useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../Services';
const PersonalInformation = (navigation) => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [gender, setGender] = useState([]);
    const[Gender,SetGender] = useState("");
    const save = async (data) => {
        console.log(data);
        try {
            const user = await AsyncStorage.getItem('user');
            const Personaldata={
                requestType:'0',
                profile:{
                    contactInfo:{
                        city:data.city,
                        country:data.country,
                        pinCode:data.pincode,
                        state:data.couStateProvincentry,
                        streetAddress:data.address2
                    },
                    dateOfBirth:data.dateofbirth,
                    doctorId:JSON.parse(user)?.id,
                    gender:Gender,
                    height:'6',
                    id:JSON.parse(user)?.id,
                    languages:'english',
                    personal:{
                        phone:data.phone
                    },
                    profileDescription:data.bio,
                    profilePic:"none",
                    registration:data.licence,
                    signature:"none"
                }
            }
            console.log("personaldata>>>>>>>"+JSON.stringify(Personaldata))
            const res = await axiosInstance.post('/api/profile/doctor', Personaldata);
            console.log(res);
            navigation.navigate('Dashboard')
        } catch (error) {
            console.log(error);
        }
    }
    const genderDropdownRef = useRef();
    const styles = StyleSheet.create({
        shadow: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 10,
        },
        header: {
            flexDirection: "row",
            width,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F6F6F6",
        },
        headerTitle: { color: "#9B9B9B", fontWeight: "bold", fontSize: 12 },
        saveAreaViewContainer: { flex: 1, backgroundColor: "#000" },
        viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
        dropdownsRow: {
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: "5%",
        },
        dropdown1RowTxtStyle: { color: "#CACACA", textAlign: "left" },

        dropdown2BtnStyle: {
            flex: 1,
            height: 50,
            backgroundColor: "#FFF",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#D9D9D9",
            width: '100%'
        },
        dropdown2BtnTxtStyle: { color: "#CACACA", textAlign: "left", fontSize: 16 },
        dropdown2DropdownStyle: { backgroundColor: "#EFEFEF" },
        dropdown2RowStyle: {
            backgroundColor: "#EFEFEF",
            borderBottomColor: "#C5C5C5",
        },
        dropdown2RowTxtStyle: { color: "#CACACA", textAlign: "left" },
    });
    useEffect(() => {
        setTimeout(() => {
            setGender([
                { title: "Male" },
                {
                    title: "Female",
                },
                {
                    title: "Other",
                },
            ]);
        }, 1000);
    }, []);
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF', padding: 20 }}>

            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 12, padding: 5 }}>Profile Pic</Text>
                    <Image style={{ height: 107, width: 106 }} source={require('../../assets/images/profileEdit.png')} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', width: '60%', justifyContent: 'flex-start' }}>
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
                                    style={{paddingLeft: 12,  backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10,borderColor: `${!errors?.firstName ? '#D9D9D9' : 'red'}`, marginBottom: 0 }}
                                    placeholder='First name'
                                />
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.firstName?.message || ''}</Text>
                            </View>
                        )}
                    />
                    <Controller
                        name="lastname"
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
                                    style={{ paddingLeft: 12,backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10,borderColor: `${!errors?.lastname ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                                    placeholder='Last name'
                                />
                                <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.lastname?.message || ''}</Text>
                            </View>
                        )}
                    />
                    <Text style={{ fontSize: 12, padding: 5 }}>Gender</Text>
                    <SelectDropdown
                        ref={genderDropdownRef}
                        data={gender}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        defaultButtonText={"Select gender"}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.title;
                        }}
                        rowTextForSelection={(item, index) => {
                           
                            return item.title;
                        }}
                        buttonStyle={styles.dropdown2BtnStyle}
                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                        renderDropdownIcon={(isOpened) => {
                            return (
                                <Image source={require('../../assets/images/doepdown-arrow.png')}
                                    name={isOpened ? "chevron-up" : "chevron-down"}
                                    color={"#444"}
                                    size={18}
                                />
                            );
                        }}
                        dropdownIconPosition={"right"}
                        dropdownStyle={styles.dropdown2DropdownStyle}
                        rowStyle={styles.dropdown2RowStyle}
                        rowTextStyle={styles.dropdown2RowTxtStyle}
                    />
                </View>
            </View>


            <View style={{ display: 'flex', flexDirection: 'column', paddingVertical: 15 }}>
                <Text style={{ fontSize: 12, padding: 5 }}>Your Practice licence</Text>
                <Controller
                    name="licence"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.licence ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='Licence number'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.licence?.message || ''}</Text>
                        </View>
                    )}
                />


                <Text style={{ fontSize: 12, padding: 5 }}>Date of birth</Text>
                <Controller
                    name="dateofbirth"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.dateofbirth ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                                placeholder='dd - mm - yyyy'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.dateofbirth?.message || ''}</Text>
                        </View>
                    )}
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Biography</Text>

                <Controller
                    name="bio"
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
                                style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.bio ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, }}
                                placeholder='Type down some words about you'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.bio?.message || ''}</Text>
                        </View>
                    )}
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Signature</Text>
                <View
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                ></View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>Upload Signature</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, padding: 5 }}>Mobile Number</Text>
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
                            style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.phone ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                            placeholder='Enter Mobile Number'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.phone?.message || ''}</Text>
                    </View>
                )}
            />

            <Text style={{ fontSize: 12, padding: 5 }}>Email Id</Text>
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
                            style={{ backgroundColor: '#fff', paddingLeft: 15, borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: `${!errors?.email ? '#D9D9D9' : 'red'}`, borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, }}
                            placeholder='Enter Email Id'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.email?.message || ''}</Text>
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

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 25 }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSubmit(save)} style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 100 }}>

            </View>
        </ScrollView>
    )
}
export default PersonalInformation;
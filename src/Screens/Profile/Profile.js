import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { IconButton, Portal, Dialog } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../Services';
import moment from 'moment';

const Profile = () => {

    const [userinfo, setUserInfo] = useState('');

    React.useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                const res = await axiosInstance.get(`api/profile/doctor/${JSON.parse(user)?.id}`);
                console.log(res?.data);
                setUserInfo(res?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <ScrollView
            style={{
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 20
            }}>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F7F7F7', padding: 20, borderRadius: 10 }}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 78, width: 78, backgroundColor: 'gray' }}></View>
                    <View style={{ padding: 20 }}>
                        <Text
                            style={{ color: '#2C2A28', fontSize: 20, fontWeight: '600' }}>
                            Dr. {userinfo?.personal?.firstName} {userinfo?.personal?.lastName}
                        </Text>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 10, fontWeight: '600' }}>
                           {userinfo?.designation}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 20, flexDirection: 'row' }}>
                    <Text
                        style={{ color: '#A4A4A4', fontSize: 10, fontWeight: '600', marginRight: 5 }}>
                        Bio :
                    </Text>
                    <Text
                        style={{ color: '#2C2A28', fontSize: 12, fontWeight: '600' }}>
                       {userinfo?.profileDescription}
                    </Text>
                    <View>
                    </View>
                </View>
                <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <View style={{ flexDirection: 'column', backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10 }}>
                            <Text
                                style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                                License number
                            </Text>
                            <Text
                                style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                                {userinfo?.registration}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <Text
                                style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                                License number
                            </Text>
                            <Text style={{ color: '#FFFFFF', marginTop: 5, fontWeight: '400', fontSize: 14, backgroundColor: '#F88E95', textAlign: 'center', borderRadius: 5, padding: 5, margin: 5 }}>Online</Text>
                            <Text style={{ backgroundColor: '#6AA446', color: '#FFFF', fontWeight: '600', fontSize: 14, textAlign: 'center', padding: 5, margin: 5, borderRadius: 5 }}>
                                <Image style={{ height: 12, width: 12, }} source={require('../../assets/images/inpersonicon.png')} /> In Person</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F7F7F7', padding: 20, borderRadius: 10, marginVertical: 20 }}>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', width: '30%', lineHeight: 35 }}>
                    Service
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 20 }}>
                    <View style={{ position: 'relative', marginBottom: 20, height: 100, width: 346 }}>


                        <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: 2, left: 2, padding: 5, backgroundColor: '#F6F6F6', borderRadius: 5 }}>
                            <View style={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 10, alignItems: 'center' }}>
                                <Text>+</Text>
                            </View>
                            <Text style={{ fontSize: 12, alignItems: 'center', paddingTop: 11, justifyContent: 'center', paddingHorizontal: 50 }}>Add services</Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', width: '30%', lineHeight: 35 }}>
                    Service
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 20 }}>
                    <View style={{ position: 'relative', marginBottom: 20, height: 100, width: 346 }}>
                    </View>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F7F7F7', padding: 20, borderRadius: 10, marginVertical: 20 }}>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Experience
                </Text>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        marginTop: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        borderRadius: 20
                    }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View
                            style={{
                                height: 82,
                                backgroundColor: '#C4C4C4',
                                width: 2,
                                marginTop: 14,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 5,
                                    backgroundColor: '#C4C4C4',
                                    width: 5,
                                    borderRadius: 50,
                                }}></View>
                            <View
                                style={{
                                    height: 5,
                                    backgroundColor: '#C4C4C4',
                                    width: 5,
                                    borderRadius: 50,
                                }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
                            <Text
                                style={{
                                    color: '#2C2A28',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                Designation
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                Hospital name
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 12,
                                    fontWeight: '500',
                                }}>
                                From - to year
                            </Text>
                        </View>

                        <View style={{ paddingHorizontal: 35, paddingVertical: 10 }}>
                            <Text
                                style={{
                                    color: '#2C2A28',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                American Dental Medical University
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                BDS
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 12,
                                    fontWeight: '500',
                                }}>
                                2003-2005
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Education
                </Text>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        marginTop: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 10,
                        borderRadius: 20
                    }}>
                    <View style={{ flexDirection: 'column' }}>
                        <View
                            style={{
                                height: 82,
                                backgroundColor: '#C4C4C4',
                                width: 2,
                                marginTop: 14,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View
                                style={{
                                    height: 5,
                                    backgroundColor: '#C4C4C4',
                                    width: 5,
                                    borderRadius: 50,
                                }}></View>
                            <View
                                style={{
                                    height: 5,
                                    backgroundColor: '#C4C4C4',
                                    width: 5,
                                    borderRadius: 50,
                                }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
                            <Text
                                style={{
                                    color: '#2C2A28',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                Designation
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                Hospital name
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 12,
                                    fontWeight: '500',
                                }}>
                                From - to year
                            </Text>
                        </View>

                        <View style={{ paddingHorizontal: 35, paddingVertical: 10 }}>
                            <Text
                                style={{
                                    color: '#2C2A28',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                American Dental Medical University
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 16,
                                    fontWeight: '500',
                                }}>
                                BDS
                            </Text>
                            <Text
                                style={{
                                    color: '#808080',
                                    fontSize: 12,
                                    fontWeight: '500',
                                }}>
                                2003-2005
                            </Text>
                        </View>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Registration
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 12, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F6F6F6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, paddingHorizontal: 15, textAlign: 'center' }}>+</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingHorizontal: 70 }}>Add Registrations</Text>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Membership
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 12, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F6F6F6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, paddingHorizontal: 15, textAlign: 'center' }}>+</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingHorizontal: 70 }}>Add Registrations</Text>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Awards
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 12, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F6F6F6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <View style={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, paddingHorizontal: 15, textAlign: 'center' }}>+</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingHorizontal: 70 }}>Add Registrations</Text>
                    </View>
                </View>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', width: '30%', lineHeight: 35 }}>
                    Signature
                </Text>
                <View style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 20 }}>
                    <View style={{ position: 'relative', marginBottom: 20, height: 80, width: 346 }}>
                    </View>
                    <TouchableOpacity style={{ width: '50%', backgroundColor: '#FFFFFF', paddingVertical: 12, marginLeft: 150, borderRadius: 10, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                        <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>Upload Signature</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F7F7F7', padding: 20, borderRadius: 10, marginVertical: 20 }}>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Personal details
                </Text>

                <View style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 20 }}>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                            Phone number
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                            {userinfo?.phone}
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                            Email id
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                            {userinfo?.personal?.email}
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text
                                style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                                Gender
                            </Text>
                            <Text
                                style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                                {userinfo?.gender}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                                Date of Birth
                            </Text>
                            <Text
                                style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                                {userinfo?.dateOfBirth ? moment(userinfo?.dateOfBirth).format('dd MMM yyyy') : ''}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                            Address:
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 14, fontWeight: '600' }}>
                           {userinfo?.contactInfo?.streetAddress}, {userinfo?.contactInfo?.city}, {userinfo?.contactInfo?.state}, {userinfo?.contactInfo?.country} - {userinfo?.contactInfo?.pinCode}
                        </Text>
                    </View>

                    <Text
                        style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                        Languages :
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                        <Text
                            style={{ color: '#000000', fontSize: 14, fontWeight: '600', padding: 8, backgroundColor: '#E8E8E8', borderRadius: 6 }}>
                            Telugu
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 14, fontWeight: '600', padding: 8, backgroundColor: '#E8E8E8', borderRadius: 6 }}>
                            English
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 14, fontWeight: '600', padding: 8, backgroundColor: '#E8E8E8', borderRadius: 6 }}>
                            Hindi
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F7F7F7', padding: 20, borderRadius: 10, marginVertical: 20 }}>
                <Text
                    style={{ color: '#2C2A28', fontSize: 16, fontWeight: '500', paddingVertical: 10 }}>
                    Personal details
                </Text>

                <View style={{ backgroundColor: "#FFFFFF", padding: 20, borderRadius: 20 }}>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                            Clinic Name
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                            Standard Clinic
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{ color: '#A4A4A4', fontSize: 12, fontWeight: '600' }}>
                            Clinic Address:
                        </Text>
                        <Text
                            style={{ color: '#000000', fontSize: 16, fontWeight: '600' }}>
                            Rajamahendravaram, East Godavari District, Andhra pradesh, India - 533101
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text
                                style={{ color: '#a4a4a4', fontSize: 12, fontWeight: '500', paddingVertical: 10 }}>
                                Clinic Images
                            </Text>
                            <View style={{ backgroundColor: "#FFFFFF", padding: 12, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F6F6F6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', padding: 15 }}>
                                    <View style={{ backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 30, paddingHorizontal: 15, textAlign: 'center' }}>+</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default Profile
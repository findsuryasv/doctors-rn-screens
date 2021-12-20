import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const Dashboard = () => {
    return (
        <ScrollView style={{ padding: 15, marginTop: 50, }}>
            <View style={{position: 'relative'}}>
                <View>
                <Text
                    style={{
                        color: '#1C1C1C',
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 17,
                    }}>
                    Instant Consultation
                </Text>
                <Text
                    style={{
                        color: '#1C1C1C',
                        fontSize: 14,
                        marginBottom: 9,
                        fontWeight: 'bold',
                    }}>
                    Set availability{' '}
                </Text>
                <View
                    style={{
                        borderWidth: 2,
                        borderStyle: 'solid',
                        borderColor: '#E19538',
                        width: '50%',
                        borderRadius: 10,
                        padding: 5,
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}>
                    <View
                        style={{
                            ...styles.activeButton,
                            paddingHorizontal: 30,
                            paddingVertical: 15,
                        }}>
                        <Text style={{ fontSize: 14, color: '#fff' }}>No</Text>
                    </View>
                    <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
                        <Text style={{ fontSize: 14, color: '#E19538' }}>Yes</Text>
                    </View>
                </View>
                <Text style={{ color: '#2C2A28', fontSize: 40, fontWeight: 'bold' }}>
                    34
                </Text>
                <Text
                    style={{
                        color: '#2C2A28',
                        fontSize: 14,
                        fontWeight: '600',
                        width: '50%',
                    }}>
                    People looking for your expert consultation right now
                </Text>
                <Text
                    style={{
                        color: '#6AA446',
                        fontSize: 11,
                        fontWeight: '600',
                        marginVertical: 10,
                    }}>
                    Set your availability to “Yes”
                </Text>
                </View>
                <Image source={require('../../assets/images/dashboard.png')} resizeMode='contain'
                style={{position: 'absolute', top: 30, left: '48%'}} />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        backgroundColor: '#F6F6F6',
                        borderRadius: 20,
                        padding: 24,
                        marginBottom: 18
                    }}>
                    <Text style={{ color: '#A4A4A4', fontSize: 16, fontWeight: '600' }}>
                        You will be meeting
                    </Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6
                        }}>
                        <Text
                            style={{ fontSize: 56, color: '#2C2A28', fontWeight: 'bold' }}>
                            18
                        </Text>
                        <Text
                            style={{
                                color: '#A4A4A4',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 15,
                                paddingTop: 30
                            }}>
                            Patients today
                        </Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#F0F7EF', borderRadius: 20,padding: 10}}>
                <Image source={require('../../assets/images/chart_ds.png')} resizeMode='contain'
                style={{}} />
                </View>
                <View style={{ marginTop: 80 }}>
                    <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, color: '#2C2A28', fontWeight: '600' }}>Appointments</Text>
                        <Text style={{ fontSize: 14, color: '#414141', fontWeight: '500' }}>Wednesday 13.10.2021</Text>
                    </View>
                    <View style={{
                        background: '#FFFFFF',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#F6F6F6',
                        marginTop: 20,
                        padding: 9,
                        width: '60%',
                        marginBottom: 30,
                        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.06)',
                        borderRadius: 20
                    }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View>
                                <Text style={{ color: '#A4A4A4', fontSize: 10 }}>An appointment with</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2C2A28' }}>Vinay sagar</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18 }}>
                            <View style={{ width: '40%' }}>
                                <Text style={{ color: '#A4A4A4', fontSize: 12 }}>
                                    Age
                                </Text>
                                <Text style={{ color: '#2C2A28', fontSize: 12, fontWeight: 'bold' }}>
                                    35 yrs
                                </Text>
                            </View>
                            <View style={{ borderLeftWidth: 2, borderStyle: 'solid', borderLeftColor: '#A4A4A4', width: '60%', paddingLeft: 16 }}>
                                <Text style={{ color: '#A4A4A4', fontSize: 12 }}>
                                    Gender
                                </Text>
                                <Text style={{ color: '#2C2A28', fontSize: 12, fontWeight: 'bold' }}>
                                    Non binary
                                </Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#F6F6F6', borderRadius: 20, padding: 18, marginTop: 10 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '40%' }}>
                                    <Text style={{ color: '#A4A4A4', fontSize: 12 }}>
                                        Date
                                    </Text>
                                    <Text style={{ color: '#2C2A28', fontSize: 12, fontWeight: 'bold' }}>
                                        Today
                                    </Text>
                                </View>
                                <View style={{ borderLeftWidth: 2, borderStyle: 'solid', borderLeftColor: '#A4A4A4', width: '60%', paddingLeft: 16 }}>
                                    <Text style={{ color: '#A4A4A4', fontSize: 12 }}>
                                        Time
                                    </Text>
                                    <Text style={{ color: '#2C2A28', fontSize: 12, fontWeight: 'bold' }}>
                                        12:45 pm
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ marginTop: 12, backgroundColor: '#E19538', borderRadius: 10, display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: 11 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>Start</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: '#E19538',
        borderRadius: 10,
    },
});

export default Dashboard;
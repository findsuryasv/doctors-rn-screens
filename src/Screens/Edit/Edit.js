import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Clinic from '../Clinic/Clinic';
import EducationAndExperience from '../EducationAndExperience/EducationAndExperience';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import Rewards from '../Rewards/Rewards';
import SandS from '../SandS/SandS';

const Edit = () => {

    const [type, setType] = useState('personal');

    return (
        <ScrollView style={{ marginTop: 20 }}>
            <ScrollView horizontal={true} style={{ backgroundColor: '#F6F6F6', marginBottom: 15, display: 'flex', flexDirection: 'row', borderRadius: 10, paddingHorizontal: 12, maxWidth: Dimensions.get('window').width, overflow: 'scroll' }}>
                <TouchableOpacity onPress={() => setType('personal')} style={{ backgroundColor: type === 'personal' ? '#fff' : '#F6F6F6', borderRadius: 10, paddingVertical: 6, paddingHorizontal: 11 }}>
                    <Text style={{ color: '#1C1C1C', fontSize: 14, fontWeight: '600' }}>Personal information</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('clinic')} style={{ backgroundColor: type === 'clinic' ? '#fff' : '#F6F6F6',borderRadius: 10, paddingVertical: 6, paddingHorizontal: 11 }}>
                    <Text style={{ color: '#1C1C1C', fontSize: 14 }}>Clinic</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('services')} style={{ backgroundColor: type === 'services' ? '#fff' : '#F6F6F6',borderRadius: 10, paddingVertical: 6, paddingHorizontal: 11 }}>
                    <Text style={{ color: '#1C1C1C', fontSize: 14 }}>Services and specialization</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('education')} style={{ backgroundColor: type === 'education' ? '#fff' : '#F6F6F6',borderRadius: 10, paddingVertical: 6, paddingHorizontal: 11 }}>
                    <Text style={{ color: '#1C1C1C', fontSize: 14 }}>Education and experience</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('awards')} style={{ backgroundColor: type === 'awards' ? '#fff' : '#F6F6F6',borderRadius: 10, paddingVertical: 6, paddingHorizontal: 11 }}>
                    <Text style={{ color: '#1C1C1C', fontSize: 14 }}>Awards, Memberships and Registrations</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                {
                    type === 'personal' && (
                        <PersonalInformation />
                    )
                }
                {
                    type === 'clinic' && (
                        <Clinic />
                    )
                }
                {
                    type === 'services' && (
                        <SandS />
                    )
                }
                {
                    type === 'education' && (
                        <EducationAndExperience />
                    )
                }
                {
                    type === 'awards' && (
                        <Rewards />
                    )
                }
            </View>
        </ScrollView>
    )
}

export default Edit

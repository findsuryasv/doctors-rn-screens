import React from "react";
import { Dimensions, View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

const Menu = (props) => {

    return (
        <ScrollView style={{ height: Dimensions.get('window').height, backgroundColor: '#F0F7EF', flex: 1, padding: 30 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image source={require('../../assets/images/docAvatar.png')} style={{}} />
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 30,paddingBottom:30, justifyContent: 'center' }}>
                    <Text style={{ color: '#2C2A28', fontWeight: '700', fontSize: 19 }}>Dr. {props.user}</Text>
                    <Text style={{ color: '#A4A4A4', fontWeight: '400', fontSize: 10 ,marginBottom:8, textAlign: 'right' }}>MBBS,MD</Text>
                </View>
            </View>
            {/* menu items */}
            <View style={{display:'flex' , flexDirection:'column'}}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center', backgroundColor: '#6AA446', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/menuitem1.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>Dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => props.navigation.navigate('Appointment')}
                style={{ display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                <Image source={require('../../assets/images/Appointment-icon.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>Appointments</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => props.navigation.navigate('Patients')}
                style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/Find-Doctor-Icon.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>My Patients</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/Messages-icon.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>Messages</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/My-Records-icon.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>My Medical Records</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/Subtract.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>Your Schedule</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/review.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>Review and Social</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}
                style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/Find-Doctor-Icon.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>My Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',  backgroundColor: '#F0F7EF', paddingVertical: 13, paddingHorizontal: 30, borderRadius: 10 ,marginBottom:10 }}>
                    <Image source={require('../../assets/images/Union.png')} style={{height:13,width:13,marginRight:10}}/>
                    <Text style={{ fontSize: 14, color: '#2C2A28', fontWeight: 'bold' }}>Logout</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
export default Menu;
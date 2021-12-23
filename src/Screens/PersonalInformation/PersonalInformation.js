import React, { useState, useRef, useEffect } from "react";
import { Dimensions, View, Image, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");

const PersonalInformation = () => {
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
    const [gender, setGender] = useState([]);
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
        <ScrollView style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>

            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 12, padding: 5 }}>Profile Pic</Text>
                    <Image style={{ height: 107, width: 106 }} source={require('../../assets/images/profileEdit.png')} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', width: '60%', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 12, padding: 5 }}>Your Name</Text>
                    <TextInput
                        underlineColorAndroid="transparent"

                        style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                        placeholder='First name'
                    />
                    <TextInput
                        underlineColorAndroid="transparent"

                        style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                        placeholder='Last name'
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
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Licence number'
                />

                <Text style={{ fontSize: 12, padding: 5 }}>Date of birth</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 50, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='dd - mm - yyyy'
                />
                <Text style={{ fontSize: 12, padding: 5 }}>Biography</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                    placeholder='Type down some words about you' />
                <Text style={{ fontSize: 12, padding: 5 }}>Signature</Text>
                <TextInput
                    underlineColorAndroid="#fff"
                    style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15 }}
                    placeholder=''
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>Upload Signature</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 12, padding: 5 }}>Mobile Number</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='Enter Mobile Number'
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Email Id</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='Enter Email Id'
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Address line 1</Text>
            <TextInput
                underlineColorAndroid="#fff"
                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                placeholder='Door/flat no, Appertement/Society name' />
            <Text style={{ fontSize: 12, padding: 5 }}>Address line 2</Text>
            <TextInput
                underlineColorAndroid="#fff"
                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 15, height: 120, borderTopRightRadius: 15, marginBottom: 20 }}
                placeholder='Street name, Area name' />

            <Text style={{ fontSize: 12, padding: 5 }}>City</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='City name'
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Pincode</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='Postal code'
            />

            <Text style={{ fontSize: 12, padding: 5 }}>State/Province</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='State/Province'
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Country</Text>
            <TextInput
                underlineColorAndroid="transparent"

                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 50, borderTopRightRadius: 10, marginBottom: 9 }}
                placeholder='Country'
            />

            <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between',marginVertical:25 }}>
                <TouchableOpacity style={{ width: '40%', backgroundColor: '#FFFFFF', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#E19538', fontWeight: 'bold', textAlign: 'center' }}>cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '40%', backgroundColor: '#E19538', paddingVertical: 12, borderRadius: 10, margin: 5, borderColor: '#E19538', borderStyle: 'solid', borderWidth: 1 }}>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
export default PersonalInformation;
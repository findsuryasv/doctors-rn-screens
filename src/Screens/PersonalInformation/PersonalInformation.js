import React, { useState,useRef } from "react";
import { Dimensions, View, Image, Text, ScrollView, StyleSheet } from "react-native";
import { IconButton, TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
const { width, height } = Dimensions.get("window");

const PersonalInformation = () => {
    const genderDropdownRef = useRef();
    const gender = ["Male", "Female", "Other"]
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
            height: 45,
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
            height: 45,
            backgroundColor: "#FFF",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#D9D9D9",
        },
        dropdown2BtnTxtStyle: { color: "#CACACA", textAlign: "left",fontSize:16},
        dropdown2DropdownStyle: { backgroundColor: "#EFEFEF" },
        dropdown2RowStyle: {
            backgroundColor: "#EFEFEF",
            borderBottomColor: "#C5C5C5",
        },
        dropdown2RowTxtStyle: { color: "#CACACA", textAlign: "left" },
    });
    return (
        <ScrollView style={{ minHeight: Dimensions.get('window').height, backgroundColor: '#FFFFFF', padding: 20 }}>

            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 12 }}>Profile Pic</Text>
                    <Image style={{ height: 107, width: 106 }} source={require('../../assets/images/profileEdit.png')} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', width: '60%', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 12 }}>Your Name</Text>
                    <TextInput
                                  underlineColorAndroid="transparent"

                        style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 45, borderTopRightRadius: 10, marginBottom: 9 }}
                        placeholder='First name'
                    />
                    <TextInput
                                  underlineColorAndroid="transparent"

                        style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, borderColor: '#D9D9D9', borderTopLeftRadius: 10, height: 45, borderTopRightRadius: 10, marginBottom: 5 }}
                        placeholder='Last name'
                    />
                    <Text style={{ fontSize: 12 }}>Gender</Text>
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
        </ScrollView>
    )
}
export default PersonalInformation;
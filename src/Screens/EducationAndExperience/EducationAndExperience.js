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
import { Controller, useForm } from 'react-hook-form';
import { IconButton, Portal, Dialog } from 'react-native-paper';

const EducationAndExperience = () => {
    const [showDownload, setToShowDownload] = useState(true);
    const [showDialog, setToShowDialog] = useState(false);
    const { handleSubmit, control, formState: { errors } } = useForm();
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
        <ScrollView
            style={{
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 20,
            }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        color: '#2C2A28',
                        fontSize: 16,
                        fontWeight: '500',
                        width: '30%',
                    }}>
                    Experience
                </Text>
                <View
                    style={{
                        height: 2,
                        backgroundColor: '#D9D9D9',
                        width: '70%',
                    }}></View>
            </View>
            <Text style={{ fontSize: 12, padding: 5 }}>Hospital name</Text>
            <Controller
                name="hospitalname"
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
                            style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, borderColor: `${!errors?.hospitalname ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                            placeholder='Enter Hospital name'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.hospitalname?.message || ''}</Text>
                    </View>
                )}
            />

            <Text style={{ fontSize: 12, padding: 5 }}>Designation</Text>
            <Controller
                name="designation"
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
                            style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, borderColor: `${!errors?.designation ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                            placeholder='Enter Designation'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.designation?.message || ''}</Text>
                    </View>
                )}
            />
            <Text style={{ fontSize: 12, padding: 5 }}>Duration</Text>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                <Controller
                    name="fromdate1"
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
                                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderColor: `${!errors?.fromdate1 ? '#D9D9D9' : 'red'}`, height: 50, width: 181,borderTopRightRadius: 10, marginBottom: 0 }}
                                placeholder='From'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.fromdate1?.message || ''}</Text>
                        </View>
                    )}
                />

<Controller
                    name="todate1"
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
                                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderColor: `${!errors?.todate1 ? '#D9D9D9' : 'red'}`, height: 50, width: 181,borderTopRightRadius: 10, marginBottom: 0 }}
                                placeholder='To'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.todate1?.message || ''}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity 
                    style={{
                        width: '40%',
                        backgroundColor: '#E19538',
                        paddingVertical: 12,
                        borderRadius: 10,
                        margin: 5,
                        borderColor: '#E19538',
                        borderStyle: 'solid',
                        borderWidth: 1,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    height: 175,
                    backgroundColor: '#F7F7F7',
                    marginTop: 10,
                    flexDirection: 'row',
                    paddingHorizontal: 30,
                    paddingVertical: 10,
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
                </View>
            </View>

            <View style={{ paddingVertical: 20 }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: '#2C2A28',
                            fontSize: 16,
                            fontWeight: '500',
                            width: '30%',
                        }}>
                        Education
                    </Text>
                    <View
                        style={{
                            height: 2,
                            backgroundColor: '#D9D9D9',
                            width: '70%',
                        }}></View>
                </View>
                <Text style={{ fontSize: 12, padding: 5 }}>Institute name</Text>
                <Controller
                name="institutename"
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
                            style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, borderColor: `${!errors?.institutename ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                            placeholder='Enter Institite name'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.institutename?.message || ''}</Text>
                    </View>
                )}
            />
                <Text style={{ fontSize: 12, padding: 5 }}>Degree</Text>
                <Controller
                name="degree"
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
                            style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderTopLeftRadius: 10, borderColor: `${!errors?.degree ? '#D9D9D9' : 'red'}`, height: 50, borderTopRightRadius: 10, marginBottom: 0 }}
                            placeholder='Enter Awarded Degree'
                        />
                        <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.degree?.message || ''}</Text>
                    </View>
                )}
            />
                <Text style={{ fontSize: 12, padding: 5 }}>Duration</Text>
                <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                <Controller
                    name="fromdate"
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
                                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderColor: `${!errors?.fromdate ? '#D9D9D9' : 'red'}`, height: 50, width: 181,borderTopRightRadius: 10, marginBottom: 0 }}
                                placeholder='From'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.fromdate?.message || ''}</Text>
                        </View>
                    )}
                />

<Controller
                    name="todate"
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
                                style={{ backgroundColor: '#fff', borderWidth: 1, borderStyle: 'solid', borderRadius: 15, borderColor: '#D9D9D9', borderColor: `${!errors?.todate ? '#D9D9D9' : 'red'}`, height: 50, width: 181,borderTopRightRadius: 10, marginBottom: 0 }}
                                placeholder='To'
                            />
                            <Text style={{ color: 'red', marginLeft: 10, fontSize: 13 }}>{errors?.todate?.message || ''}</Text>
                        </View>
                    )}
                />
            </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity
                        style={{
                            width: '40%',
                            backgroundColor: '#E19538',
                            paddingVertical: 12,
                            borderRadius: 10,
                            margin: 5,
                            borderColor: '#E19538',
                            borderStyle: 'solid',
                            borderWidth: 1,
                        }}>
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                            Add
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 175,
                        backgroundColor: '#F7F7F7',
                        marginTop: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 30,
                        paddingVertical: 10,
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
                    </View>
                </View>
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 25,
                }}>
                <TouchableOpacity
                    style={{
                        width: '40%',
                        backgroundColor: '#FFFFFF',
                        paddingVertical: 12,
                        borderRadius: 10,
                        margin: 5,
                        borderColor: '#E19538',
                        borderStyle: 'solid',
                        borderWidth: 1,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#E19538',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        cancel
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={handleSubmit(save)}
                    style={{
                        width: '40%',
                        backgroundColor: '#E19538',
                        paddingVertical: 12,
                        borderRadius: 10,
                        margin: 5,
                        borderColor: '#E19538',
                        borderStyle: 'solid',
                        borderWidth: 1,
                    }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
export default EducationAndExperience;
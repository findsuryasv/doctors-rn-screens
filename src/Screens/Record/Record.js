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
import { IconButton } from 'react-native-paper';

const Record = () => {
  const [showDownload, setToShowDownload] = useState(true);
  return (
    <ScrollView style={{ paddingHorizontal: 20, marginTop: 80 }}>
      <View
        style={{ display: 'flex', flexDirection: 'row', marginVertical: 28 }}>
           <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/avator.png')} />
          </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#2C2A28',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Srinivasarao
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ marginRight: 28 }}>
              <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Gender</Text>
              <Text
                style={{
                  color: '#2C2A28',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Nonbinary
              </Text>
            </View>
            <View style={{ marginRight: 28 }}>
              <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Age</Text>
              <Text
                style={{
                  color: '#2C2A28',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                24 yrs
              </Text>
            </View>
            <View>
              <Text style={{ color: '#A4A4A4', fontSize: 10 }}>Blood type</Text>
              <Text
                style={{
                  color: '#2C2A28',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                B +ve
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
          alignItems: 'center',
          marginBottom: 17,
        }}>
        <View style={{ position: 'relative', width: '80%' }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#D9D9D9',
              height: 50,
              borderRadius: 10,
              paddingLeft: 14,
              paddingRight: 35,
            }}
            placeholder="Eg: Name, Clinics, Hospitals, Special.."
          />
          <IconButton
            style={{ position: 'absolute', right: 0 }}
            icon="magnify"
            color="#D9D9D9"
            size={25}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View
          style={{ padding: 8, backgroundColor: '#F6F6F6', borderRadius: 15 }}>
          <IconButton
            icon="filter"
            color="#D9D9D9"
            size={25}
            style={{ margin: 0, padding: 0 }}
          />
        </View>
      </View>
      <View
        style={{
          background: '#FFFFF',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          borderRadius: 8,
          padding: 23,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>#1234567</Text>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>29-12-2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 7,
          }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12 }}>Submited by</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 11,
            }}>
            <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>
              Prescription
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            
          <View style={{display:'flex', flexDirection:'row'}}>
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/p_avator.png')} />
          </View>
          <View>

          
            <Text
              style={{ color: '#2C2A28', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              Dr. Vinuthna
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              MBBS, MD
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              {' '}
              General medicine
            </Text>
            </View>
          </View>

          {!showDownload && (
            <View>
              <View
                style={{
                  backgroundColor: '#E8E8E8',
                  borderRadius: 6,
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>
                  Prescription.pdf
                </Text>
                <View style={{ backgroundColor: '#D9D9D9', borderRadius: 6 }}>
                  <IconButton
                    icon="download"
                    color="#fff"
                    size={18}
                    style={{ padding: 0, margin: 0 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        {
          showDownload && (<>
            <View style={{marginVertical: 20}}>
            <Text style={{color: '#D9D9D9', fontSize: 12, marginBottom: 8}}>Description</Text>
            <Text style={{color: '#2C2A28', fontSize: 14}}>
            Rajamahendravaram, East Godavari District, 
Andhra pradesh, India - 533101
            </Text>
            </View>
            <View style={{backgroundColor: '#E8E8E8', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
            </View>
            </>
          )
        }
      </View>
      <View
        style={{
          background: '#FFFFF',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          borderRadius: 8,
          padding: 23,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>#1234567</Text>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>29-12-2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 7,
          }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12 }}>Submited by</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 11,
            }}>
            <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>
              Prescription
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            
          <View style={{display:'flex', flexDirection:'row'}}>
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/p_avator.png')} />
          </View>
          <View>

          
            <Text
              style={{ color: '#2C2A28', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              Dr. Vinuthna
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              MBBS, MD
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              {' '}
              General medicine
            </Text>
            </View>
          </View>

          {!showDownload && (
            <View>
              <View
                style={{
                  backgroundColor: '#E8E8E8',
                  borderRadius: 6,
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>
                  Prescription.pdf
                </Text>
                <View style={{ backgroundColor: '#D9D9D9', borderRadius: 6 }}>
                  <IconButton
                    icon="download"
                    color="#fff"
                    size={18}
                    style={{ padding: 0, margin: 0 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        {
          showDownload && (<>
            <View style={{marginVertical: 20}}>
            <Text style={{color: '#D9D9D9', fontSize: 12, marginBottom: 8}}>Description</Text>
            <Text style={{color: '#2C2A28', fontSize: 14}}>
            Rajamahendravaram, East Godavari District, 
Andhra pradesh, India - 533101
            </Text>
            </View>
            <View style={{backgroundColor: '#E8E8E8', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
            </View>
            </>
          )
        }
      </View>
      <View
        style={{
          background: '#FFFFF',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          borderRadius: 8,
          padding: 23,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>#1234567</Text>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>29-12-2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 7,
          }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12 }}>Submited by</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 11,
            }}>
            <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>
              Prescription
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            
          <View style={{display:'flex', flexDirection:'row'}}>
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/p_avator.png')} />
          </View>
          <View>

          
            <Text
              style={{ color: '#2C2A28', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              Dr. Vinuthna
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              MBBS, MD
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              {' '}
              General medicine
            </Text>
            </View>
          </View>

          {!showDownload && (
            <View>
              <View
                style={{
                  backgroundColor: '#E8E8E8',
                  borderRadius: 6,
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>
                  Prescription.pdf
                </Text>
                <View style={{ backgroundColor: '#D9D9D9', borderRadius: 6 }}>
                  <IconButton
                    icon="download"
                    color="#fff"
                    size={18}
                    style={{ padding: 0, margin: 0 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        {
          showDownload && (<>
            <View style={{marginVertical: 20}}>
            <Text style={{color: '#D9D9D9', fontSize: 12, marginBottom: 8}}>Description</Text>
            <Text style={{color: '#2C2A28', fontSize: 14}}>
            Rajamahendravaram, East Godavari District, 
Andhra pradesh, India - 533101
            </Text>
            </View>
            <View style={{backgroundColor: '#E8E8E8', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
            </View>
            </>
          )
        }
      </View>
      <View
        style={{
          background: '#FFFFF',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          borderRadius: 8,
          padding: 23,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>#1234567</Text>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>29-12-2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 7,
          }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12 }}>Submited by</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 11,
            }}>
            <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>
              Prescription
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            
          <View style={{display:'flex', flexDirection:'row'}}>
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/p_avator.png')} />
          </View>
          <View>

          
            <Text
              style={{ color: '#2C2A28', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              Dr. Vinuthna
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              MBBS, MD
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              {' '}
              General medicine
            </Text>
            </View>
          </View>

          {!showDownload && (
            <View>
              <View
                style={{
                  backgroundColor: '#E8E8E8',
                  borderRadius: 6,
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>
                  Prescription.pdf
                </Text>
                <View style={{ backgroundColor: '#D9D9D9', borderRadius: 6 }}>
                  <IconButton
                    icon="download"
                    color="#fff"
                    size={18}
                    style={{ padding: 0, margin: 0 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        {
          showDownload && (<>
            <View style={{marginVertical: 20}}>
            <Text style={{color: '#D9D9D9', fontSize: 12, marginBottom: 8}}>Description</Text>
            <Text style={{color: '#2C2A28', fontSize: 14}}>
            Rajamahendravaram, East Godavari District, 
Andhra pradesh, India - 533101
            </Text>
            </View>
            <View style={{backgroundColor: '#E8E8E8', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
            </View>
            </>
          )
        }
      </View>
      <View
        style={{
          background: '#FFFFF',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#F1F1F1',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
          borderRadius: 8,
          padding: 23,
          marginBottom: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 13,
          }}>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>#1234567</Text>
          <Text style={{ color: '#2C2A28', fontSize: 12 }}>29-12-2021</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 7,
          }}>
          <Text style={{ color: '#D9D9D9', fontSize: 12 }}>Submited by</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 11,
            }}>
            <Text style={{ color: '#000', fontSize: 12, fontWeight: '500' }}>
              Prescription
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            
          <View style={{display:'flex', flexDirection:'row'}}>
          <View style={{marginRight: 12}}>
            <Image source={require('../../assets/images/p_avator.png')} />
          </View>
          <View>

          
            <Text
              style={{ color: '#2C2A28', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              Dr. Vinuthna
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}>
              MBBS, MD
            </Text>
            <Text
              style={{
                color: '#A4A4A4',
                fontSize: 12,
                marginTop: 5,
                fontWeight: 'bold',
              }}>
              {' '}
              General medicine
            </Text>
            </View>
          </View>

          {!showDownload && (
            <View>
              <View
                style={{
                  backgroundColor: '#E8E8E8',
                  borderRadius: 6,
                  padding: 3,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Text style={{ color: '#000', fontSize: 14, marginRight: 10 }}>
                  Prescription.pdf
                </Text>
                <View style={{ backgroundColor: '#D9D9D9', borderRadius: 6 }}>
                  <IconButton
                    icon="download"
                    color="#fff"
                    size={18}
                    style={{ padding: 0, margin: 0 }}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
        {
          showDownload && (<>
            <View style={{marginVertical: 20}}>
            <Text style={{color: '#D9D9D9', fontSize: 12, marginBottom: 8}}>Description</Text>
            <Text style={{color: '#2C2A28', fontSize: 14}}>
            Rajamahendravaram, East Godavari District, 
Andhra pradesh, India - 533101
            </Text>
            </View>
            <View style={{backgroundColor: '#E8E8E8', borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
             <View style={{backgroundColor: '#fff', borderRadius: 6, paddingVertical: 12, paddingHorizontal: 25}}>
            <Text style={{fontSize:15, fontWeight: '500', color: '#808080'}}>.pdf</Text>
            </View>
            </View>
            </>
          )
        }
      </View>

    </ScrollView>
  );
}

export default Record;
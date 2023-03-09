import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { FlatList, ScrollView, TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'
import color from '../../styles/color'
import fontSize from '../../styles/fontSize'
import fontWeight from '../../styles/font-weight'
import Contact from '../../components/contact-card'

export default function TopupScreen ({navigation}) {
  return (
    <View style={{flex: 1, justifyContent:"center", backgroundColor: "#fff"}}>
      <ScrollView>
      <View style={{
            paddingTop: 80,
            paddingBottom: 60,
            backgroundColor: "#6379F4",
            paddingHorizontal: 20,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20
        }}>
            

            <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}>
                <Ionicons name="arrow-back-outline" size={40} color={"#fff"} onPress={() => {
                  navigation.navigate('Home')
                }}/>
                <Text style={[color.white, fontSize.md, fontWeight.bold, {
                  marginLeft: 20
                }]}>
              Top Up
            </Text>

            </View>


            <View style={{
             backgroundColor: "#fff",
             paddingVertical: 20,
             marginHorizontal: 10,
             paddingHorizontal: 10 ,
             marginTop: 20,
             borderRadius: 10,
             display: "flex",
             flexDirection: "row",
             alignItems: "center"
            }}>
              <Ionicons name='add-outline' size={40}  style={[color.primary, {
                backgroundColor: "#EBEEF2",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
              }]}
              
              />
              <View style={{
                marginLeft: 30,
              }}>
                <Text style={[color.pale, {
                    marginBottom: 10
                }]}>
                    Virtual Account Number
                </Text>
                <Text style={[fontWeight.bold]}>
                2389 081393877946
                </Text>
              </View>
            </View>

        </View>

        <View style={{
          marginTop: 30,
          marginHorizontal: 10
        }}>
          <Text style={[color.seconary, fontWeight.bold, fontSize.md]}>
            How to Top-up
          </Text>

        </View>
      </ScrollView>
    </View>
  )
}
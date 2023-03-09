import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'
import color from '../../styles/color'
import fontSize from '../../styles/fontSize'
import fontWeight from '../../styles/font-weight'
import Contact from '../../components/contact-card'

export default function UserListScreen ({navigation}) {
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
              Find Receiver
            </Text>

            </View>


            <View style={{
             backgroundColor: "#fff",
             paddingVertical: 10,
             marginHorizontal: 10,
             paddingHorizontal: 10 ,
             marginTop: 20,
             borderRadius: 10,
             display: "flex",
             flexDirection: "row",
            }}>
              <Ionicons name='search-outline' size={24}  style={[color.pale]}/>
              <TextInput style={{
                marginLeft: 10,
                width: "100%"
              }}  placeholder='Search...'>
              {/* <Ionicons name='search-outline' size={24} style={[color.pale]} /> */}
            </TextInput>
            </View>

        </View>

        <View style={{
          marginTop: 30,
          marginHorizontal: 10
        }}>
          <Contact />
        </View>
      </ScrollView>
    </View>
  )
}
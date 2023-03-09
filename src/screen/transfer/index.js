import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons'
import color from '../../styles/color'
import fontSize from '../../styles/fontSize'
import fontWeight from '../../styles/font-weight'
import Card from '../../components/contact-card/card'

import global from '../../global'

export default function Transfer ({navigation}) {

    const [currency, setCurrency] = useState('')

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
                  navigation.navigate('User List')
                }}/>
                <Text style={[color.white, fontSize.md, fontWeight.bold, {
                  marginLeft: 20
                }]}>
              Transfer
            </Text>

            </View>


            <View style={{
             backgroundColor: "#fff",
             paddingVertical: 20,
             marginHorizontal: 10,
             paddingHorizontal: 10 ,
             marginTop: 20,
             borderRadius: 10,
            }}>
              <Card />
              
            </View>

        </View>

            <View>  
                <TextInput placeholder='0.00' style={[color.pale, fontSize.lg,{
                    width: "100%",
                    textAlign: 'center',
                    color: "#6379F4",
                    marginTop: 20
                }]} 
                onChange={(e) => {
                    setCurrency(e)
                }}

                value={currency}
                keyboardType='numeric'>
                    
                </TextInput>
                <Text style={[color.seconary, fontWeight.bold, {
                    textAlign: "center",
                    marginTop: 20
                }]}>
                {("Rp" + new Intl.NumberFormat("id-ID", {
                    style: "decimal",
                    currency: "IDR"
                  }).format(20000) + " Are available")}
                </Text>
            </View>

            <View style={{
             backgroundColor: "#fff",
             paddingVertical: 10,
             marginHorizontal: 10,
             paddingHorizontal: 10 ,
             marginTop: 100,
             borderRadius: 10,
             display: "flex",
             flexDirection: "row",
             textAlign: "center",
             width: "100%"
            }}>
              <Ionicons name='pencil-sharp' size={24}  style={[color.pale]}/>
              <TextInput style={{
                marginLeft: 10,
                width: "100%"
              }}  placeholder='Add some notes'>
              {/* <Ionicons name='search-outline' size={24} style={[color.pale]} /> */}
            </TextInput>
            </View>

            <Pressable>
                <Text style={[{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 18,
                    backgroundColor: "#6379F4",
                    textAlign: "center",
                    borderRadius: 15,
                    marginHorizontal: 30,
                    marginTop: 20
                    
                }, global.pyLg]} 
                >
                    Next
                </Text>
            </Pressable>
            
      </ScrollView>
    </View>
  )
}
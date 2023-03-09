import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import Ionicons from '@expo/vector-icons/Ionicons'
const user = require('../../../assets/user-placeholder.png')
import '../../global'
import fontSize from '../../styles/fontSize'
import color from '../../styles/color'
import Card from '../../components'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen ({navigation}) {

    const [isData, setIsData] = useState({
        data: {},
        userId: ""
    })

    

    

    useEffect(() => {
        const getStorage = async() => {
            const a = await AsyncStorage.getItem('@login');
            setIsData({
                ...isData,
                userId: `${JSON.parse(a).user.id}`
                
            })

            axios.get(`http://192.168.1.6:5000/api/users/${JSON.parse(a).user.id}`)
            .then(res => {
            console.log(res.data.data)
            setIsData({
                ...isData,
                data: res.data.data
            })
        })
        .catch(err => alert("cant get data"))
        }

        getStorage()
        
        
    },[])

  return (
    <View style={{flex: 1, justifyContent:"center", backgroundColor: "#fff"}}>
      <ScrollView>
        <View style={{
            paddingTop: 80,
            paddingBottom: 40,
            backgroundColor: "#6379F4",
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20
        }}>
            <Pressable 
            onPress={() => {
                navigation.navigate('Profile')

            }}>
            <Image style={{
                width: 50,
                height:50,
                resizeMode: "contain",
                borderRadius: 10
                
            }} source={user} 
            />
            </Pressable>

            <View>
                <Text style={{
                    color: "#fff"
                }}>
                    Balance
                </Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fff"
                }}>
                    {("Rp" + new Intl.NumberFormat("id-ID", {
      style: "decimal",
      currency: "IDR"
    }).format(isData.data.balance))}
                </Text>
            </View>

            <Ionicons style={{
                marginLeft: 70
            }} name="notifications-outline" size={40} color={"#fff"} />
        </View>

        <View style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        }}>
            <Pressable style={{
                backgroundColor: "#EAEDFF",
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10
            }}>
                <Ionicons name='arrow-up-outline' size={50} color={"#6379F4"}/>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#514F5B",
                }}
                onPress={() => navigation.navigate('User List')}>
                    Transfer
                </Text>
            </Pressable>
            <Pressable style={{
                backgroundColor: "#EAEDFF",
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10
            }}>
                <Ionicons name='add-outline' size={50} color={"#6379F4"} />
                <Text style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#514F5B",
                }}
                onPress={() => navigation.navigate('Top up')}>
                    Top Up
                </Text>
            </Pressable>
        </View>

        <View style={{
            paddingHorizontal: 20,
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Text style={[fontSize.sm, {fontWeight: 'bold'}]}>
                Transaction History
            </Text>
            <Text style={[color.primary]}
            onPress={() => navigation.navigate('History')}>
                see all
            </Text>
        </View>

        {[1,2,3,4,5].map((item,index) => {
            return <Pressable key={index}
                onPress={() => {
                    navigation.navigate('Detail')
                }}

                style={{
                    marginTop: 15,
                }}
            >
                <Card />
            </Pressable>
        })}
      </ScrollView>
    </View>
  )
}
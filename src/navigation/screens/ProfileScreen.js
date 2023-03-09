import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ProfileScreen ({navigation}) {
  const handleLogout= async() => {
          try {
              await AsyncStorage.removeItem('@login')
              console.log("item removed")

              {await AsyncStorage.getItem('@login') ? navigation.navigate('Home') : navigation.navigate('Login')}

          } catch (error) {
            console.log(error)
          }
    
  }

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
      <Text
      onPress={handleLogout}>
        Logout
      </Text>
    </View>
  )
}
import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import color from '../../styles/color'
import fontSize from '../../styles/fontSize'
import fontWeight from '../../styles/font-weight'
// import Navigation from '../../screen/Navigation'

const user = require('../../../assets/user-placeholder.png')


export default function Card() {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable
      onPress={() => navigation.navigate('Transfer')}
        style={{
            display: 'flex',
            flexDirection: "row",
            alignItems: "center"
        }}
      >
      <Image style={{
                width: 50,
                height:50,
                resizeMode: "contain",
                borderRadius: 10
                
            }} source={user} 
            />

            <View style={{
                marginLeft: 10
            }}>  
                    <Text style={[
                        fontSize.xs,
                        color.seconary,
                        fontWeight.bold
                    ]}>
                        Samuel Suhi
                    </Text>
                    <Text style={[color.pale]}>
                        +62 896 0108 5905
                    </Text>
            </View>
      </Pressable>
    </View>
  )
}
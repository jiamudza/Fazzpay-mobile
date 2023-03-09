import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import color from '../../styles/color'
import fontSize from '../../styles/fontSize'
import fontWeight from '../../styles/font-weight'
import Card from './card'


export default function Contact({navigation}) {
  return (
    <View>
      <Text style={[color.seconary, fontSize.sm, fontWeight.bold]}>
        Contact
      </Text>
      <Text style={[color.pale, {fontWeight: 400}]}>
        17 Contact Founds
      </Text>

        <View style={{
            marginTop: 20
        }}>  
            {[1,2,3].map(item => {
              return <Pressable onPress={() => navigation.navigate('Transfer')} style={{
                marginTop: 20
              }}>
                  <Card />
              </Pressable>
            })}
        </View>
    </View>
  )
}
import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import fontSize from '../styles/fontSize'
import color from '../styles/color'
import fontWeight from '../styles/font-weight'
import axios from 'axios'

const user = require('../../assets/user-placeholder.png')


export default function Card(navigation) {

    const [history, setHistory] = useState({})

    useEffect(()=> {
        axios.get('http://192.168.1.6:5000/api/history')
        .then(res => {
            console.log(res.data.data)
            setHistory(res.data.data);
            console.log(history)
        })
        .catch(err => console.log(err))
    },[])
    return (
        <View style={{
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#fff",
            display: 'flex',
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",

        }}>
            <Image style={{
                width: 50,
                height:50,
                resizeMode: "contain",
                borderRadius: 10
                
            }} source={user} />

            <View>
                <Text style={[
                    fontSize.xs,
                    color.seconary,
                    fontWeight.bold
                ]}>
                    {/* {history[0].name} */}
                </Text>
                <Text style={color.pale}>
                    Transfer
                </Text>
            </View>

            <Text style={[fontSize.sm, fontWeight.bold, color.success, {
                marginLeft: 35
            }]}>
                    {("Rp" + new Intl.NumberFormat("id-ID", {
      style: "decimal",
      currency: "IDR"
    }).format(20000))}
                </Text>

            
        </View>
    )
  }


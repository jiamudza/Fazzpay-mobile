import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'; ;
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import global from '../../../global'
import authStyle from '../authStyle'
import { Pressable } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import HomeScreen from '../../../navigation/screens/HomeScreen';
// import Navigation from '../../Navigation';


const Login = () => {
    const navigation = useNavigation()
    const [passwordVisible, setPasswordVisible] = useState(false)

    const newLocal = (global.colorPale,
        { marginTop: 50,
        textAlign: "center",
        marginBottom: "43%" });

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) =>{
        console.log(user)

        axios({
            url: "http://192.168.1.6:5000/api/auth/login",
            method: "POST",
            data: 
                    {email : user.email,
                    password: user.password}
        })
        .then(res => {
            AsyncStorage.setItem('@login', JSON.stringify(res.data.data));

           navigation.navigate('Mvp')
        })
        .catch(err => alert("username/password salah"))
    }
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
        <View
    keyboardShouldPersistTaps="handled"
    style={[authStyle.ptbase]}>
        <Text style={[authStyle.brand]}>
            FazzPay
        </Text>

        <View style={[authStyle.formContainer, authStyle.pxbase]}>
            <Text style={[authStyle.featureTitle]}>
                Login
            </Text>
            <Text style={[global.colorPale, global.pxLg, global.pyMd]}>
            Login to your existing account to access
all the features in FazzPay.
            </Text>
            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                borderBottomWidth: 2,
                borderColor: "#6379F4"
            }}>
                <Fontisto name="email" size={24} color= "#6379F4" />
                <TextInput onChangeText={e => setUser({
                    ...user,
                    email: e
                })} style={[global.mx, {marginLeft: 10,
                width: "80%"},
                global.pyMd]} placeholder="Email" />
            </View>

            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                borderBottomWidth: 2,
                borderColor: "#6379F4",
                marginTop: 8
            }}>
                <Ionicons name="md-lock-closed-outline" size={24} color="#6379F4" />
                <TextInput
                onChangeText={e => setUser({
                    ...user,
                    password: e
                })}
                style={[{marginLeft: 10,
                width: "75%"},
                global.pyMd]} placeholder="Password" secureTextEntry={passwordVisible ? false : true} />
                {passwordVisible ? <MaterialIcons name="visibility" onPress={() => setPasswordVisible(current => !current)} size={24} style={[global.colorPale]} /> : <MaterialIcons name="visibility-off" onPress={() => setPasswordVisible(current => !current)} size={24} style={[global.colorPale]} />
                }

            </View>

            <Text style={{
                textAlign: "right",
                color: 'rgba(58, 61, 66, 0.8)',
                marginTop: 20,
                marginBottom: "20%",
            }} 
            
            onPress={() => navigation.navigate('ForgotPassword')}>Forgot password?</Text>

            <Pressable>
                <Text style={[{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 18,
                    backgroundColor: "#6379F4",
                    textAlign: "center",
                    borderRadius: 15
                    
                }, global.pyLg]} 
                onPress={handleLogin}>
                    Login
                </Text>
            </Pressable>

            <Text style={newLocal}>
        Don’t have an account? Let’s<Text style={{color:"#6379F4",fontWeight: 700}} onPress={() => navigation.navigate('Register')}> Sign Up</Text>
        </Text>
        </View>

            
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login
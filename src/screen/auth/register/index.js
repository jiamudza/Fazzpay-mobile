import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'; ;
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import global from '../../../global'
import authStyle from '../authStyle'
import { Pressable } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Register = () => {
    const navigation = useNavigation()
    const [passwordVisible, setPasswordVisible] = useState(false)

    const newLocal = (global.colorPale,
        { marginTop: 50,
        textAlign: "center",
        marginBottom: "43%" });
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
                Sign Up
            </Text>
            <Text style={[global.colorPale, global.pxLg, global.pyMd]}>
            Create your account to access FazzPay.
            </Text>
            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                borderBottomWidth: 2,
                borderColor: "#6379F4"
            }}>
                <SimpleLineIcons name="user" size={24} color="#6379F4" />
                <TextInput style={[global.mx, {marginLeft: 10,
                width: "80%"},
                global.pyMd]} placeholder="Enter your username" />
            </View>
            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                borderBottomWidth: 2,
                borderColor: "#6379F4"
            }}>
                <Fontisto name="email" size={24} color= "#6379F4" />
                <TextInput style={[global.mx, {marginLeft: 10,
                width: "80%"},
                global.pyMd]} placeholder="Enter your email" />
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
                <TextInput style={[{marginLeft: 10,
                width: "75%"},
                global.pyMd]} placeholder="Create your password" secureTextEntry={passwordVisible ? false : true} />
                {passwordVisible ? <MaterialIcons name="visibility" onPress={() => setPasswordVisible(current => !current)} size={24} style={[global.colorPale]} /> : <MaterialIcons name="visibility-off" onPress={() => setPasswordVisible(current => !current)} size={24} style={[global.colorPale]} />
                }

            </View>

            <Pressable style={{marginTop: 70}}>
                <Text style={[{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 18,
                    backgroundColor: "#6379F4",
                    textAlign: "center",
                    borderRadius: 15
                    
                }, global.pyLg]} 
                onPress={() => navigation.navigate('ForgotPassword')}>
                    Sign Up
                </Text>
            </Pressable>

            <Text style={newLocal}>
        Already have an account?, lets<Text style={{color:"#6379F4",fontWeight: 700}} onPress={() => navigation.navigate('Login')}> Login</Text>
        </Text>
        </View>

            
    </View>
    </KeyboardAvoidingView>
  )
}

export default Register
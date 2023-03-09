import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import global from '../../../global'
import authStyle from '../authStyle'
import { Pressable } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
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
                Reset Password
            </Text>
            <Text style={[global.colorPale, global.pxLg, global.pyMd]}>
            Enter your FazzPay e-mail so we can send
you a password reset link.
            </Text>
            <View style={{
                display: "flex",
                flexDirection:"row",
                alignItems: "center",
                borderBottomWidth: 2,
                borderColor: "#6379F4",
                marginTop: 30
            }}>
                <Fontisto name="email" size={24} color= "#6379F4" />
                <TextInput style={[global.mx, {marginLeft: 10,
                width: "80%"},
                global.pyMd]} placeholder="Enter your email" />
            </View>

            <Pressable style={{marginTop: "90%"}}>
                <Text style={[{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 18,
                    backgroundColor: "#6379F4",
                    textAlign: "center",
                    borderRadius: 15
                    
                }, global.pyLg]} 
                onPress={() => navigation.navigate('Login')}>
                    Confirm
                </Text>
            </Pressable>
        </View>

            
    </View>
    </KeyboardAvoidingView>
  )
}

export default ForgotPassword
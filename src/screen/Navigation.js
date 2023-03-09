import { createStackNavigator } from "@react-navigation/stack"
import Login from "./auth/login"
import Register from "./auth/register"
import ForgotPassword from "./auth/forgot_password"
import MainContainer from "../navigation/MainContainer"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName={AsyncStorage.getItem('@login') ? 'Mvp' : 'Login'} screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Mvp" component={MainContainer} />
    </Stack.Navigator>
  )
}
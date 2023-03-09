import * as React from 'react';
// import Navigation from './src/screen/Navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack"
import Login from './src/screen/auth/login';
import Register from './src/screen/auth/register';
import ForgotPassword from './src/screen/auth/forgot_password';
import MainContainer from './src/navigation/MainContainer';
import { NavigationContainer } from '@react-navigation/native';
import Transfer from './src/screen/transfer';
// import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createStackNavigator()

function App() {
  const [login, setLogin] = React.useState(null);
  const [isLoaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try{
        const data = await AsyncStorage.getItem('@login')

        if(data !== null) {
          setLogin(data)
        } 
      } catch(e) {
        console.log(e)
      }

      getData()

      return () => null
    }
  }, [])
  
    return <NavigationContainer>
              <Stack.Navigator initialRouteName={AsyncStorage.getItem('@login') ? 'Mvp' : 'Login'} screenOptions={{
            headerShown: false,
        }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Transfer" component={Transfer} />
                <Stack.Screen name="Mvp" component={MainContainer} />
              </Stack.Navigator>
          </NavigationContainer>
}

export default App
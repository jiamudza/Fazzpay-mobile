import * as React from 'react'
import { View, Text } from 'react-native'

//middleware
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'


//Screens
import HomeScreen from './screens/HomeScreen'
import userListScreen from './screens/UserListScreen'
import TopupScreen from './screens/TopupScreens'
import ProfileScreen from './screens/ProfileScreen'

const homeName = "Home"
const userListName = "User List"
const topupName ="Top up"
const profileName = "Profile"

const Tab = createBottomTabNavigator()



export default function MainContainer() {
    return (
        
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon : ({focused, size, color}) => {
                    let iconName;
                let rn = route.name


                if(rn === homeName) {
                    iconName = focused ? "home" : "home-outline"
                } else if(rn === userListName) {
                    iconName = focused ? "list" : "list-outline"
                } else if(rn === profileName) {
                    iconName = focused ? "person" : "person-outline"
                } else if(rn === topupName) {
                    iconName = focused ? "card" : "card-outline"
                }

                return <Ionicons name={iconName} size={24} color={"#6379F4"} />
                },

                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: {
                    height: 70,
                    marginHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 30,
                    marginTop: 10
                },

            })}
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={userListName} component={userListScreen} />
                <Tab.Screen name={topupName} component={TopupScreen} />
                <Tab.Screen name={profileName} component={ProfileScreen} />

            </Tab.Navigator>
        
    )
}
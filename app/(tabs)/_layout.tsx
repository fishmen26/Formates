import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

// const TabIcon = ({icon, color, name, focused}) => {
//     return(
//         <View>
//             <Image source={} />
//         </View>
//     )
// }

const TabsLayout = () => {
  return (
    <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#F97C2E',
            tabBarStyle:{
              height: 84,
              borderTopWidth: 1,
            }
          }}
        >
             <Tabs.Screen
                name="community"
                options={{
                    title: 'Community',
                    headerShown: false,
                    tabBarIcon: ({ color , focused }) => (
                        <Ionicons 
                        name="people-sharp"
                        size={focused? 34 : 30}
                        color={color}
                        focused={focused}
                        />
                    )
                }}
            />
             <Tabs.Screen
                name="connect"
                options={{
                    title: 'Connect',
                    headerShown: false,
                    tabBarIcon: ({ color , focused }) => (
                        <Ionicons 
                        name="infinite"
                        size={focused? 45 : 40}
                        color={color}
                        focused={focused}
                        />
                    )
                }}
            />
             <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color , focused }) => (
                        <Ionicons 
                        name="person-circle-outline"
                        size={focused? 41 : 36}
                        color={color}
                        focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout
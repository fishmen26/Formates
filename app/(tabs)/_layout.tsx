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
        <Tabs>
             <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color , focused }) => (
                        <Ionicons 
                        name="home"
                        size={16}
                        color={color}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout
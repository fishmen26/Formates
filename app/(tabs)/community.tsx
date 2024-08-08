import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

const AfTechLab = require("../../assets/images/AF_Tech_Lab.png");
const SillcionClub = require("../../assets/images/silicon_valley.png");
const FintechHub = require("../../assets/images/fintech_innovation_hub.png");



const Community = () => {

  const COMMUNITY =[
    {
      id: 1,
      imagePath: AfTechLab,
      communityName: "AF Tech Lab"
    },
    {
      id: 2,
      imagePath: SillcionClub,
      communityName: "Silicon Valley Finance and Technology Club"
    },
    {
      id: 3,
      imagePath: FintechHub,
      communityName: "Fintech Innovation Hub"
    }
  ]

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
        data={COMMUNITY}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <View className="flex flex-row px-4 py-3 justify-between align-middle">
            <View className="flex-row">
              <Image className="flex w-1/5" source={item.imagePath} 
              style={{width: 40, height: 40}}/>
              <View className="flex w-10"></View>
              <Text className="flex w-70 text-lg font-imedium">{item.communityName}</Text>
            </View>
            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
          </View>
        )}
        ListHeaderComponent={()=>(
          <View className="my-2 px-4 space-y-6">
            <View>
              <View className="justify-between item-start flex-row mb-6">
                <Text className="font-isemiBold text-xl">
                  My Community
                </Text>
                <Text className="text-primary font-isemiBold">See all {'>'}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <FlatList 
        horizontal
        data={COMMUNITY}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <View className="flex flex-row px-4 py-3 justify-between align-middle">
            <View className="flex-row">
              <Image className="flex w-1/5" source={item.imagePath} 
              style={{width: 40, height: 40}}/>
              <View className="flex w-10"></View>
              <Text className="flex w-70 text-lg font-imedium">{item.communityName}</Text>
            </View>
            <View><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>
          </View>
        )}
        ListHeaderComponent={()=>(
          <View className="my-2 px-4 space-y-6">
            <View>
              <View className="justify-between item-start flex-row mb-6">
                <Text className="font-isemiBold text-xl">
                  My Community
                </Text>
                <Text className="text-primary font-isemiBold">See all {'>'}</Text>
              </View>
            </View>
          </View>
        )}
      />
      </SafeAreaView>
  )
}

export default Community
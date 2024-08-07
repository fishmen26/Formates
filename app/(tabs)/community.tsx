import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Community = () => {

  const COMMUNITY =[
    {
      id: 1,
      imagePath: "",
      communityName: "AF Tech Lab"
    },
    {
      id: 2,
      imagePath: "",
      communityName: "Silicon Valley Finance and Technology Club"
    },
    {
      id: 3,
      imagePath: "",
      communityName: "Fintech Innovation Hub"
    }
  ]


  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
        data={COMMUNITY}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <View className="px-4 py-2 justify-between flex-row">
            <Text className="flex-col text-lg font-imedium">{item.communityName}</Text>
            <Text className="flex-col"><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></Text>
          </View>
        )}
        ListHeaderComponent={()=>(
          <View className="my-6 px-4 space-y-6">
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
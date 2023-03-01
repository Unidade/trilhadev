import { FontAwesome5 } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

function HomeScreen() {
  return (
    <SafeAreaView className='px-4 pt-4'>
      <View className=' rounded-md'>
        <View className='flex-row items-center self-end ' style={{ gap: 10 }}>
          <Streak />
          <FontAwesome5 name='coins' size={24} color='black' />
          <Text style={{ fontFamily: 'Golos' }} className='text-lg font-bold'>
            500
          </Text>
        </View>
      </View>
      <View className='mt-5'>
        <Text
          style={{ fontFamily: 'Golos' }}
          className='text-2xl tracking-tighter'
        >
          Bem-vindo de volta, Claro!
        </Text>
      </View>
      <Last7Days />
      <ContinueFromYouLeft />
    </SafeAreaView>
  )
}

function ContinueFromYouLeft() {
  return (
    <View className='mt-5'>
      <Text className='text-xl font-medium ' style={{ fontFamily: 'Golos' }}>
        Continue do que você parou
      </Text>

      <TouchableOpacity className='mt-4 rounded-2xl shadow-lg bg-white p-4'>
        <View className='flex-row items-center mt-2' style={{ gap: 10 }}>
          <FontAwesome5 name='robot' size={24} color='#5e5e5ee8' />
          <Text style={{ fontFamily: 'Golos' }} className='text-lg font-medium'>
            IA e Saúde
          </Text>
        </View>
        <View className='mt-2'>
          <Text style={{ fontFamily: 'Golos' }}>
            Aprenda sobre a inteligência artificial na área da saúde.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

function Last7Days() {
  return (
    <>
      <Text className='mt-2'>Ultimos 7 dias</Text>
      <View className='flex-row items-center mt-2' style={{ gap: 5 }}>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-red-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-red-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-green-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-green-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-green-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-green-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
        <View className='h-7 w-7 items-center justify-center rounded-full bg-green-400'>
          <Text className='text-white text-xs'>S</Text>
        </View>
      </View>
    </>
  )
}

function Streak() {
  return (
    <View className='flex-row items-center' style={{ gap: 5 }}>
      <FontAwesome5 name='fire' size={24} color='#f00' />
      <Text style={{ fontFamily: 'Golos' }} className='text-lg font-bold'>
        5
      </Text>
    </View>
  )
}

const HomeStack = createNativeStackNavigator()

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
    </HomeStack.Navigator>
  )
}

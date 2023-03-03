import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'

import { Pressable, TouchableNativeFeedback } from 'react-native'

import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'

const StackTrilhas = createNativeStackNavigator()

type Trilha = {
  name: string
  icon: JSX.Element
  goTo?: string
}

const trilhas: Trilha[] = [
  {
    name: 'Lógica de Programação',
    icon: <AntDesign name='calculator' size={24} color='black' />,
  },
  {
    name: 'Javascript',
    icon: <Ionicons name='logo-javascript' size={24} color='yellow' />,
    goTo: 'Javascript',
  },
  {
    name: 'Frontend',
    icon: <MaterialIcons name='web' size={24} color='#000113' />,
  },
  {
    name: 'Data Science Python',
    icon: <Ionicons name='logo-python' size={24} color='orange' />,
  },
]

function JavavascriptRoad() {
  const navigation = useNavigation()
  return (
    <View className='items-center py-4'>
      <View className='justify-center items-start'>
        <View className='flex-row items-center' style={{ gap: 5 }}>
          <TouchableOpacity className=' rounded-full bg-gray-500 px-2 py-2'>
            <AntDesign name='check' size={16} color='#0f0' />
          </TouchableOpacity>

          <Text style={{ fontFamily: 'Golos' }}>Sintaxe </Text>
        </View>
        <View className='space-y-2 self-center mt-5'>
          <AntDesign name='arrowdown' size={14} color='black' />
        </View>
        <TouchableOpacity
          className='flex-row items-center mt-6'
          style={{ gap: 5 }}
          onPress={() => navigation.navigate('Fibonacci')}
        >
          <View className=' rounded-full bg-gray-500 px-2 py-2'>
            <AntDesign name='hourglass' size={16} color='white' />
          </View>
          <Text style={{ fontFamily: 'Golos' }}>Fibonacci</Text>
        </TouchableOpacity>
        <View className='space-y-2 self-center mt-5'>
          <AntDesign name='arrowdown' size={14} color='black' />
        </View>
        <View
          className='flex-row items-center self-center mt-6'
          style={{ gap: 5 }}
        >
          <TouchableOpacity className=' rounded-full bg-gray-200 px-2 py-2'>
            <MaterialCommunityIcons name='cards' size={24} color='blue' />
          </TouchableOpacity>
        </View>
        <View className='space-y-2 self-center mt-5'>
          <AntDesign name='arrowdown' size={14} color='black' />
        </View>
        <View className='flex-row items-center mt-6' style={{ gap: 5 }}>
          <TouchableOpacity className=' rounded-full bg-gray-500 px-2 py-2'>
            <AntDesign name='hourglass' size={16} color='white' />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Golos' }}>Agulha no Palheiro</Text>
        </View>
        <View className='space-y-2 self-center mt-5'>
          <AntDesign name='arrowdown' size={14} color='black' />
        </View>
        <View className='flex-row items-center mt-6' style={{ gap: 5 }}>
          <TouchableOpacity className=' rounded-full bg-gray-500 px-2 py-2'>
            <Ionicons name='construct-outline' size={16} color='white' />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Golos' }}>Projeto Final</Text>
        </View>
      </View>
    </View>
  )
}

export default function TrilhasStackScreen() {
  return (
    <StackTrilhas.Navigator>
      <StackTrilhas.Screen
        name='TrilhasScreen'
        options={{
          headerTitle: 'Trilhas',
        }}
        component={Trilhas}
      />
      <StackTrilhas.Screen
        name='Javascript'
        options={{
          headerTitle: 'Trilha do Javascript',
        }}
        component={JavavascriptRoad}
      />
    </StackTrilhas.Navigator>
  )
}

function Trilhas() {
  return (
    <View className='p-2'>
      <Text className='text-lg'>Seleciona umas das trilhas</Text>
      <View className='mt-2'>
        {trilhas.map((trilha) => (
          <TrilhaCard key={trilha.name} trilha={trilha} />
        ))}
      </View>
    </View>
  )
}

function TrilhaCard({ trilha }: { trilha: Trilha }) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className='bg-blue-400 py-5 pl-5 rounded-lg mt-4'
      style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
      onPress={() => {
        if (trilha.goTo) {
          navigation.navigate(trilha.goTo)
        }
      }}
    >
      {trilha.icon && trilha.icon}
      <Text
        className='text-white font-medium text-xl  uppercase'
        style={{ fontFamily: 'Golos' }}
      >
        {trilha.name}
      </Text>
    </TouchableOpacity>
  )
}

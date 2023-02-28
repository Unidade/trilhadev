import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Pressable, TouchableNativeFeedback } from 'react-native'

import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
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
}

const trilhas: Trilha[] = [
  {
    name: 'Lógica de Programação',
    icon: <AntDesign name='calculator' size={24} color='black' />,
  },
  {
    name: 'Javascript',
    icon: <Ionicons name='logo-javascript' size={24} color='yellow' />,
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
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className='bg-blue-400 py-5 pl-5 rounded-lg mt-4'
      style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
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

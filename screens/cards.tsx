import Swiper from 'react-native-deck-swiper'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

const cardsData = [
  {
    id: 1,
    title: 'Card #1',
    text: 'A inteligência artificial está transformando a maneira como lidamos com a saúde. Graças a ela, médicos e cientistas podem analisar grandes quantidades de dados para identificar padrões e tendências que seriam impossíveis de serem detectados pelos seres humanos.',
  },
  {
    id: 2,
    title: 'Card #2',
    text: 'Isso permite o diagnóstico mais preciso de doenças e o desenvolvimento de tratamentos personalizados.',
  },
  {
    id: 3,
    title: 'Card #3',
    text: 'Além disso, a IA está mudando a forma como os procedimentos cirúrgicos são realizados. Por exemplo, graças a ela, agora é possível realizar mapeamento 3D de um paciente! ',
  },
  {
    id: 4,
    title: 'Card #4',
    text: 'Permitindo que os cirurgiões tenham uma visão mais detalhada do corpo humano, praticamente como uma visão de raio-X. Isso torna os procedimentos cirúrgicos mais precisos e eficazes, reduzindo o risco de complicações.',
  },
  {
    id: 5,
    title: 'Card #5',
    text: 'Com a inteligência artificial, podemos esperar um futuro em que a saúde humana seja ainda mais personalizada e acessível. ',
  },
  {
    id: 6,
    title: 'Card #6',
    text: 'Novas descobertas serão feitas e novas tecnologias serão desenvolvidas para melhorar a qualidade de vida das pessoas e prolongar a expectativa de vida. Estamos vivendo uma era de mudanças incríveis, e a inteligência artificial é uma das principais responsáveis por essas transformações.',
  },
]

type CardsRootParams = {
  CardsScreen: undefined
  CardIAHealth: undefined
}

const cardsStack = createNativeStackNavigator<CardsRootParams>()

export default function CardStackScreen() {
  return (
    <cardsStack.Navigator>
      <cardsStack.Screen
        name='CardsScreen'
        component={CardsScreens}
        options={{ headerShown: false }}
      />
      <cardsStack.Screen
        name='CardIAHealth'
        component={CardIAHealth}
        options={{ headerTitle: '' }}
      />
    </cardsStack.Navigator>
  )
}

const cardsArr = [
  {
    id: 1,
    title: 'Inteligência artificial aplicada na área de saúde',
    icon: <FontAwesome5 name='robot' size={24} color='#e6e6e6e8' />,
    goTO: 'CardIAHealth',
  },
  {
    id: 2,
    title: 'Inteligência artificial aplicada na área de saúde',
    icon: <FontAwesome5 name='robot' size={24} color='#e6e6e6e8' />,
    goTO: 'CardIAHealth',
  },
  {
    id: 3,
    title: 'Inteligência artificial aplicada na área de saúde',
    icon: <FontAwesome5 name='robot' size={24} color='#e6e6e6e8' />,
    goTO: 'CardIAHealth',
  },
  {
    id: 4,
    title: 'Inteligência artificial aplicada na área de saúde',
    icon: <FontAwesome5 name='robot' size={24} color='#e6e6e6e8' />,
    goTO: 'CardIAHealth',
  },
]

function CardsScreens() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='px-6 py-4 flex-1'>
      <Text className='text-xl' style={{ fontFamily: 'Golos' }}>
        Desenvolva seus conhecimentos
      </Text>

      {cardsArr.map((card) => {
        return (
          <Card
            key={card.id}
            navigation={navigation}
            title={card.title}
            icon={card.icon}
            goTO={card.goTO}
          />
        )
      })}
    </SafeAreaView>
  )
}

function Card({
  navigation,
  title,
  icon,
  goTO,
}: {
  navigation: any
  title: string
  icon: any
  goTO: string
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(goTO)}
      className=' mt-5 bg-blue-400 flex-row px-5 py-5 items-center rounded-2xl'
      style={{ gap: 6 }}
    >
      {icon && icon}
      <Text
        className='text-md tracking-tighter text-white'
        style={{ fontFamily: 'Golos' }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

function CardIAHealth() {
  return (
    <SafeAreaView
      className='justify-center flex-1'
      style={{ backgroundColor: '#fff' }}
    >
      <View className='flex-1' style={{ backgroundColor: '#000' }}>
        <Swiper
          infinite
          cards={cardsData}
          stackSize={3}
          animateCardOpacity
          containerStyle={{ backgroundColor: '#fff' }}
          verticalSwipe={false}
          renderCard={(card) => {
            return (
              <View
                className='min-h-[75%]  bg-blue-500 pt-2 pb-8 px-2 rounded-md'
                style={{ elevation: 5 }}
              >
                <Text
                  style={{
                    fontFamily: 'Montserrat_400Regular',
                  }}
                  className='text-2xl text-white  tracking-wider leading-10'
                >
                  {card.text}
                </Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

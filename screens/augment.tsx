import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AugumentCard from '../components/AugmentCard'
import StyledText from '../components/StyledText'

type AugmentChoice = {
  id: number
  title: string
  image: any
  text: string
  color: string
  goTO: string
}

const augmentArr: AugmentChoice[] = [
  {
    id: 1,
    title: 'Recursão',
    image: require('../assets/images/icons8-wizard-64.png'),
    text: 'Aprenda a implementar o algoritmo de Fibonacci de forma recursiva',
    color: 'rgba(143, 209, 245, 1)',
    goTO: 'FinalProject',
  },
  {
    id: 2,
    title: 'Memorização',
    image: require('../assets/images/icons8-brain-64.png'),
    text: 'Implemente memorização no algoritmo de Fibonacci para otimizar o tempo de execução',
    color: 'rgba(240, 163, 143, 0.91)',
    goTO: 'FinalProject',
  },
]

export default function AugmentScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='px-6 pt-4 flex-1 bg-white justify-center'>
      <StyledText className='text-3xl  tracking-widest font-medium text-center'>
        Faça a sua escolha
      </StyledText>
      <View className='items-center mt-10'>
        <Image
          style={{ height: 64, width: 64 }}
          source={require('../assets/images/signpost.png')}
        />
      </View>
      <View className=' flex-1 flex-shrink-0 mt-10' style={{ gap: 20 }}>
        {augmentArr.map((choice) => (
          <AugumentCard
            key={choice.id}
            title={choice.title}
            text={choice.text}
            image={choice.image}
            color={choice.color}
            onPress={() => navigation.navigate(choice.goTO)}
          />
        ))}
      </View>
    </SafeAreaView>
  )
}

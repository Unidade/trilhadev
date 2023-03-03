import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createContext, useReducer } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CodeText } from '../components/CodeText'
import Quiz from '../components/Quiz'
import StyledText from '../components/StyledText'

const StackQuiz = createNativeStackNavigator()

export default function QuizStackScreen() {
  return (
    <StackQuiz.Navigator>
      <StackQuiz.Screen
        name='Quizes '
        component={Quizes}
        options={{ headerShown: false }}
      />
    </StackQuiz.Navigator>
  )
}

const stepsaa = [
  'Primeiro, vamos definir a função Fibonacci, ela irá receber um número, indicando qual o número da sequência será retornado',
  'Agora, vamos definir os dois primeiros números da sequência',
  'Qual o próximo número da sequência ?',
  'Definiremos um laço para calcular os próximos números, perceba o algoritmo calculando com base no número anteriores',
  'Por fim devolvemos o número desejado pelo usuário',
]

const steps: Step[] = [
  {
    id: 1,
    instruction:
      'Sequência Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual, cada termo subsequente corresponde à soma dos dois anteriores.\nPor exemplo, a sequência de Fibonacci de 0 a 10 é: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.',
  },
  {
    id: 2,
    instruction:
      'Seja a sequência de Fibonacci começando com [1, 5]. Qual o próximo número da sequência?',
    options: [
      { id: 'a', label: '9' },
      { id: 'b', label: '6', correct: true },
    ],
  },
  {
    id: 3,
    instruction:
      'Perceba que você pode achar qualquer número da sequência desde que conheça os dois antecessores, como você faria para achar o 223° termo da sequência ?',
    code: 'const result = fibonacci(8)',
    options: [
      {
        id: 'a',
        label: 'Somaria o termo 222° com o termo 221°',
        correct: true,
      },
      { id: 'b', label: 'É impossível achar esse termo' },
    ],
  },
  {
    id: 4,
    instruction: 'What is the value of result?',
    options: [
      { id: 'a', label: '[2, 4, 6, 8, 10]' },
      { id: 'b', label: '[1, 2, 3, 4, 5, 6]', correct: true },
    ],
  },
]

function Quizes() {
  return (
    <SafeAreaView className='flex-1 '>
      <Quiz steps={steps} />
    </SafeAreaView>
  )
}

type Step = {
  id: number
  instruction: string
  code?: string
  options?: {
    id: string
    label: string
    correct?: boolean
  }[]
}

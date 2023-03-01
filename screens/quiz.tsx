import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CodeText } from '../components/CodeText'

const StackQuiz = createNativeStackNavigator()

export default function QuizStackScreen() {
  return (
    <StackQuiz.Navigator>
      <StackQuiz.Screen name='Quizes ' component={Quiz} />
    </StackQuiz.Navigator>
  )
}
type token = {
  value: string
  isOption: boolean
}

const fibbonaci = `function Fibonacci(num) {
  | let fibArr = [0, 1] 
  | for (let i = 2; i <= num; i++) {
    let fibNum = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(fibNum) 
  } | return fibArr[num]  }
`
const fibonnaciTokens = fibbonaci.split('|')
console.log(fibonnaciTokens)

const steps = [
  'Primeiro, vamos definir a função Fibonacci, ela irá receber um número, indicando qual o número da sequência será retornado',
  'Agora, vamos definir os dois primeiros números da sequência',
  'Qual o próximo número da sequência ?',
  'Definiremos um laço para calcular os próximos números, perceba o algoritmo calculando com base no número anteriores',
  'Por fim devolvemos o número desejado pelo usuário',
]

const tokensDefault: token[] = [
  { value: '<html>', isOption: true },
  {
    value: '</html>',
    isOption: true,
  },
  {
    value: 'tlx',
    isOption: true,
  },
]

const stackFibonacci = createNativeStackNavigator()

function FibonacciQuiz() {
  const [setps, setCurrentStep] = useState(0)
  const [tokens, setTokens] = useState(fibonnaciTokens)

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  )
}

function Quiz() {
  const [tokens, setTokens] = useState(tokensDefault)

  return (
    <View style={styles.SafeAndroidAreaView}>
      <View>
        <Text className='font-bold'>Sequência de Fibonacci</Text>
        <Text>
          É uma sequência em que cada número é a soma dos dois números
          antecessores, por exemplo:
        </Text>
        <Text>0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...</Text>
      </View>

      <ScrollView className='mt-4'>
        <View style={styles.codeHighlightContainer}>
          <CodeText>{'function fibonnaci() : { const   } 🧙‍♂️'}</CodeText>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  SafeAndroidAreaView: {
    justifyContent: 'space-between',
    padding: 10,
    flex: 1,
  },
  optsContainer: {
    fontFamily: 'Golos',
    flexDirection: 'row',
    flexShrink: 0,
    alignItems: 'center',
    backgroundColor: '#f00',
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
    gap: 5,
  },
  ops: {
    backgroundColor: '#2ea523',
    justifyContent: 'space-between',
  },
  token: {
    backgroundColor: '#000',
  },
  skeleton: {
    height: 50,
    width: 50,
    backgroundColor: '#ddd',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    backgroundColor: '#fff',
    flex: 1,
  },
})

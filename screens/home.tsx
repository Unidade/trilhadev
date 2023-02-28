import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Batata</Text>
    </SafeAreaView>
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

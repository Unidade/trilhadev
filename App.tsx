import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrilhasStackScreen from './screens/trilhas'
import { Ionicons } from '@expo/vector-icons'
import HomeStackScreen from './screens/home'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import CardStackScreen from './screens/cards'
import QuizStackScreen from './screens/quiz'

import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'

export type TabParamList = {
  Home: undefined
  Trilhas: undefined
  Cards: undefined
  Quiz: undefined
}
const Tab = createBottomTabNavigator()

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Golos: require('./assets/fonts/GolosText-VariableFont.ttf'),
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
    Montserrat_400Regular,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => {
          return {
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              let iconName: keyof typeof Ionicons.glyphMap = 'document'
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home'
              } else if (route.name === 'Trilhas') {
                iconName = focused ? 'ios-list' : 'ios-list'
              } else if (route.name === 'Cards') {
                iconName = focused ? 'ios-card' : 'ios-card'
              } else if (route.name === 'Quiz') {
                iconName = focused ? 'ios-clipboard' : 'ios-clipboard'
              }
              return <Ionicons name={iconName} size={25} color={color} />
            },
          }
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Cards' component={CardStackScreen} />
        <Tab.Screen name='Trilhas' component={TrilhasStackScreen} />
        <Tab.Screen name='Quiz' component={QuizStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

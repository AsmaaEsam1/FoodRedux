import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
          <Stack.Screen name='ResultsShowScreen' component={ResultsShowScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default MyStack;
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './mainStack'

export default function Navigation () {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}
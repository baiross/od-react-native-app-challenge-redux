import { NavigationContainer } from '@react-navigation/native'
import { setNavigator } from '../src/services/navigationService'
import MainStackNavigator from './mainStack'

export default function Navigation () {
  return (
    <NavigationContainer ref={ref => setNavigator(ref)}>
      <MainStackNavigator />
    </NavigationContainer>
  )
}
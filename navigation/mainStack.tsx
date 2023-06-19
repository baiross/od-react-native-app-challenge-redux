import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './bottomTab'
import { MAIN_STACK } from '../src/routes/app.routes'

export default function MainStackNavigator () {
const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator>
      <Stack.Screen name={MAIN_STACK} component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
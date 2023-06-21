import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types'
import BottomTabNavigator from './bottomTab'
import { COMMENT_SCREEN, GALLERY_DETAIL_SCREEN, MAIN_STACK } from '../src/routes/app.routes'
import { CommentScreen, GalleryDetailsScreen } from '../src/screens'
import Colors from '../constants/Colors'

export default function MainStackNavigator () {
const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <Stack.Navigator>
      <Stack.Screen name={MAIN_STACK} component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name={COMMENT_SCREEN}
        component={CommentScreen}
        options={{
          headerTitle: 'Comments',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <Stack.Screen
        name={GALLERY_DETAIL_SCREEN}
        component={GalleryDetailsScreen}
        options={{
          headerTitle: '',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </Stack.Navigator>
  )
}
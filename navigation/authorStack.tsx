import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AUTHORS_PROFILE_SCREEN, AUTHORS_SCREEN } from '../src/routes/app.routes'
import { AuthorProfileScreen, AuthorsScreen } from '../src/screens'
import Colors from '../constants/Colors'

type AuthorStackType = {
  [AUTHORS_SCREEN]: undefined,
  [AUTHORS_PROFILE_SCREEN]: undefined
}
export default function AuthorStackNavigator () {
const AuthorStack = createNativeStackNavigator<AuthorStackType>()
  return (
    <AuthorStack.Navigator>
      <AuthorStack.Screen
        name={AUTHORS_SCREEN}
        component={AuthorsScreen}
        options={{
          headerTitle: 'Authors',
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <AuthorStack.Screen
        name={AUTHORS_PROFILE_SCREEN}
        component={AuthorProfileScreen}
        options={{
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </AuthorStack.Navigator>
  )
}
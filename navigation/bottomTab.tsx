import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons' 

import { RootTabParamList } from '../types'
import { HomeScreen, AuthorsScreen } from '../src/screens'
import { AUTHORS_TAB, HOME_TAB } from '../src/routes/app.routes'
import Colors from '../constants/Colors'

export default function BottomTabNavigator () {
const BottomTab = createBottomTabNavigator<RootTabParamList>()

  return (
    <BottomTab.Navigator
      initialRouteName={HOME_TAB}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: 72,
        },
      }}
    >

      <BottomTab.Screen
        name={HOME_TAB}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <Ionicons name="ios-home" color={focused ? Colors.primary : Colors.primary50} size={23} />,
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
      <BottomTab.Screen
        name={AUTHORS_TAB}
        component={AuthorsScreen}
        options={{
          title: 'Authors',
          tabBarIcon: ({ focused }) => <Ionicons name="ios-people" color={focused ? Colors.primary : Colors.primary50} size={23} />,
          headerStyle: {backgroundColor: Colors.primary},
          headerTintColor: Colors.white,
        }}
      />
    </BottomTab.Navigator>
  )
}

```
react-native-safe-area-context
react-native-screens 是react-navigation/native-stack的依賴 也需要單獨安裝

01.import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
01.1.import type { RouteProp } from '@react-navigation/native'

02.import {createNavigationStackNavigator} from '@react-navigation/native-stack'
02.1.import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'

03.import { createStackNavigator } from '@react-navigation/stack'
03.1.import type { StackScreenProps, StackNavigationProp } for @react-navigation/stack

04.import { createDrawerNavigator } from '@react-navigation/drawer'
04.1.import type { DrawerScreenProps, DrawerNavigationProp } from @react-navigation/drawer

05.import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
05.1.import type { BottomTabScreenProps, BottomTabNavigationProp } from @react-navigation/bottom-tabs
```

> We recommend creating a separate types.tsx file where you keep the types and import them in your component files instead of repeating them in each file.

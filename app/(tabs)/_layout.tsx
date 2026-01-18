import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import {AntDesign, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
const _layout = () => {
  return <Tabs screenOptions={{ tabBarActiveTintColor: "#53b175", tabBarInactiveTintColor: "#111", headerShown: false}}>
    <Tabs.Screen name='shop' options={{
        title: "Shop",
        tabBarIcon: ({color, size}) => <AntDesign name='shop' size={size} color={color} />
    }}/>
    <Tabs.Screen name='explore' options={{
        title: "Explore",
        tabBarIcon: ({color, size}) => <Feather name='search' size={size} color={color} />
    }}/>
    <Tabs.Screen name='cart' options={{
        title: "Cart",
        tabBarIcon: ({color, size}) => <Feather name='shopping-cart' size={size} color={color} />
    }}/>
    <Tabs.Screen name='favourite' options={{
        title: "Favourite",
        tabBarIcon: ({color, size}) => <Feather name='heart' size={size} color={color} />
    }}/>
    <Tabs.Screen name='account' options={{
        title: "Account",
        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='account-circle-outline' size={size} color={color} />
    }}/>
  </Tabs>
}

export default _layout

const styles = StyleSheet.create({})
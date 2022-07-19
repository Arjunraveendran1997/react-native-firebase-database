import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import AddItem from './screens/AddItem'
import ListItem from './screens/ListItem'


const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={AddItem} />
        <Stack.Screen name="List" component={ListItem} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entry from "./src/screens/Entry";
import Detail from "./src/screens/Detail";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Entry"
        component={Entry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }} // Customize as needed
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

import React from "react";
import { Dimensions , Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainScreen from "./src/screens/MainScreen";

const Tab = createBottomTabNavigator();

const { height } = Dimensions.get("window");

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Heart":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "Suitcase":
              iconName = focused ? "briefcase" : "briefcase-outline";
              break;
            case "Bell":
              iconName = focused ? "notifications" : "notifications-outline";
              break;
            default:
              iconName = "alert-circle";
          }

          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: "#C67C4E",
        tabBarInactiveTintColor: "#8D8D8D",
        headerShown: false,
        tabBarStyle: {
          height: height * 0.10,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: '#ffffff',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            android: {
              elevation: 5,
            },
          }),
        },
        tabBarShowLabel : false,
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Heart" component={MainScreen} />
      <Tab.Screen name="Suitcase" component={MainScreen} />
      <Tab.Screen name="Bell" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

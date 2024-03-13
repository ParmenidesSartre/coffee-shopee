import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { CoffeeProvider } from "./src/context/CoffeeContext";
import AppNavigator from "./AppNavigator";

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await fetchFonts();
        setFontLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!fontLoaded) {
    return null; // or a minimal loading state
  }

  return (
    <CoffeeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CoffeeProvider>
  );
}

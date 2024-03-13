import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GradientHeader from "../components/Main/GradientHeader";
import SearchBar from "../components/Main/SearchBar";
import PromoSection from "../components/Main/PromoSection";
import CoffeeSelection from "../components/Main/CoffeeSelection";
import CoffeeList from "../components/Main/CoffeeList";
import { useCoffee } from "../context/CoffeeContext";

const Main = () => {
  const [activeCoffee, setActiveCoffee] = useState("Cappuccino");
  const { coffees } = useCoffee();

  return (
    <View style={styles.container}>
      <GradientHeader />
      <SearchBar />
      <PromoSection />
      <CoffeeSelection
        activeCoffee={activeCoffee}
        setActiveCoffee={setActiveCoffee}
      />
      <CoffeeList coffees={coffees} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default Main;

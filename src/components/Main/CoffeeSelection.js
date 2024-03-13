import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const coffees = [
  "Cappuccino",
  "Espresso",
  "Americano",
  "Mocha",
  "Macchiato",
  "Latte",
];

const CoffeeSelection = ({ activeCoffee, setActiveCoffee }) => (
  <View style={styles.scrollContainer}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {coffees.map((coffee, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.coffeeButton,
            activeCoffee === coffee
              ? styles.activeCoffeeButton
              : styles.inactiveCoffeeButton,
          ]}
          onPress={() => setActiveCoffee(coffee)}
        >
          <Text
            style={[
              styles.coffeeButtonText,
              activeCoffee !== coffee && styles.inactiveCoffeeButtonText, // Apply dark color for inactive buttons
            ]}
          >
            {coffee}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  coffeeButton: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 14,
  },
  inactiveCoffeeButton: {
    backgroundColor: "#FFFFFF",
  },
  activeCoffeeButton: {
    backgroundColor: "#C67C4E",
  },
  coffeeButtonText: {
    fontFamily: "Sora-SemiBold",
    fontSize: 14,
    color: "#FFFFFF",
  },
  inactiveCoffeeButtonText: {
    color: "#2F4B4E",
  },
});

export default CoffeeSelection;

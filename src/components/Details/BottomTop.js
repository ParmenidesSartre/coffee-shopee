import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { theme } from "../../theme/theme";
import { useCoffee } from "../../context/CoffeeContext";

const BottomTop = () => {
  const { selectedCoffee } = useCoffee();
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Description</Text>
        <Text style={styles.description}>
          {selectedCoffee.description}{" "}
          <Text style={styles.readMore}>Read More</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    alignItems: "center",
    borderRadius: 2,
    borderColor: theme.colors.text,
    marginBottom: 24,
    width: "100%",
    paddingHorizontal: theme.spacing.edgeMargin,
  },
  container: {
    width: "100%",
  },
  header: {
    fontSize: theme.fontSize.header,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.text,
  },
  description: {
    marginTop: 6,
    fontSize: theme.fontSize.text,
    fontFamily: theme.fonts.regular,
    color: theme.colors.secondary,
    textAlign: "justify",
    lineHeight: Platform.select({
      ios: theme.lineHeight.ios,
      android: theme.lineHeight.android,
    }),
  },
  readMore: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.semiBold,
  },
});

export default BottomTop;

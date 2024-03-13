import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import coffeeImage from "../../../assets/img/coffee2.png";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { useCoffee } from "../../context/CoffeeContext";

const TopSection = () => {
  const navigation = useNavigation();
  const { selectedCoffee } = useCoffee();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <Ionicons name="heart" size={24} color="red" style={styles.iconEnd} />
        </View>
        <Image
          source={
            selectedCoffee.imageUrl
              ? { uri: selectedCoffee.imageUrl }
              : coffeeImage
          }
          style={styles.image}
        />
        <Text style={styles.coffeeTitle}>{selectedCoffee.name}</Text>
        <Text style={styles.coffeeSubtitle}>{selectedCoffee.subText}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Ionicons name="star" size={16} color="#FBBE21" />
            <Text style={styles.ratingValue}>{selectedCoffee.rating}</Text>
          </View>
          <Text style={styles.reviews}>({selectedCoffee.reviews})</Text>
          <View style={styles.iconsRight}>
            <Ionicons name="cart" size={24} color={theme.colors.primary} />
            <Ionicons
              name="heart"
              size={24}
              color={theme.colors.primary}
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

export default TopSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    width: theme.spacing.screenWidth - 2 * theme.spacing.edgeMargin,
    marginTop: theme.spacing.topPadding,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Sora-SemiBold",
    color: "#2F2D2C",
  },
  iconEnd: {
    textAlign: "right",
  },
  image: {
    width: theme.spacing.screenWidth - 2 * theme.spacing.edgeMargin,
    height: (theme.spacing.screenWidth - 2 * theme.spacing.edgeMargin) * 0.72,
    borderRadius: 16,
  },
  coffeeTitle: {
    marginTop: 6,
    fontSize: 20,
    fontFamily: "Sora-SemiBold",
    color: "#2F2D2C",
  },
  coffeeSubtitle: {
    marginTop: 8,
    fontSize: 12,
    color: "#9B9B9B",
    fontFamily: "Sora-Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingValue: {
    marginLeft: 4,
    fontSize: 16,
    color: "#2F2D2C",
    fontFamily: "Sora-SemiBold",
  },
  reviews: {
    fontSize: 12,
    color: "#9B9B9B",
    fontFamily: "Sora-Regular",
    marginLeft: 8,
  },
  iconsRight: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  divider: {
    height: 2,
    backgroundColor: "#EAEAEA",
    marginTop: 24,
    marginBottom: 24,
  },
});

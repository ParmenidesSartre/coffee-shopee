import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import promo from "../../../assets/img/promo.png";

const { height } = Dimensions.get("window");

const PromoSection = () => (
  <View style={styles.promoContainer}>
    <Image source={promo} style={styles.promoImage} />
  </View>
);

const styles = StyleSheet.create({
  promoContainer: {
    width: "90%",
    height: height * 0.25,
    alignSelf: "center",
    borderRadius: 50,
    overflow: "hidden",
    marginTop: 120,
  },
  promoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default PromoSection;

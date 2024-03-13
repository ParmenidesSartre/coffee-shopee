import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import model from "../../../assets/img/model.jpg";

const { width, height } = Dimensions.get("window");

const GradientHeader = () => (
  <LinearGradient
    colors={["#131313", "#2A2A2A"]}
    style={styles.gradient}
    start={{ x: 1, y: 0 }}
    end={{ x: 0, y: 1 }}
  >
    <View style={styles.gradientContent}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Location</Text>
        <Text style={styles.locationText}>Tanjung Malim, Perak</Text>
      </View>
      <Image source={model} style={styles.image} />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.35,
    paddingHorizontal: 20,
  },
  gradientContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top : height * 0.08
  },
  locationTitle: {
    color: "#B7B7B7",
    fontSize: 16,
    fontFamily: "Sora-SemiBold",
    paddingBottom: 5,
  },
  locationText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Sora-Regular",
  },
  image: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 14,
  },
});

export default GradientHeader;

import React from "react";
import { StatusBar, Image, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./EntryStyles";

import coffeeImg from "../../assets/img/coffeeImg.jpg";

const Entry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="auto" />
      <Image source={coffeeImg} style={styles.image} />
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.gradient}
      />
      <View style={styles.textContainer}>
        <View style={styles.mainTextGroup}>
          <Text style={styles.textStyle}>Coffee so good,</Text>
          <Text style={styles.textStyle}>your taste buds</Text>
          <Text style={styles.textStyle}>will love it</Text>
        </View>
        <View style={styles.subtitleTextGroup}>
          <Text style={styles.textStyleSubtitle}>
            The best grain, the finest roast, the
          </Text>
          <Text style={styles.textStyleSubtitle}>powerful flavor.</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Entry;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useCoffee } from "../../context/CoffeeContext";

const { width } = Dimensions.get("window");
const cardWidth = width / 2 - 10;
const cardHeight = cardWidth * 1.2;

const CoffeeCard = ({
  name,
  subText,
  imageUrl,
  description,
  rating,
  reviews,
  price,
}) => {
  const { setSelectedCoffee } = useCoffee();
  const navigation = useNavigation();

  const onImagePress = () => {
    setSelectedCoffee({
      name,
      subText,
      imageUrl,
      description,
      rating,
      reviews,
      price,
    });
    navigation.navigate("Detail");
  };

  return (
    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onImagePress} style={styles.imageTouchable}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subText}>{subText}</Text>
        <View style={styles.priceAndAddContainer}>
          <Text style={styles.price}>$ {price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: "hidden",
    width: "90%",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  imageTouchable: {
    width: "90%",
    height: "60%",
    borderRadius: 14,
    overflow: "hidden", // Ensure the touchable area matches the image area
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2F2D2C",
  },
  subText: {
    marginTop: 6,
    fontSize: 14,
    color: "#9B9B9B",
  },
  priceAndAddContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    width: "90%",
  },
  price: {
    fontSize: 18,
    color: "#2F2D2C",
    fontFamily: "Sora-SemiBold",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: "#C67C4E",
    borderRadius: 10,
  },
});

export default CoffeeCard;

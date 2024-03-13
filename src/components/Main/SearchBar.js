import React from "react";
import { View, TextInput, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import filter from "../../../assets/img/filter.png";

const { width, height } = Dimensions.get("window");

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={24} color="#B7B7B7" style={styles.icon} />
    <TextInput
      placeholder="Search coffee"
      placeholderTextColor="#989898"
      style={styles.input}
    />
    <Image source={filter} style={styles.filter} />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#313131",
    borderRadius: 14,
    alignSelf: "center",
    marginVertical: 20,
    width: "90%",
    top : height * 0.15,
  },
  input: {
    color: "#FFF",
    fontFamily: "Sora-Regular",
    height: 50,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    margin: 5,
  },
  filter: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: 10,
  },
});

export default SearchBar;

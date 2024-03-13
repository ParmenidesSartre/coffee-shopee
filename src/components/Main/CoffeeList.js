import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = ({ coffees }) => (
  <FlatList
    data={coffees}
    renderItem={({ item }) => (
      <CoffeeCard {...item} />
    )}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    numColumns={2} // Sets the number of columns
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 5,
    width : '90%',
  },
});

export default CoffeeList;

import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useCoffee } from "../../context/CoffeeContext";

const { width: screenWidth } = Dimensions.get('window');
const edgeMargin = screenWidth * (30 / 375);

const BottomBottom = () => {
    const { selectedCoffee } = useCoffee();
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <View style={styles.bottomRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.subText}>Price</Text>
            <Text style={styles.price}>$ {selectedCoffee.price}</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    alignItems: 'center',
    borderRadius: 2,
    borderColor: 'black',
    marginBottom: 24,
    width: '100%',
    paddingHorizontal: edgeMargin,
  },
  container: {
    width: '100%',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    flex: 1, // Allows the price container to take up 1/3 of the space
  },
  subText: {
    fontSize: 14,
    color: '#9B9B9B',
    fontFamily: 'Sora-Regular',
  },
  price: {
    fontSize: 18,
    color: '#C67C4E',
    fontFamily: 'Sora-SemiBold',
  },
  addButton: {
    flex: 2, // Allows the button to take up 2/3 of the space
    backgroundColor: '#C67C4E',
    paddingVertical: 21,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10, // Adjust padding as needed for text to fit nicely
  },
  addText: {
    color: '#FFF',
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
});

export default BottomBottom;

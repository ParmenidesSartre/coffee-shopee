import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get("window");
const edgeMargin = screenWidth * (30 / 375);
const buttonSpacing = 10;
const totalSpacing = buttonSpacing * 2;
const buttonWidth = (screenWidth - (2 * edgeMargin) - totalSpacing) / 3;

const BottomMid = () => {
  // State to keep track of which button is pressed
  const [pressedButton, setPressedButton] = useState(null);

  // Function to handle button press
  const handlePress = (size) => {
    setPressedButton(size);
  };

  // Helper to determine button style
  const getButtonStyle = (size) => {
    return [
      styles.button,
      pressedButton === size && styles.buttonPressed,
    ];
  };

  // Helper to determine text style
  const getTextStyle = (size) => {
    return [
      styles.buttonText,
      pressedButton === size && styles.textPressed,
    ];
  };

  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Size</Text>
        <View style={styles.buttonContainer}>
          {['S', 'M', 'L'].map((size) => (
            <TouchableOpacity
              key={size}
              style={getButtonStyle(size)}
              onPress={() => handlePress(size)}
            >
              <Text style={getTextStyle(size)}>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BottomMid;

const styles = StyleSheet.create({
  fullContainer: {
    alignItems: "center",
    borderRadius: 2,
    borderColor: "black",
    marginBottom: 24,
    width: "100%",
    paddingHorizontal: edgeMargin,
  },
  container: {
    width: "100%",
  },
  header: {
    fontSize: 16,
    fontFamily: "Sora-SemiBold",
    color: "#000",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 12,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    width: buttonWidth,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#FFF5EE',
    borderColor: '#C67C4E',
  },
  buttonText: {
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    color: '#2F2D2C',
  },
  textPressed: {
    color: '#C67C4E',
  },
});

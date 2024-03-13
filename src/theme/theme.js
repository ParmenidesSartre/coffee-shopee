import { Dimensions, Platform } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const theme = {
  colors: {
    primary: "#C67C4E",
    secondary: "#9B9B9B",
    text: "#000",
    background: "#FFF",
  },
  dimensions: {
    cardWidth: width / 2 - 10,
    cardHeight: (width / 2 - 10) * 1.2,
    addButtonSize: 32,
  },
  spacing: {
    edgeMargin: screenWidth * (30 / 375),
    topPadding: screenHeight * (60 / 812),
    screenWidth : Dimensions.get("window").width,
  },
  fonts: {
    regular: "Sora-Regular",
    semiBold: "Sora-SemiBold",
  },
  fontSize: {
    header: 16,
    text: 14,
  },
  lineHeight: {
    ios: 20,
    android: 24,
  },
};

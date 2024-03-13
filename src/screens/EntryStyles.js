import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: height / 1.4,
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "95%",
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    bottom: height * 0.15,
  },
  mainTextGroup: {
    marginBottom: "2%",
  },
  subtitleTextGroup: {
    // Additional styles if necessary
  },
  textStyle: {
    color: "#FFF",
    fontSize: 34,
    fontFamily: "Sora-SemiBold",
    textAlign: "center",
  },
  textStyleSubtitle: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Sora-Regular",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#C67C4E",
    width: "80%",
    padding: 21,
    borderRadius: 16,
    position: "absolute",
    bottom: "5%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Sora-SemiBold",
  },
});

export { styles };
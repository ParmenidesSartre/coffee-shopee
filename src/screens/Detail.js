import { View, StyleSheet } from "react-native";
import TopSection from "../components/Details/TopSection";
import BottomTop from "../components/Details/BottomTop";
import BottomMid from "../components/Details/BottomMid";
import BottomBottom from "../components/Details/BottomBottom";

export default function Detail({ navigation}) {
  return (
    <View style={styles.container}>
      <TopSection navigation={navigation}/>
      <View style={styles.bottomSection}>
        <BottomTop />
        <BottomMid />
        <BottomBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSection: {
    flex: 0.7,
  },
});

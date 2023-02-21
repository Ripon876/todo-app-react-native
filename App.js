import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  console.log("app running");
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    // alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

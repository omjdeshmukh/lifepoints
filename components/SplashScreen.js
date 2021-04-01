import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.logo} source={require("../assets/pic1.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00001F",
    top: 0,
    left: 0,
    width: 360,
    height: 640,
    opacity: 1,
    marginLeft: 50,
  },

  circle: {
    top: 181,
    left: 41,
    width: 278,
    height: 278,
    borderRadius: 139,
    borderWidth: 2,
    borderColor: "#24244B",
    opacity: 1,
  },

  logo: {
    top: 40,
    left: 36,
    width: 194,
    height: 155,
    opacity: 1,
  },
});

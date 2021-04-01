import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={{ width: 90, height: 60 }}>
        <Image source={require("../assets/grid.svg")} />
      </View>
      <View style={{ width: 90, height: 60 }}>
        <Image source={require("../assets/tech.svg")} />
      </View>
      <View style={{ width: 90, height: 60 }}>
        <Image source={require("../assets/men.png")} />
      </View>
      <View style={{ width: 90, height: 60 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#020222",
    width: 360,
    height: 60,
    // opacity: 1,
    marginLeft: 50,
  },
});

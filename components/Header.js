import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={["#534AA200", "#534AA2F4", "#534AA2"]}
        style={styles.linearGradient}
        useAngle={true}
        angle={65}
        angleCenter={{ x: 1.0, y: 0.5 }}
      >
        <View
          style={{
            height: 51,
            width: 51,
            borderRadius: 26,
            backgroundColor: "red",
            top: 27.5,
            left: 20,
          }}
        >
          <Image source={require("../assets/pic1.png")} />
        </View>

        <View style={{ top: 45, left: 35 }}>
          <Text style={{ fontSize: 9, color: "#FFFFFF" }}>DavidW</Text>
        </View>

        <View style={{ top: 38, left: 175 }}>
          <Text style={{ fontSize: 6.5, color: "#FFFFFF", marginBottom: 5 }}>
            Points
          </Text>
          <Text style={{ fontSize: 12, color: "#FFFFFF", marginLeft: 2 }}>
            40
          </Text>
        </View>

        <View style={styles.circle}>
          <Image style={styles.logo} source={require("../assets/pic1.png")} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00001F",
    top: 0,
    left: 0,
    width: 360,
    height: 93,
    opacity: 1,
    marginLeft: 50,
  },

  linearGradient: {
    display: "flex",
    flexDirection: "row",
    height: 93,
  },

  circle: {
    top: 27.5,
    left: 189,
    width: 51,
    height: 51,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: "#181835",
    borderTopColor: "#36C7FF",
    borderEndColor: "#36C7FF",
    opacity: 1,
  },

  logo: {
    top: 14,
    left: 16,
    width: 18,
    height: 18,
    opacity: 1,
  },
});

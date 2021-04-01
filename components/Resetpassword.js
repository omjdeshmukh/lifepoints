import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.logo} source={require("../assets/pic1.png")} />
      </View>
      <View
        style={{
          display: "flex",
          height: 20,
          width: 300,
          fontSize: 15,
          top: 80,
          left: 40,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: "#fff",
            marginLeft: 20,
          }}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={{ height: 16, width: 30, marginRight: 10 }}
          />
          Reset password
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "#DFDFDF",
            marginTop: 22,
            marginLeft: 20,
          }}
        >
          E-mail address verified! Set a new password
        </Text>

        <View
          style={{
            marginLeft: 10,
            marginTop: 80,
            borderBottomWidth: 2,
            borderBottomColor: "#181835",
            width: 260,
          }}
        >
          <Text style={{ color: "#A7A7A7", fontSize: 8 }}>NEW PASSWORD</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <TextInput
              secureTextEntry={true}
              style={{
                fontSize: 12,
                marginTop: 2,
                paddingBottom: 12,
                paddingTop: 6,
                color: "#fff",
                opacity: 1,
                width: 240,
              }}
            />
            <Image
              style={{ height: 12, width: 15, color: "#fff" }}
              source={require("../assets/check.png")}
            />
          </View>
        </View>

        <View
          style={{
            marginLeft: 10,
            marginTop: 22,
            borderBottomWidth: 2,
            borderBottomColor: "#181835",
            width: 260,
          }}
        >
          <Text style={{ color: "#A7A7A7", fontSize: 8 }}>
            RE-ENTER PASSWORD
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <TextInput
              secureTextEntry={true}
              style={{
                fontSize: 12,
                marginTop: 2,
                paddingBottom: 12,
                paddingTop: 6,
                color: "#fff",
                opacity: 1,
                width: 240,
              }}
            />
            <Image
              style={{ height: 12, width: 15, color: "#ffffff" }}
              source={require("../assets/cross.png")}
            />
          </View>
        </View>

        <LinearGradient
          colors={["rgba(0,0,0,0.8)"]}
          style={{
            backgroundColor: "#5098F2",
            height: 40,
            width: 260,
            marginTop: 90,
            marginLeft: 12,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 12 }}>RESET PASSWORD</Text>
        </LinearGradient>
        <Text
          style={{ color: "#fff", fontSize: 12, marginTop: 30, marginLeft: 70 }}
        >
          Have an account? Log in
        </Text>
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
    top: 49,
    left: 127,
    width: 106,
    height: 106,
    borderRadius: 53,
    borderWidth: 2,
    borderColor: "#24244B",
    opacity: 1,
  },

  logo: {
    top: 20,
    left: 20,
    width: 60,
    height: 60,
    opacity: 1,
  },

  pincode: {
    width: 57,
    color: "#FFFFFF",
    borderBottomColor: "#181835",
    borderBottomWidth: 2,
    fontSize: 26,
    marginRight: 10,
    textAlign: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
});

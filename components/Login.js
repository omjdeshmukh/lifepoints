import React from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image style={styles.logo} source={require("../assets/pic1.png")} />
      </View>
      <View style={styles.form}>
        <Text style={styles.formhead}>EMAIL</Text>
        <TextInput style={styles.forminput} />
        <Text style={styles.formhead}>PASSWORD</Text>
        <TextInput style={styles.forminput} secureTextEntry={true} />
        <Text style={styles.formheadb}>Forgot password</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonstyle}>LOG IN</Text>
      </View>
      <View style={styles.formbottom}>
        <Text style={styles.formbottomt}>Don't have account? Create one</Text>
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
    top: 62,
    left: 86,
    width: 187,
    height: 187,
    borderRadius: 139,
    borderWidth: 2,
    borderColor: "#24244B",
    opacity: 1,
  },

  logo: {
    top: 40,
    left: 36,
    width: 114,
    height: 85,
    opacity: 1,
  },

  form: {
    top: 100,
    left: 50,
    width: 114,
    height: 85,
  },

  formhead: {
    width: 200,
    height: 50,
    color: "#A7A7A7",
    paddingBottom: 10,
    fontSize: 8,
  },

  formheadb: {
    width: 200,
    height: 50,
    color: "#DFDFDF",
    paddingBottom: 10,
    fontSize: 10,
  },

  forminput: {
    borderBottomColor: "#181835",
    color: "#ffffff",
    borderBottomWidth: 2,
    width: 260,
    height: 50,
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 12,
  },

  button: {
    top: 240,
    left: 50,
  },

  buttonstyle: {
    borderRadius: 20,
    fontSize: 12,
    color: "#fff",
    backgroundColor: "#5098F2",
    width: 260,
    height: 40,
    textAlign: "center",
    paddingTop: 10,
  },

  formbottom: {
    width: 200,
    height: 50,
    top: 270,
    left: 88,
  },

  formbottomt: {
    width: 200,
    height: 50,
    color: "#DFDFDF",
    fontSize: 12,
  },
});

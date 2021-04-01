import React from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image
          style={styles.logo}
          source={require("../assets/interface.svg")}
        />
      </View>
      <View style={styles.gendercontainer}>
        <View>
          <Text style={{ color: "#A7A7A7", fontSize: 8 }}>GENDER</Text>
        </View>
        <View style={styles.genders}>
          <LinearGradient colors={["rgba(0,0,0,0.8)"]} style={styles.gender}>
            <Image
              style={styles.genderlogo}
              source={require("../assets/men.png")}
            />
          </LinearGradient>

          <LinearGradient colors={["rgba(0,0,0,0.8)"]} style={styles.gender}>
            <Image
              style={styles.genderlogo}
              source={require("../assets/ff.png")}
            />
          </LinearGradient>

          <LinearGradient colors={["rgba(0,0,0,0.8)"]} style={styles.gender}>
            <Image
              style={styles.genderlogo}
              source={require("../assets/f.png")}
            />
          </LinearGradient>
          <Image
            style={{ height: 12, width: 15, top: 13, left: 10, color: "#fff" }}
            source={require("../assets/check.png")}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 9,
            marginTop: 8,
          }}
        >
          <Text style={{ color: "#A7A7A7", fontSize: 8, marginRight: 40 }}>
            MALE
          </Text>
          <Text style={{ color: "#A7A7A7", fontSize: 8, marginRight: 38 }}>
            FEMALE
          </Text>
          <Text style={{ color: "#A7A7A7", fontSize: 8, marginRight: 20 }}>
            OTHER
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={styles.formhead}>USERNAME</Text>
        <Image
          style={{ height: 12, width: 15, top: 13, left: 250, color: "#fff" }}
          source={require("../assets/check.png")}
        />
        <TextInput style={styles.forminput} />
        <Text style={styles.formhead}>EMAIL</Text>
        <Image
          style={{ height: 12, width: 15, top: 13, left: 250, color: "#fff" }}
          source={require("../assets/check.png")}
        />
        <TextInput style={styles.forminput} />
        <Text style={styles.formhead}>PASSWORD</Text>
        <Image
          style={{ height: 12, width: 15, top: 13, left: 250, color: "#fff" }}
          source={require("../assets/check.png")}
        />
        <TextInput style={styles.forminput} />
        <Text style={styles.formhead}>CONFIRM PASSWORD</Text>
        <Image
          style={{ height: 12, width: 15, top: 13, left: 250, color: "#fff" }}
          source={require("../assets/check.png")}
        />
        <TextInput style={styles.forminput} secureTextEntry={true} />
      </View>
      <LinearGradient colors={["rgba(0,0,0,0.8)"]} style={styles.button}>
        <Text style={styles.buttonstyle}>CREATE ACCOUNT</Text>
      </LinearGradient>
      <View style={styles.formbottom}>
        <Text style={styles.formbottomt}>Have an account? Log in</Text>
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
    top: 59,
    left: 141,
    width: 73,
    height: 73,
    borderRadius: 139,
    borderWidth: 2,
    borderColor: "#24244B",
    opacity: 1,
  },

  logo: {
    top: 29,
    left: 28,
    width: 15.66,
    height: 12.32,
    opacity: 1,
  },

  form: {
    marginTop: 10,
    top: 100,
    left: 50,
  },

  formhead: {
    width: 200,
    color: "#A7A7A7",
    fontSize: 8,
  },

  formheadb: {
    width: 200,
    color: "#DFDFDF",

    fontSize: 10,
  },

  forminput: {
    borderBottomColor: "#181835",
    color: "#ffffff",
    borderBottomWidth: 2,
    width: 260,
    paddingBottom: 10,
    marginBottom: 15,
    fontSize: 12,
  },

  button: {
    top: 120,
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
    width: 20,
    height: 50,
    top: 130,
    left: 98,
  },

  formbottomt: {
    width: 200,
    height: 50,
    color: "#DFDFDF",
    fontSize: 12,
  },

  gendercontainer: {
    top: 80,
    left: 98,
  },

  gender: {
    height: 39,
    width: 39,
    backgroundColor: "#116AD8",
    marginRight: 25,
    borderRadius: 20,
  },

  genders: {
    display: "flex",
    flexDirection: "row",
    width: 200,
    height: 39,
    marginTop: 8,
  },

  genderlogo: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  genderlogo: {
    top: 6,
    left: 9,
    height: 30,
    width: 20,
    borderRadius: 20,
  },
});

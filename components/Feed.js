import React from "react";
import { View, TextInput, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";

import img1 from '../assets/pic1.png'

export default function Feed() {
  return (
    <View >
      <Carousel
        ref={(c) => {
        _carousel = c;
        }}
        data={{ img1 }}
        renderItem={img1}
        sliderWidth={80}
        itemWidth={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00001F",
    top: 0,
    left: 0,
    // width: 360,
    // height: 640,
    // opacity: 1,
    marginLeft: 50,
  },


});

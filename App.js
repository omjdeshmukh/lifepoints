import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SplashScreen from "./components/SplashScreen";
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Barcode from './components/Barcode';
// import Brandcard from './components/Brandcard';
// import Brandpage from './components/Brandpage';
// import Buyinginfo from './components/Buyinginfo';
// import Editprofile from './components/Editprofile';
// import Feed from './components/Feed';
// import Footer from './components/Footer';
// import Carouselx from './components/Carousel';
// import Forgotpassword from './components/Forgotpassword';
// import Header from './components/Header';
// import Lastpage from './components/Lastpage';
// import Popup from './components/Popup';
// import Productinfo from './components/Productinfo';
// import Profile from './components/Profile';
// import Ranking from './components/Ranking';
// import Resetpassword from './components/Resetpassword';
// import Verify from './components/Verify';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Signup" component={Signup} /> */}
        {/* <Stack.Screen name="Verify" component={Verify} /> */}
        {/* <Stack.Screen name="Forgotpassword" component={Forgotpassword} /> */}
        {/* <Stack.Screen name="Resetpassword" component={Resetpassword} /> */}
        {/* <Stack.Screen name="Header" component={Header} /> */}
        {/* <Stack.Screen name="Feed" component={Feed} /> */}
        {/* <Stack.Screen name="Carouselx" component={Carouselx} /> */}
        {/* <Stack.Screen name="Footer" component={Footer} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


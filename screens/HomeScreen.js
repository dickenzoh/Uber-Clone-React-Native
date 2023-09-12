import React from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";
import logo from "../images/logo.png";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView styles={tw`bg-white h-full`}>
      <View style={tw`pt-5`}>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={require("../images/logo.png")}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo,
});

export default HomeScreen;

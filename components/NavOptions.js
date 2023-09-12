import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const NavOptions = () => {
  const data = [
    {
      id: 0,
      name: "Ride",
      screen: "RideScreen",
    },
    {
      id: 1,
      name: "Package",
      screen: "PackageScreen",
    },
    {
      id: 2,
      name: "Reserve",
      screen: "ReserveScreen",
    },
    {
      id: 3,
      name: "Travel",
      screen: "TravelScreen",
    },
  ];

  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 50, height: 50, resizeMode: "contain" }}
              source={require("../images/logo.png")}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});

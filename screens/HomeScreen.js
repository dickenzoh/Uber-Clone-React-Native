import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import logo from "../images/logo.png";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView styles={tw`bg-white h-full`}>
      <View style={tw`pt-5`}>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={require("../images/logo.png")}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          // currentLocation={true}
          // currentLocationLabel="Current location"
          fetchDetails={true}
          renderDescription={(row) => row.description}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          returnKeyType="search"
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
            types: "(cities)",
          }}
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

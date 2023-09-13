import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from "../slices/navSlice";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, dickenzoh</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
              types: "(cities)",
            }}
            renderDescription={(row) => row.description}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            returnKeyType="search"
            minLength={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#00000F",
    borderRadius: 0,
    fontSize: 10,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

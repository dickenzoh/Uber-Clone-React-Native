import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_MAPS_APIKEY } from "@env";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    // Zoom & fit to markers
    if (origin && destination) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { left: 50, right: 50, bottom: 50, top: 50 },
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
        );
        const data = await response.json();

        if (
          data.status === "OK" &&
          data.rows.length > 0 &&
          data.rows[0].elements.length > 0
        ) {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        }
      } catch (error) {
        console.error("Error fetching travel time:", error);
      }
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY, dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});

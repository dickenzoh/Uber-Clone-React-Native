import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./store";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import PackageScreen from "./screens/PackageScreen";
import ReserveScreen from "./screens/ReserveScreen";
import RideScreen from "./screens/RideScreen";
import TravelScreen from "./screens/TravelScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PackageScreen"
                component={PackageScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ReserveScreen"
                component={ReserveScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RideScreen"
                component={RideScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TravelScreen"
                component={TravelScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
      {/* <View>
        <HomeScreen />
      </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

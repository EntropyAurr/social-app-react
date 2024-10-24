import { StyleSheet, Text, View } from "react-native";
import { SplashScreen, Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),

    "Inter_18pt-Black": require("../assets/fonts/Inter_18pt-Black.ttf"),
    "Inter_18pt-Bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter_18pt-ExtraBold": require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
    "Inter_18pt-ExtraLight": require("../assets/fonts/Inter_18pt-ExtraLight.ttf"),
    "Inter_18pt-Thin": require("../assets/fonts/Inter_18pt-Thin.ttf"),
    "Inter_18pt-SemiBold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
    "Inter_18pt-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter_18pt-Medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
    "Inter_18pt-Light": require("../assets/fonts/Inter_18pt-Light.ttf"),

    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),

    "Oxanium-Bold": require("../assets/fonts/Oxanium-Bold.ttf"),
    "Oxanium-ExtraBold": require("../assets/fonts/Oxanium-ExtraBold.ttf"),
    "Oxanium-ExtraLight": require("../assets/fonts/Oxanium-ExtraLight.ttf"),
    "Oxanium-SemiBold": require("../assets/fonts/Oxanium-SemiBold.ttf"),
    "Oxanium-Regular": require("../assets/fonts/Oxanium-Regular.ttf"),
    "Oxanium-Medium": require("../assets/fonts/Oxanium-Medium.ttf"),
    "Oxanium-Light": require("../assets/fonts/Oxanium-Light.ttf"),

    "BalooBhai2-SemiBold": require("../assets/fonts/BalooBhai2-SemiBold.ttf"),
    "BalooBhai2-Bold": require("../assets/fonts/BalooBhai2-Bold.ttf"),
    "BalooBhai2-Regular": require("../assets/fonts/BalooBhai2-Regular.ttf"),
    "BalooBhai2-Medium": require("../assets/fonts/BalooBhai2-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();

    if (!fontsLoaded && !error) return {};
  }, [fontsLoaded, error]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayout;

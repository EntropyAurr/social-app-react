import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShow: false }} />
        <Stack.Screen name="sign-up" options={{ headerShow: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;

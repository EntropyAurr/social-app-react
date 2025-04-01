import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Text, Image, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLogged } = useGlobalContext();

  if (!isLoading && isLogged) return <Redirect href="/home" />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-full justify-start items-center h-full px-4">
            <Image
              source={images.logoCoffee}
              resizeMode="contain"
              className="w-[250px] h-[170px]"
            />

            <Image
              source={images.coffeeArt1}
              resizeMode="cover"
              className="max-w-[380px] w-full h-[300px] rounded-lg"
            />

            <View className="relative mt-5">
              <Text className="text-2xl text-white font-uBold text-center ">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aurora</Text>
              </Text>

              <Image
                source={images.path}
                resizeMode="contain"
                className="w-[187px] h-[18px] absolute -bottom-3 -right-12"
              />
            </View>

            <Text className="text-sm font-iRegular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aurora
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>

        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

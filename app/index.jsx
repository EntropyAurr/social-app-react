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

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
        >
          <View className="w-full justify-center items-center h-full px-4">
            <Image
              source={images.logoCoffee}
              resizeMode="contain"
              className="w-[100px] h-[100px] mb-5"
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

            <Text className="text-white text-center mt-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              et totam deserunt voluptatum cumque mollitia! Quas vero possimus
              expedita eligendi? Quo est repellat, tenetur perferendis ullam,
              facere quis consectetur culpa sequi dolore asperiores inventore
              sed maiores odit, molestias animi vitae voluptatibus. Sequi quidem
              debitis officia hic fugiat nisi, possimus eaque quaerat ea quos
              natus doloremque maiores saepe consectetur inventore qui iste
              temporibus! Cum, voluptates enim officiis delectus sit eaque rerum
              error harum reprehenderit, natus est cumque iste.
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

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-oBold text-emerald-700">Aurora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-orange-700 text-2xl">
        Go to Home
      </Link>
    </View>
  );
}

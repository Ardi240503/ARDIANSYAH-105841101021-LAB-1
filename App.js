import React from "react";
import { SafeAreaView, View, Image } from 'react-native';
import CustomButton from './CustomButton'; // Ensure this path is correct
import Teks from './text'; // Ensure this path is correct

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Teks />
        <Image source={require('./assets/logo.png')} style={{ width: 300, height: 300, marginVertical: 90 }} />
        <CustomButton/>
      </View>
    </SafeAreaView>
  );
}

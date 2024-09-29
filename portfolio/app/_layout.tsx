import React from "react";
import { Stack } from "expo-router";
import Index from "@/app/index";
import { ScrollView } from "react-native";
import tw, { useDeviceContext } from "twrnc";


export default function RootLayout() {
  useDeviceContext(tw);
  return (
    
    <ScrollView style={tw`flex-1 min-w-screen bg-red-900`}>
      <Index />
    </ScrollView>
        // <Stack.Screen name="index" />
  );
}

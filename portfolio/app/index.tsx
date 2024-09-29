import React from "react";
import { View} from "react-native";
import tw, { useDeviceContext } from "twrnc";
import Sect from "@/components/section";
import Search  from "@/components/Search";


export default function Index() {
  useDeviceContext(tw);
  return (
    <View style={tw`flex-1 md:w-4/6 w-full justify-center px-5 md:mx-auto items-center mt-25`}>
      <Search/>
      <Sect/>
    </View>
  );
}

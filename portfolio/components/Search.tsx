import React, { useState } from "react";
import { View, TextInput, Pressable, Linking } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import AntDesign from '@expo/vector-icons/AntDesign';


const Search = () =>{
    const [inputValue, setInputValue] = useState('');
    const [focus, setFocus] = useState({});

    const checkkey = (e) => { try {if (e.key == 'Enter' && inputValue) {handlpress();}} catch (error) {}};
    
    const handlpress = () => {
        Linking.openURL(`https://www.google.com/search?q=${inputValue}`);
        setInputValue('');
    };

    useDeviceContext(tw);

    return (
        <View style={[tw`flex flex-row md:w-4/5 w-full border border-gray-400 rounded rounded-[25px] p-2 bg-white`, focus]} >
            <TextInput
                style={[tw`p-2 grow h-10 text-2xl border-0`, {borderWidth: 0, outline: 'none'}]}
                placeholder="Search google"
                onChangeText={(text) => setInputValue(text)}
                value={inputValue}
                onKeyPress={checkkey}
                onFocus={() => {setFocus({borderWidth: 1, outline: 'solid'});}}
                onBlur={() => {setFocus({});}}
                placeholderTextColor="#bcbcbc"
            />
            <Pressable
                style={tw`flex bg-blue-500 w-12 h-12 rounded-full items-center justify-center`}
                onPress={() => handlpress()}>
                <AntDesign name="search1" size={20} color="white" />
            </Pressable>
        </View>
    );
};

export default Search;

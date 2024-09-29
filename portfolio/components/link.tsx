import React from 'react';
import { Pressable, Text, View, Linking } from 'react-native';
import tw from 'twrnc';

interface LinkProps {
    link: string;
    style: string;
    name: string;
    children: React.ReactNode;
  }
  
const Link: React.FC<LinkProps> = ({ link, style, name, children,}) => {  
  const handlepress = () => {
    Linking.openURL(link);
  };
  
  return (
    <Pressable style={[tw`${style}`]}onPress={handlepress}>
      {children}
      <Text style={tw`text-white text-xl`}>{name}</Text>
    </Pressable>
    );
  };


export default Link;
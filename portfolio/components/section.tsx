import React, { useState } from 'react';
import { Text, View, Pressable, Animated } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import useFadeAnimation from '@/components/animation';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Link from '@/components/link';

const Sect = () => {
    const [active, setActive] = useState(true);
    const {fadeAnim : fadeAnimone, fadeIn : fadeInone, fadeOut: fadeOutone} = useFadeAnimation(1, 1000);
    const {fadeAnim : fadeAnimtwo, fadeIn : fadeIntwo, fadeOut: fadeOuttwo} = useFadeAnimation(0, 1000);
  
    const toggle = () => {
      if(active){
        fadeOutone();
        fadeIntwo();
      }else{
        fadeOuttwo();
        fadeInone();
      }
    };
    useDeviceContext(tw);
  
    const linksstyle = `flex items-center  font-bold text-center`;
    const iconstyle = `border p-5 rounded-full mb-1 bg-blue-500 hover:cursor-pointer`;
    const headingstyle = `border border-b-0 w-1/2 text-center p-5 rounded-t-[15px]`;
    const linkcontainer = `flex flex-wrap flex-row  border w-full bg-cyan-600 rounded-b-[15px] justify-around gap-y-5 gap-x-8 md:gap-x-15 md:gap-y-25 p-10 `;
    
    
    return (
      <View style={tw`flex justify-center mt-20 items-center w-full`}>
        <View style ={tw`flex flex-row my-auto w-full`}>
          <Pressable 
          onPress={() => { if(!active){setActive(true); toggle();}}}
          style={tw.style(`${active ? `bg-red-600` : ` bg-cyan-600`} ${headingstyle}`)}>
            <Text>Work</Text>
          </Pressable>
          <Pressable 
          onPress={() => {if(active){setActive(false); toggle();}}}
          style={tw.style(` ${!active ? `bg-red-600` : ` bg-cyan-600`} ${headingstyle}`)}>
            <Text>personal</Text> 
          </Pressable>
        </View>
        { active && <Animated.View style={[tw`${linkcontainer}`, {opacity: fadeAnimone}]}>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Duo" style={linksstyle}>
            <Feather name="hash" size={35} color="white" style={tw`${iconstyle}`}/>
          </Link>
        </Animated.View>}
        { !active && <Animated.View style={[tw`${linkcontainer}`, {opacity: fadeAnimtwo}]}>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
          <Link link="https://duo.nl/" name="Instagram" style={linksstyle}>
            <AntDesign name="instagram" size={30} color="white" style={tw`${iconstyle}`}/>
          </Link>
        </Animated.View>}
      </View>
    );
  };

export default Sect;
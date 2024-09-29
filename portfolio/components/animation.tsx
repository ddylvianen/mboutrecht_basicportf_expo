import React , {useState} from "react";
import { Animated } from 'react-native';

const useFadeAnimation = (initialValue = 0, duration = 500) => {
    const [fadeAnim] = useState(new Animated.Value(initialValue));

    const fadeIn = () => {
        fadeAnim.setValue(0); // Reset the animation
        Animated.timing(fadeAnim, {

            toValue: 1, // Fade in to fully opaque
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        fadeAnim.setValue(1); // Reset the animation
        Animated.timing(fadeAnim, {
            toValue: 0, // Fade out to fully transparent
            duration: duration,
            useNativeDriver: true,
        }).start();
    };

    return {
        fadeAnim,
        fadeIn,
        fadeOut,
    };
};

export default useFadeAnimation;
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { STATIC_VALUES } from '../constants/strings';
import { getColors } from '../utility';
import RNSSplashScreen from 'react-native-splash-screen';

const SplashScreen = ({ navigation }: any) => {
  const animationRef: any = useRef(null);

  useEffect(() => {
    animationRef?.current?.play?.();
    RNSSplashScreen.hide();

    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animationStyle}
        ref={animationRef}
        loop={false}
        source={require('../assets/animation/splashAnimation.json')}
      />
    </View>
  );
};

const { SCREEN_DIMENSIONS } = STATIC_VALUES.COMMON;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getColors().BLACK,
  },
  text: {
    color: getColors().WHITE,
    fontSize: 18,
  },
  animationStyle: {
    height: SCREEN_DIMENSIONS.SCREEN_HEIGHT,
    width: SCREEN_DIMENSIONS.SCREEN_WIDTH,
    backgroundColor: getColors().BLACK,
  },
});

export default SplashScreen;

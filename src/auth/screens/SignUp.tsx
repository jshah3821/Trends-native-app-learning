import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <Image
            source={require('../../assets/pngs/Trend-logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  backText: {
    fontSize: 28,
    color: '#fff',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 30,
  },
});

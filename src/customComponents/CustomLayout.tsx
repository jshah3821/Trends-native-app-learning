import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomLayout = ({ children, showSkip, onSkip }: any) => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <Image
                    source={require('../assets/pngs/Trend-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                {showSkip && (
                    <TouchableOpacity style={styles.skipBtn} onPress={onSkip}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.content}>
                {children}
            </View>

        </SafeAreaView>
    );
};

export default CustomLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    logo: {
        width: 120,
        height: 30,
    },
    skipBtn: {
        position: 'absolute',
        right: 16,
        top: 10,
    },
    skipText: {
        color: '#188BFF',
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
});
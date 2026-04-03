import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CustomButton from '../customComponents/CutomButton';
import CustomLayout from '../customComponents/CustomLayout';

const Onboarding = () => {
    return (
        <CustomLayout showSkip onSkip={() => console.log('Skip')}>
            <View style={styles.centerContainer}>
                <Text style={styles.shopProductText}>Shop Product</Text>

                <Text style={styles.innerText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida interdum viverra
                </Text>

                <Image
                    source={require('../assets/pngs/image1.png')}
                    resizeMode="contain"
                    style={styles.carouselImage}
                />
            </View>
            <View style={styles.bottom}>
                <CustomButton title="I have an account" variant="primary" />
                <CustomButton title="I’m new here" variant="secondary" />
            </View>

        </CustomLayout>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shopProductText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
    },
    innerText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    carouselImage: {
        height: 350,
        width: 250,
        marginTop: 30,
    },
    bottom: {
        marginBottom: 30,
    },
});
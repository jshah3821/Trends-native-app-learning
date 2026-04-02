import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
    title,
    onPress,
    variant = 'primary',
}: any) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                variant === 'primary' ? styles.primary : styles.secondary,
            ]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text
                style={[
                    styles.text,
                    variant === 'primary' ? styles.primaryText : styles.secondaryText,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    primary: {
        backgroundColor: '#188BFF',
    },
    secondary: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: '#188BFF',
    },
});
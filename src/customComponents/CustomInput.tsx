import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomInput = ({
  placeholder,
  value,
  style = {},
  wrapperStyle = {},
}: // onChangeText,
any) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#8A8A8A"
        value={value}
        // onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 6,
    paddingHorizontal: 12,
    height: 48,
    justifyContent: 'center',
    marginTop: 12,
  },
  input: {
    color: 'white',
    fontSize: 14,
  },
});

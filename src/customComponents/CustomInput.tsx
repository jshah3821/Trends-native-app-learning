import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const CustomInput = ({
  label,
  name,
  value,
  onChangeText,
  error,
  showError,
  secureTextEntry = false,
  required,
}: any) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          showError && error && styles.errorBorder,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={label}
          placeholderTextColor="#8A8A8A"
          value={value}
          onChangeText={text => onChangeText(name, text)} // 🔥 important
          secureTextEntry={hidden}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidden((prev: any) => !prev)}>
            <Text style={{ color: '#888' }}>
              {/* {hidden ? '<' : '>'} */}
              <Ionicons
                name={hidden ? 'eye-off-outline' : 'eye-outline'}
                size={16}
                color={'white'}
              />
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Error */}
      {showError && error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
  },
  label: {
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  required: {
    color: 'red',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#2C2C2E',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#1C1C1E',
    height: 50,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  errorBorder: {
    borderColor: 'red',
  },
});

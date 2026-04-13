import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { EyeIconClose, EyeIconOpen } from '../assets/SVGs';

type CustomInputProps = TextInputProps & {
  label?: string;
  name?: string;
  value?: string;
  onChangeText?: (...args: any[]) => void;
  error?: string;
  showError?: boolean;
  required?: boolean;
  wrapperStyle?: any;
  inputContainerStyle?: any;
  inputStyle?: any;
};

const CustomInput = ({
  label,
  name,
  value,
  onChangeText,
  error,
  showError,
  secureTextEntry = false,
  required,
  wrapperStyle,
  inputContainerStyle,
  inputStyle,
  placeholder,
  autoCapitalize = 'sentences',
  autoCorrect = false,
  ...textInputProps
}: CustomInputProps) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  useEffect(() => {
    setHidden(secureTextEntry);
  }, [secureTextEntry]);

  const handleTextChange = (text: string) => {
    if (!onChangeText) {
      return;
    }

    if (name !== undefined && name !== null) {
      onChangeText(name, text);
      return;
    }

    onChangeText(text);
  };

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          showError && error && styles.errorBorder,
        ]}
      >
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder ?? label}
          placeholderTextColor="#8A8A8A"
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={hidden}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          {...textInputProps}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setHidden((prev: any) => !prev)}>
            {hidden ? <EyeIconOpen /> : <EyeIconClose />}
          </TouchableOpacity>
        )}
      </View>

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
    height: moderateScale(50),
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

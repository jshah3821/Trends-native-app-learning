import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function CustomCheckbox({ checked, setChecked, label }: any) {
  return (
    <View style={styles.checkBoxContainer}>
      <TouchableOpacity
        style={[styles.box, checked && styles.checked]}
        onPress={() => setChecked((prev: boolean) => !prev)}
      >
        {checked && (
          <View style={styles.tickContainer}>
            <View style={styles.tick} />
          </View>
        )}
      </TouchableOpacity>
      {label ? (
        <TouchableOpacity onPress={() => setChecked((prev: boolean) => !prev)}>
          <Text style={styles.whiteText}>{label}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#188BFF',
    borderColor: '#188BFF',
  },
  tickContainer: {
    transform: [{ rotate: '45deg' }],
  },
  tick: {
    width: 5,
    height: 8,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginTop: -1,
    marginLeft: -1,
  },
  whiteText: {
    color: '#fff',
    fontSize: 14,
  },
});

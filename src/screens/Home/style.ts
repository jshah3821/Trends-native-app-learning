import { StyleSheet } from 'react-native';
import { getColors } from '../../utility';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: getColors().BLACK,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: getColors().ORANGE,
    color: getColors().WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: getColors().WHITE,
    borderWidth: 2,
  },
  buttonText: {
    color: getColors().WHITE,
    fontSize: 16,
  },
  modalContainer: {
    gap: 20,
  },
});

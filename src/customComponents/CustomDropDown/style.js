import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { getColors } from '../../utility';
import commonStyles from '../../constants/commonStyles';

const style = StyleSheet.create({
  dropDownContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  dropdownButtonStyle: {
    width: '100%',
    height: moderateScale(60),
    borderColor: getColors().INPUT_BACKGROUND_BLACK,
    borderWidth: 1,
    backgroundColor: getColors().INPUT_BACKGROUND_BLACK,
    borderRadius: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(10),
  },
  dropdownButtonFocusStyle: {
    borderColor: getColors().BLUE,
    color: getColors().BLUE,
  },
  dropdownButtonErrorStyle: {
    borderColor: getColors().RED_2,
    color: getColors().RED_2,
  },
  dropdownButtonItemStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  dropdownButtonItemStyle: {
    flex: 1,
    ...commonStyles.fontSize14,
    fontSize: moderateScale(16),
    color: getColors().WHITE,
  },
  dropdownButtonTxtStyle: {
    ...commonStyles.fontSize14,
    fontSize: moderateScale(10),
    color: getColors().DARK_GREY,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownSelectedItemStyle: {
    backgroundColor: getColors().DARK_GREY,
  },
  dropDownMenuStyle: {
    backgroundColor: getColors().INPUT_BACKGROUND_BLACK,
    borderRadius: 3,
  },
  dropdownItemTxtStyle: {
    ...commonStyles.fontSize16,
    paddingVertical: moderateScale(10),
    flex: 1,
  },
  dropdownSelectedItemTxtStyle: {
    color: getColors().WHITE,
  },
  selectedItemStyle: {
    color: getColors().WHITE,
  },
});

export default style;

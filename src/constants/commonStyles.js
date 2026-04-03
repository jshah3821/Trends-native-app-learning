import {StyleSheet} from 'react-native';
import {getColors} from '../utility';
import {STATIC_VALUES} from './strings';
import {moderateScale} from 'react-native-size-matters';

const {SCREEN_DIMENSIONS, FONT_FAMILY} = STATIC_VALUES.COMMON;

const commonStyles = StyleSheet.create({
  container: {
    width: SCREEN_DIMENSIONS.SCREEN_WIDTH,
    height: SCREEN_DIMENSIONS.SCREEN_HEIGHT,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  fullWidth: {
    width: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  blackColor: {
    color: getColors().BLACK,
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: getColors().INPUT_BACKGROUND_BLACK,
  },
  checkboxUnCheckedContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: getColors().PLACEHOLDER_BLACK,
  },
  checkboxCheckedContainer: {
    width: moderateScale(14),
    height: moderateScale(14),
    borderRadius: moderateScale(7),
    backgroundColor: getColors().PLACEHOLDER_BLACK,
  },
  iconUnchecked: {
    width: moderateScale(28),
    height: moderateScale(28),
    marginRight: moderateScale(17),
  },
  stateContainer: {
    width: moderateScale(118),
    marginRight: moderateScale(20),
  },
  zipCodeContainer: {
    flex: 1,
  },
  zipCodeField: {
    width: '100%',
  },
  dropDownIcon: {
    width: moderateScale(12),
    height: moderateScale(12),
  },
  dropDownIconBig: {
    width: moderateScale(16),
    height: moderateScale(16),
  },
  seperatorStyle: {
    width: SCREEN_DIMENSIONS.SCREEN_WIDTH - 75,
    height: moderateScale(1),
    backgroundColor: getColors().DARK_GREY,
    marginVertical: moderateScale(30),
  },
  underLineStyle: {
    borderBottomWidth: moderateScale(1),
    paddingBottom: moderateScale(1),
    alignSelf: 'flex-start',
    borderColor: getColors().WHITE,
  },
  scrollIndicator: {
    height: moderateScale(50),
    width: moderateScale(2),
    backgroundColor: getColors().GREY,
    position: 'absolute',
    right: moderateScale(10),
  },
  grayButton: {
    backgroundColor: getColors().GREY,
  },
  modalBg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_DIMENSIONS.SCREEN_HEIGHT,
    backgroundColor: getColors().LIGHT_BLACK,
    zIndex: -20,
  },
  modalContainerBg: {
    backgroundColor: getColors().BLUE,
    padding: moderateScale(24),
    borderRadius: moderateScale(16),
    width: SCREEN_DIMENSIONS.SCREEN_WIDTH - 75,
    alignItems: 'center',
    borderWidth: moderateScale(2),
    borderColor: getColors().BLACK,
    shadowColor: getColors().BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(8),
    elevation: moderateScale(5),
  },
  fontSize10: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    lineHeight: moderateScale(12),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_REGULAR,
  },
  fontSize12: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    lineHeight: moderateScale(16),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_REGULAR,
  },
  fontSize14: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(17),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_REGULAR,
  },
  fontSize16: {
    fontSize: moderateScale(16),
    fontWeight: '400',
    lineHeight: moderateScale(18),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_REGULAR,
  },
  fontSize18: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    lineHeight: moderateScale(22),
    includeFontPadding: false,
    color: getColors().WHITE,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.ROBOTO_BOLD,
  },
  fontSize20: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    lineHeight: moderateScale(24),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_BOLD,
  },
  fontSize22: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    lineHeight: moderateScale(26),
    includeFontPadding: false,
    color: getColors().WHITE,
    fontFamily: FONT_FAMILY.ROBOTO_BOLD,
  },
  fontSize28: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    lineHeight: moderateScale(32),
    includeFontPadding: false,
    color: getColors().BLACK,
    fontFamily: FONT_FAMILY.ROBOTO_BOLD,
  },
});

export default commonStyles;

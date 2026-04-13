import { Platform, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { getColors } from '../../utility';
import { STATIC_VALUES } from '../../constants/strings';

const { PLATFORM } = STATIC_VALUES.COMMON;

export const style = StyleSheet.create({
  tabContainer: {
    height:
      Platform.OS === PLATFORM.IOS ? moderateScale(70) : moderateScale(75),
    backgroundColor: getColors().INPUT_BACKGROUND_BLACK,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabInnerContainer: {
    flex: 1,
    height: '100%',
  },
  tab: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tabTitle: {
    marginTop: moderateScale(3),
  },
  safeAreaColor: {
    height:
      Platform.OS === PLATFORM.IOS ? moderateScale(90) : moderateScale(75),
    padding: moderateScale(0),
    backgroundColor: getColors().INPUT_BACKGROUND_BLACK,
  },
  tabIcon: {
    width: moderateScale(27),
    height: moderateScale(27),
  },
  inActiveTab: {
    borderTopColor: getColors().INPUT_BACKGROUND_BLACK,
    borderTopWidth: moderateScale(2),
    height: '100%',
  },
  activeTab: {
    borderTopColor: getColors().WHITE,
    borderTopWidth: moderateScale(2),
    borderBottomLeftRadius: moderateScale(4),
    borderBottomRightRadius: moderateScale(4),
    height: '100%',
  },
  innerTabStyle: {
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    right: -8,
    top: 17,
  },
});

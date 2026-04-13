import { API_END_POINTS } from '../constants/apiEndPoints';
import {
  CURRENT_MODE,
  DISPLAY_MODES,
  LIGHT_THEME_COLORS,
  DARK_THEME_COLORS,
  STATIC_VALUES,
  TITLES,
  navigationRef,
} from '../constants/strings';
import moment from 'moment';
import { Platform, NativeModules } from 'react-native';
import Toast from 'react-native-toast-message';
import { moderateScale } from 'react-native-size-matters';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const getColors = () => {
  if (CURRENT_MODE === DISPLAY_MODES.LIGHT_MODE) {
    return LIGHT_THEME_COLORS;
  } else {
    return DARK_THEME_COLORS;
  }
};

export const isValidEmail = email => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

export const isValidPassword = password => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~`|\\-]).{8,16}$/;
  if (!regex.test(password)) {
    return false;
  }
  return true;
};

export const isValidLeadName = name => {
  const regex = /^[a-zA-Z0-9\/\\\-‘'’\s]+$/;
  return !regex.test(name);
};

export const checkForSameInputs = (inputOne, inputTwo) => {
  return inputOne?.trim() === inputTwo?.trim();
};

export const isTypeEmpty = value => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === 'object' && !Array.isArray(value)) {
    if (Object.keys(value).length === 0) {
      return true;
    }
  }
  return false;
};

export const areAllKeysEmpty = obj => {
  return Object.values(obj).every(value => isTypeEmpty(value));
};

export const notifyError = (
  title,
  topMargin = 0,
  duration = STATIC_VALUES.COMMON.TOASTER_TYPE.DEFAULT_TIME,
) => {
  const { TOASTER_TYPE } = STATIC_VALUES.COMMON;
  return Toast.show({
    type: TOASTER_TYPE.ERROR,
    text1: title,
    position: TOASTER_TYPE.BOTTOM,
    visibilityTime: duration,
    autoHide: true,
    text2Style: {
      margin: topMargin,
    },
  });
};

export const notifySuccess = (
  title,
  topMargin = 0,
  duration = STATIC_VALUES.COMMON.TOASTER_TYPE.DEFAULT_TIME,
) => {
  const { TOASTER_TYPE } = STATIC_VALUES.COMMON;
  return Toast.show({
    type: TOASTER_TYPE.SUCCESS,
    text1: title,
    position: TOASTER_TYPE.BOTTOM,
    visibilityTime: duration,
    autoHide: true,
    text2Style: {
      margin: topMargin,
    },
  });
};

export const isValidNumber = (number, country) => {
  return isValidPhoneNumber(number, country);
};

export const isValidURL = value => {
  const validURLRegex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g;
  return validURLRegex.test(value);
};

export const isValidZipCode = value => {
  const codeRegex = /^[0-9]{5,6}$/g;
  return codeRegex.test(value);
};

export const isValidHandleName = value => {
  const handleRegex = /^(?!.*@).+$/g;
  return handleRegex.test(value);
};

export const generateVideoUrl = (userId, videoId) => {
  const urlToReturn =
    API_END_POINTS.COMMON.VIDEO_URL_PREFIX +
    userId +
    '/' +
    videoId +
    STATIC_VALUES.COMMON.VIDEO_URL_SUFFIX;
  return urlToReturn;
};

export const generateShareVideoUrl = trendId => {
  const urlToReturn = API_END_POINTS.COMMON.SHARE_VIDEO_URL_PREFIX + trendId;
  return urlToReturn;
};

export const generateProfileURL = handle => {
  const urlToReturn = API_END_POINTS.COMMON.PROFILE_URL_PREFIX + handle;
  return urlToReturn;
};

export const clearData = async () => {
  const { KEYS } = STATIC_VALUES.COMMON;
  try {
    await AsyncStorage.removeItem(KEYS.USER_DATA);
    await AsyncStorage.removeItem(KEYS.TAVSID);
    await AsyncStorage.removeItem(KEYS.LOCAL_CART_DATA);
    await AsyncStorage.removeItem(KEYS.USER_ACCESS_TOKEN);
    await AsyncStorage.removeItem(KEYS.CURRENT_SELECTED_ADDRESS);
    return;
  } catch (e) {}
};

export const stripHtmlTags = str => {
  return str?.replace(/<\/?[^>]+(>|$)/g, '');
};

export const addNumberAbbreavation = value => {
  if (value >= 1_000_000_000_000) {
    // Format trillions
    return `${(value / 1_000_000_000_000).toFixed(2).replace(/\.00$/, '')}T`;
  } else if (value >= 1_000_000_000) {
    // Format billions
    return `${(value / 1_000_000_000).toFixed(2).replace(/\.00$/, '')}B`;
  } else if (value >= 1_000_000) {
    // Format millions
    return `${(value / 1_000_000).toFixed(2).replace(/\.00$/, '')}M`;
  } else if (value >= 1_000) {
    // Format thousands
    return `${(value / 1_000).toFixed(2).replace(/\.00$/, '')}K`;
  } else {
    // Format as a regular number
    return value.toString();
  }
};

export const getFullName = (data = {}) => {
  let name = '';
  if (data?.first_name) {
    name += data?.first_name + ' ';
  }
  if (data?.last_name) {
    name += data?.last_name;
  }
  return name;
};

export const getShopErrorMessage = name => {
  let tempId = '';
  tempId = TITLES.MY_PROFILE.SHOP_SETTING.INVALID_ID_FIELD.includes(name)
    ? 'id'
    : '';
  return (
    TITLES.MY_PROFILE.SHOP_SETTING.INVALID_FIELD + ' ' + name + ' ' + tempId
  );
};

export const getLengthValidationMessage = (name, length) => {
  return (
    name +
    ' ' +
    TITLES.COMMON.LENGTH_VALIDATION_1 +
    ' ' +
    length +
    ' ' +
    TITLES.COMMON.LENGTH_VALIDATION_2
  );
};

export const formatMessageTime = (dateString, returnDefaultInHours = false) => {
  const date = moment.utc(dateString).local();
  const now = moment();
  if (date.isSame(now, 'day')) {
    return date.format('hh:mm A');
  } else if (date.isSame(now.subtract(1, 'days'), 'day')) {
    return 'Yesterday';
  } else {
    if (returnDefaultInHours) {
      return date.format('hh:mm A');
    } else {
      return date.format('DD/MM/YY');
    }
  }
};

export const containsWhitespace = str => /\s/.test(str);

export const formatDate = (dateString, format) => {
  const date = moment.utc(dateString).local();
  return date.format(format);
};

export const shippingTime = productDetail => {
  const { MARKET } = TITLES;
  const { ORDER_DETAILS } = MARKET;
  if (
    productDetail?.shipping_status === ORDER_DETAILS.SHIPPED.toLowerCase() ||
    productDetail?.shipping_status === ORDER_DETAILS.DELIVERED.toLowerCase()
  ) {
    return formatDate(
      productDetail?.history.find(
        history => history.status === ORDER_DETAILS.SHIPPED.toLowerCase(),
      )?.created_at,
      'hh:mm A (DD MMM)',
    );
  }
  return MARKET.BLANK_PLACEHOLDER;
};

export const generateLearnMoreURL = (trend_id, tavsid, tavuid) => {
  return `${
    TITLES.COMMON.LEARN_MORE_URL +
    trend_id +
    TITLES.COMMON.LEARN_MORE_TAVSID +
    tavsid +
    TITLES.COMMON.LEARN_MORE_TAVUID +
    tavuid
  }`;
};

export const generateLearnMoreDomainURL = url => {
  try {
    const matches = url.match(/^https?:\/\/([^\/]+)/);
    return matches ? matches[1] : '';
  } catch (error) {
    return '';
  }
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  return (
    layoutMeasurement?.height + contentOffset?.y >=
    contentSize?.height - moderateScale(150)
  );
};

export const setNavigationColor = color => {
  if (Platform.OS === STATIC_VALUES.COMMON.PLATFORM.ANDROID) {
    const { NavigationBarColor } = NativeModules;
    NavigationBarColor.changeNavigationBarColor(color, false, false);
  }
};

export const logScreenView = async currentRouteName => {
  await analytics().logScreenView({
    screen_name: currentRouteName,
    screen_class: currentRouteName,
  });
};

export const logCustomEvents = async (event, category, label, value) => {
  await analytics().logEvent(event, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const getUserAgent = async () => {
  return UserAgent?.getUserAgent();
};

export const formatFileSize = bytes => {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  let result;

  if (bytes >= GB) {
    result = (bytes / GB).toFixed(2) + ' GB';
  } else if (bytes >= MB) {
    result = (bytes / MB).toFixed(2) + ' MB';
  } else if (bytes >= KB) {
    result = (bytes / KB).toFixed(2) + ' KB';
  } else {
    result = bytes + ' Bytes';
  }

  return result;
};

export const backNavigation = (isNotLoggedIn = false) => {
  const { MAIN, LOGIN } = STATIC_VALUES.COMMON.SCREEN;
  const navigationState = isNotLoggedIn ? LOGIN : MAIN;
  try {
    if (navigationRef?.current?.canGoBack()) {
      return navigationRef?.current?.goBack();
    } else {
      return navigationRef?.current?.reset({
        index: 0,
        routes: [
          {
            name: navigationState,
          },
        ],
      });
    }
  } catch (err) {
    return navigationRef?.current?.reset({
      index: 0,
      routes: [
        {
          name: navigationState,
        },
      ],
    });
  }
};

export const matchRoute = async url => {
  const parsedUrl = new URL(url);
  const pathname = parsedUrl.pathname;
  let matchCount = 0;
  let resetState = '';
  let routeParams = {};
  const queryParams = Object.fromEntries(parsedUrl.searchParams.entries());
  const { DEEP_LINKING, SCREEN } = STATIC_VALUES.COMMON;
  const matchedPaths = DEEP_LINKING.routes
    .map(route => {
      const routePathParts = route.path.split('/');
      const urlPathParts = pathname.split('/');
      const routes = routePathParts.filter(routePath => routePath !== '');
      const urlPaths = urlPathParts.filter(routePath => routePath !== '');

      if (routes.length !== urlPaths.length) {
        return false;
      }
      const totalCounts = routes.filter(item => urlPaths.includes(item)).length;
      if (matchCount < totalCounts) {
        matchCount = totalCounts;
        routeParams = {};
        routes.forEach((part, index) => {
          if (part.startsWith(':')) {
            const paramName = part.slice(1);
            routeParams[paramName] = urlPaths[index];
          }
        });

        return { count: totalCounts, state: route?.name };
      }
      return false;
    })
    .filter(route => route);
  const maxCount = Math.max(...matchedPaths.map(item => item.count));
  const matchedState = matchedPaths.find(item => item.count === maxCount);
  const userData = await getData(STATIC_VALUES.COMMON.KEYS.USER_DATA);

  if (userData) {
    if (
      matchedPaths?.length === 0 ||
      DEEP_LINKING.authRoutes.includes(matchedState?.state)
    ) {
      resetState = SCREEN.MAIN;
    } else {
      resetState = matchedState?.state;
    }
  } else {
    resetState =
      matchedState?.state === SCREEN.REGISTRATION
        ? SCREEN.REGISTRATION
        : SCREEN.LOGIN;
  }
  const finalParams = { ...routeParams, ...queryParams };
  navigationRef?.current?.navigate(resetState, finalParams);
};

export const isApiResponseSuccess = res => {
  return res?.status === STATIC_VALUES.COMMON.STATUS_CODES.SUCCESS;
};

export const isApiResponseSuccessCode = res => {
  return res?.data?.code === STATIC_VALUES.COMMON.STATUS_CODES.SUCCESS;
};

export const capitalizeFirstLetter = str => {
  if (!str) return str;
  return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
};

export const convertEmojiToEntity = emoji => {
  const codePoints = Array.from(emoji).map(
    char => `&#x${char?.codePointAt(0)?.toString(16)?.toUpperCase()};`,
  );
  return codePoints.join('');
};

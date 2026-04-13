import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  LayoutAnimation,
} from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import {
  MailIconFilled,
  MailIcon,
  MarketIcon,
  MarketIconFilled,
  ProfileIcon,
  ProfileIconFilled,
  TrendsIconFilled,
  TrendsWhiteIcon,
  UploadReelIconFilled,
  UploadReelIcon,
} from '../../assets/SVGs';
import { TITLES } from '../../constants/strings';

const CustomTab = () => {
  const { COMMON_RENDER_KEYS } = TITLES.COMMON;
  const dashboardMenuList = [
    {
      id: 1,
      menu_icon_selected: <TrendsIconFilled />,
      menu_icon_deselected: <TrendsWhiteIcon />,
      menu_name: 'Home',
      menu_key: 'Home',
    },
    {
      id: 2,
      menu_icon_selected: <MarketIconFilled />,
      menu_icon_deselected: <MarketIcon />,
      menu_name: 'Market',
      menu_key: 'Market',
    },
    {
      id: 3,
      menu_icon_selected: <UploadReelIconFilled />,
      menu_icon_deselected: <UploadReelIcon />,
      menu_name: 'Upload',
      menu_key: 'upload',
    },
    {
      id: 4,
      menu_icon_selected: <MailIconFilled />,
      menu_icon_deselected: <MailIcon />,
      renderBadge: null,
      menu_name: 'Notifications',
      menu_key: 'Notifications',
    },
    {
      id: 5,
      menu_icon_selected: <ProfileIconFilled />,
      menu_icon_deselected: <ProfileIcon />,
      menu_name: 'Profile',
      menu_key: 'Profile',
    },
  ];

  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Home');
  const onTabClick = route => {
    if (route?.menu_key) {
      setSelectedTab(route?.menu_key);
    }
  };

  const isTabSelected = route => {
    return selectedTab === route?.menu_key;
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      LayoutAnimation?.configureNext(LayoutAnimation?.Presets?.easeInEaseOut);
      setKeyboardVisible(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      LayoutAnimation?.configureNext(LayoutAnimation?.Presets?.easeInEaseOut);
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [navigation]);

  return (
    <>
      {!isKeyboardVisible ? (
        <SafeAreaView style={style?.safeAreaColor}>
          <View style={style?.tabContainer}>
            {dashboardMenuList?.map((route, index) => (
              <TouchableOpacity
                onPress={() => onTabClick(route)}
                activeOpacity={1}
                style={style?.tabInnerContainer}
                key={COMMON_RENDER_KEYS.DASHBOARD_MENU + index.toString()}
              >
                <View style={[style?.tab]}>
                  <View
                    style={[
                      style.innerTabStyle,
                      isTabSelected(route)
                        ? style.activeTab
                        : style.inActiveTab,
                    ]}
                  >
                    {isTabSelected(route)
                      ? route?.menu_icon_selected
                      : route?.menu_icon_deselected}
                    {route?.renderBadge ? (
                      <View style={style.badgeContainer}>
                        {route?.renderBadge}
                      </View>
                    ) : null}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      ) : null}
    </>
  );
};

export default CustomTab;

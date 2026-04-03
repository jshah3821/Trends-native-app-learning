import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import { DownIcon } from '../../assets/SVGs';
import style from './style';

const CustomDropDown = props => {
  const dropdownRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const {
    data,
    placeholder,
    title,
    onSelect,
    selectedValue,
    placeHolderStyle,
    validate,
    mainParentStyle,
    visibleError,
    errorMsg,
    placeHolderStyleParent = [],
    placeholderTextColor,
    isPlacedBottom = false,
  } = props;

  const onValueChange = item => {
    setIsFocus(false);
    onSelect(item.value, item?.id);
  };

  const handleSelectedValue = (selectedItem, isEdit) => {
    if (selectedItem && isEdit) {
      return selectedItem?.label;
    } else if (selectedItem && !isEdit) {
      return selectedItem;
    } else if (
      selectedValue ||
      data?.find(tempData => tempData?.value === selectedValue)
    ) {
      return data?.find(tempData => tempData?.value === selectedValue)?.label;
    } else {
      return placeholder;
    }
  };

  const handleButtonPress = () => {
    if (isKeyboardOpen) {
      Keyboard.dismiss();
      setTimeout(() => {
        dropdownRef?.current?.openDropdown();
      }, 100);
    } else {
      dropdownRef?.current?.openDropdown();
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, []);

  return (
    <View style={[style.dropDownContainer, mainParentStyle]}>
      <SelectDropdown
        data={data}
        ref={dropdownRef}
        onSelect={onValueChange}
        defaultValue={selectedValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        searchPlaceHolderColor={placeholderTextColor}
        disabled={data && data.length === 0}
        renderButton={selectedItem => {
          return (
            <>
              {!isPlacedBottom ? (
                <View
                  style={[
                    style.dropdownButtonStyle,
                    isFocus
                      ? style.dropdownButtonFocusStyle
                      : errorMsg && errorMsg !== ''
                      ? style.dropdownButtonErrorStyle
                      : {},
                  ]}
                >
                  {title && selectedValue ? (
                    <Text
                      style={[
                        style.dropdownButtonTxtStyle,
                        isFocus
                          ? style.dropdownButtonFocusStyle
                          : errorMsg && errorMsg !== ''
                          ? style.dropdownButtonErrorStyle
                          : {},
                      ]}
                    >
                      {title}
                    </Text>
                  ) : null}
                  <View
                    style={[
                      style.dropdownButtonItemStyleContainer,
                      placeHolderStyleParent,
                    ]}
                  >
                    <Text
                      style={[
                        style.dropdownButtonItemStyle,
                        placeHolderStyle,
                        selectedValue ? style.selectedItemStyle : null,
                      ]}
                    >
                      {handleSelectedValue(selectedItem, true)}
                    </Text>
                    <DownIcon />
                  </View>
                </View>
              ) : null}
            </>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={[
                style.dropdownItemStyle,
                isSelected && style.dropdownSelectedItemStyle,
              ]}
            >
              <Text
                style={[
                  style.dropdownItemTxtStyle,
                  isSelected ? style.dropdownSelectedItemTxtStyle : null,
                ]}
              >
                {item.label}
              </Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={style.dropDownMenuStyle}
      />
      {isPlacedBottom ? (
        <TouchableOpacity
          style={[
            style.dropdownButtonStyle,
            isFocus
              ? style.dropdownButtonFocusStyle
              : errorMsg && errorMsg !== ''
              ? style.dropdownButtonErrorStyle
              : {},
          ]}
          onPress={() => handleButtonPress()}
        >
          {title && selectedValue ? (
            <Text
              style={[
                style.dropdownButtonTxtStyle,
                isFocus
                  ? style.dropdownButtonFocusStyle
                  : errorMsg && errorMsg !== ''
                  ? style.dropdownButtonErrorStyle
                  : {},
              ]}
            >
              {title}
            </Text>
          ) : null}
          <View
            style={[
              style.dropdownButtonItemStyleContainer,
              placeHolderStyleParent,
            ]}
          >
            <Text
              style={[
                style.dropdownButtonItemStyle,
                placeHolderStyle,
                selectedValue ? style.selectedItemStyle : null,
              ]}
            >
              {handleSelectedValue(selectedValue)}
            </Text>
            <DownIcon />
          </View>
        </TouchableOpacity>
      ) : null}
      {visibleError && !validate && errorMsg !== '' ? (
        <HelperText type="error" visible={!validate}>
          {errorMsg}
        </HelperText>
      ) : null}
    </View>
  );
};
export default CustomDropDown;

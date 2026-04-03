import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../assets/svgs/svgs';
import CustomButton from '../../customComponents/CutomButton';
import CustomInput from '../../customComponents/CustomInput';
import CustomCheckbox from '../../customComponents/CustomCheckbox';
import { countryDialCodes } from '../data';
import { TITLES } from '../../constants/strings';
import commonStyles from '../../constants/commonStyles';
import CustomDropDown from '../../customComponents/CustomDropDown';
import { moderateScale } from 'react-native-size-matters';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState(false);
  const [registrationSchema, setRegistrationSchema] = useState({
    email: '',
    password: '',
    handle: '',
    phone_number: '',
    phone_code: '',
    confirmPassword: '',
    phone_iso_code: '',
  });

  const name = 'Jack';

  const handleOnPress = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const onValueChange = (type: string, value: string) => {
    setRegistrationSchema(prev => {
      return { ...prev, [type]: value };
    });
  };

  const selectCountryHandle = (countryCode: string) => {
    onValueChange(
      TITLES.MY_PROFILE.SHOP_SETTING.SHOP_SETTING_FIELD.PHONE_CODE,
      countryCode,
    );
    countryDialCodes?.map((ele: any) => {
      if (countryCode === ele?.value) {
        onValueChange(
          TITLES.MY_PROFILE.SHOP_SETTING.SHOP_SETTING_FIELD.PHONE_ISO_CODE,
          ele?.isoCode,
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleBack()} style={styles.backBtn}>
          <BackIcon />
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <Image
            source={require('../../assets/pngs/Trend-logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>
      </View>
      <View style={styles.steps}>
        <Text style={styles.whiteText}>{`${step} of 3`}</Text>
      </View>
      {step === 1 ? (
        <View style={[styles.stepContainer, styles.topMargin]}>
          <Text style={styles.titleText}>{TITLES.AUTH.LETS_START}</Text>
          <Text style={styles.titleText}>{TITLES.AUTH.YOUR_HANDLE_NAME}</Text>
          <CustomInput placeholder={TITLES.AUTH.HANDLE_NAME} />
        </View>
      ) : null}
      {step === 2 ? (
        <View style={styles.stepContainer}>
          <Text
            style={styles.smallText}
          >{`${TITLES.AUTH.PLEASURE_TEXT} ${name}`}</Text>
          <Text style={styles.titleText}>
            {TITLES.AUTH.EMAIL_INSTRUCTION}
          </Text>
          <CustomInput placeholder={TITLES.COMMON.EMAIL_ADDRESS} />
          <View style={styles.phoneContainer}>
            <CustomDropDown
              mainParentStyle={styles.dropDownContainerStyle}
              placeholder={TITLES.COMMON.DEFAULT_PHONE_CODE}
              data={countryDialCodes}
              selectedValue={registrationSchema?.phone_code}
              onSelect={(value: any) => selectCountryHandle(value)}
              title={TITLES.COMMON.COUNTRY_CODE}
              inputStyle={[
                commonStyles?.fontSize12,
                styles.mobileInputDropdownContainer,
              ]}
            />
            <CustomInput
              wrapperStyle={styles.number}
              placeholder={TITLES.COMMON.MOBILE_NUMBER}
            />
          </View>
        </View>
      ) : null}
      {step === 3 ? (
        <View style={styles.stepContainer}>
          <Text style={styles.smallText}>{TITLES.AUTH.LAST_STEP}</Text>
          <Text style={styles.titleText}>
            {TITLES.AUTH.PASSWORD_INSTRUCTION}
          </Text>
          <CustomInput placeholder={TITLES.COMMON.PASSWORD} />
          <CustomInput
            wrapperStyle={styles.topMargin}
            placeholder={TITLES.COMMON.CONFIRM_PASSWORD}
          />
          <CustomCheckbox
            checked={checked}
            setChecked={setChecked}
            label={`${TITLES.AUTH.I_AGREE} ${TITLES.AUTH.TERMS_AND_CONDITIONS}${TITLES.COMMON.AND}${TITLES.AUTH.PRIVACY_POLICY}`}
          />
        </View>
      ) : null}
      <View style={styles.submitContainer}>
        <CustomButton
          onPress={() => handleOnPress()}
          title={step === 3 ? TITLES.COMMON.SIGN_UP : TITLES.AUTH.NEXT}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
  },
  mobileInputDropdownContainer: {
    height: moderateScale(60),
  },
  dropDownContainerStyle: {
    width: '30%',
    height: moderateScale(60),
  },
  signUpContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  backBtn: {
    position: 'absolute',
    zIndex: 1,
  },
  backText: {
    fontSize: 28,
    color: '#fff',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 30,
  },
  steps: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 28,
  },
  stepContainer: {
    marginTop: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 34,
    fontWeight: 'bold',
  },
  smallText: {
    color: '#757575',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
  },
  submitContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 15,
    flex: 1,
  },
  topMargin: {
    marginTop: 20,
  },
  phoneContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  code: { flex: 1 },
  number: { flex: 3 },
});

import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../assets/svgs/svgs';
import CustomButton from '../../customComponents/CutomButton';
import CustomDropDown from '../../customComponents/CustomDropDown';
import CustomInput from '../../customComponents/CustomInput';
import { TITLES, ALERTS } from '../../constants/strings';
import { moderateScale } from 'react-native-size-matters';
import useForm from '../../hooks/useForm';
import { countryDialCodes } from '../data';
import { isValidEmail } from '../../utility';

type FormValues = {
  handle: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
};

type FormField = keyof FormValues;
type FormErrors = Record<FormField, string>;
type AttemptedFields = Record<FormField, boolean>;

const TOTAL_STEPS = 3;
const STEP_FIELDS: Record<number, FormField[]> = {
  1: ['handle'],
  2: ['email', 'countryCode', 'mobileNumber'],
  3: ['password', 'confirmPassword'],
};

const FIELD_TO_STEP: Record<FormField, number> = {
  handle: 1,
  email: 2,
  countryCode: 2,
  mobileNumber: 2,
  password: 3,
  confirmPassword: 3,
};

const DEFAULT_ATTEMPTED_FIELDS: AttemptedFields = {
  handle: false,
  email: false,
  countryCode: false,
  mobileNumber: false,
  password: false,
  confirmPassword: false,
};

const DEFAULT_COUNTRY_CODE = countryDialCodes[0]?.value ?? '';

const HandleStep = ({
  values,
  errors,
  attemptedFields,
  onChangeField,
}: any) => {
  return (
    <View style={[styles.stepContainer, styles.topMargin]}>
      <Text style={styles.titleText}>{TITLES.AUTH.LETS_START}</Text>
      <Text style={styles.titleText}>{TITLES.AUTH.YOUR_HANDLE_NAME}</Text>
      <CustomInput
        label={TITLES.AUTH.HANDLE_NAME}
        value={values.handle}
        onChangeText={(value: string) => onChangeField('handle', value)}
        error={errors.handle}
        showError={attemptedFields.handle}
        required
        autoCapitalize="none"
        textContentType="username"
      />
    </View>
  );
};

const ContactStep = ({
  values,
  errors,
  attemptedFields,
  onChangeField,
}: any) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.flex}
    >
      <View style={styles.stepContainer}>
        <Text style={styles.smallText}>{`${TITLES.AUTH.PLEASURE_TEXT} ${
          values.handle || 'there'
        }`}</Text>
        <Text style={styles.titleText}>{TITLES.AUTH.EMAIL_INSTRUCTION}</Text>
        <CustomInput
          placeholder={TITLES.COMMON.EMAIL_ADDRESS}
          value={values.email}
          onChangeText={(value: string) => onChangeField('email', value)}
          error={errors.email}
          showError={attemptedFields.email}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="emailAddress"
          inputContainerStyle={styles.contactInputContainer}
        />
        <View style={styles.phoneRow}>
          <CustomDropDown
            data={countryDialCodes}
            placeholder={TITLES.COMMON.COUNTRY_CODE}
            title={TITLES.COMMON.COUNTRY_CODE}
            onSelect={(value: string) => onChangeField('countryCode', value)}
            selectedValue={values.countryCode}
            mainParentStyle={styles.countryCodeDropdown}
            placeHolderStyle={styles.countryCodeValue}
            visibleError={attemptedFields.countryCode}
            validate={!errors.countryCode}
            errorMsg={errors.countryCode}
          />
          <CustomInput
            placeholder={TITLES.COMMON.MOBILE_NUMBER}
            value={values.mobileNumber}
            onChangeText={(value: string) =>
              onChangeField('mobileNumber', value)
            }
            error={errors.mobileNumber}
            showError={attemptedFields.mobileNumber}
            keyboardType="number-pad"
            textContentType="telephoneNumber"
            maxLength={10}
            wrapperStyle={styles.mobileNumberWrapper}
            inputContainerStyle={styles.contactInputContainer}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const PasswordStep = ({
  values,
  errors,
  attemptedFields,
  onChangeField,
}: any) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.smallText}>{TITLES.AUTH.LAST_STEP}</Text>
      <Text style={styles.titleText}>{TITLES.AUTH.PASSWORD_INSTRUCTION}</Text>
      <CustomInput
        label={TITLES.COMMON.PASSWORD}
        value={values.password}
        onChangeText={(value: string) => onChangeField('password', value)}
        error={errors.password}
        showError={attemptedFields.password}
        secureTextEntry
        required
        autoCapitalize="none"
        textContentType="newPassword"
      />
      <CustomInput
        label={TITLES.COMMON.CONFIRM_PASSWORD}
        value={values.confirmPassword}
        onChangeText={(value: string) =>
          onChangeField('confirmPassword', value)
        }
        error={errors.confirmPassword}
        showError={attemptedFields.confirmPassword}
        secureTextEntry
        required
        autoCapitalize="none"
        textContentType="password"
      />
    </View>
  );
};

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [attemptedFields, setAttemptedFields] = useState<AttemptedFields>(
    DEFAULT_ATTEMPTED_FIELDS,
  );

  const schema = {
    handle: {
      value: '',
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.ENTER_HANDLER,
      validator: {
        func: (value: string) => !value.includes('@'),
        error: ALERTS.AUTH.ENTER_HANDLER,
      },
    },
    email: {
      value: '',
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.ENTER_EMAIL,
      validator: {
        func: (value: string) => isValidEmail(value),
        error: ALERTS.AUTH.ENTER_VALID_EMAIL,
      },
    },
    countryCode: {
      value: DEFAULT_COUNTRY_CODE,
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.SELECT_COUNTRY_CODE,
    },
    mobileNumber: {
      value: '',
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.ENTER_PHONE,
      validator: {
        func: (value: string) => /^\d{10}$/.test(value),
        error: ALERTS.AUTH.ENTER_VALID_PHONE,
      },
    },
    password: {
      value: '',
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.ENTER_PASSWORD,
      validator: {
        func: (value: string) => value.trim().length >= 6,
        error: ALERTS.AUTH.PASSWORD_ERROR,
      },
    },
    confirmPassword: {
      value: '',
      error: '',
      required: true,
      requiredError: ALERTS.AUTH.ENTER_CONFIRM_PASSWORD,
      validator: {
        func: (value: string, formValues: FormValues) =>
          value === formValues.password,
        error: ALERTS.AUTH.PASSWORD_NOT_MATCHED,
      },
    },
  };

  const { values, errors, handleOnChange, setUseFormStates } = useForm(
    schema,
    () => {},
  );

  const getFieldError = (
    fieldName: FormField,
    fieldValue: string,
    formValues: FormValues,
  ) => {
    const currentField: any = schema[fieldName];
    const value = typeof fieldValue === 'string' ? fieldValue : '';

    if (!value.trim()) {
      return currentField.required ? currentField.requiredError : '';
    }

    if (
      currentField.validator?.func &&
      !currentField.validator.func(value, formValues)
    ) {
      return currentField.validator.error;
    }

    return '';
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const setFieldsAttempted = (fieldNames: FormField[]) => {
    setAttemptedFields(prev => {
      const updatedFields = { ...prev };
      fieldNames.forEach(fieldName => {
        updatedFields[fieldName] = true;
      });
      return updatedFields;
    });
  };

  const validateFields = (fieldNames: FormField[]) => {
    const fieldErrors = fieldNames.reduce((acc, fieldName) => {
      acc[fieldName] = getFieldError(
        fieldName,
        values[fieldName],
        values as FormValues,
      );
      return acc;
    }, {} as Partial<FormErrors>);

    const dirtyFields = fieldNames.reduce((acc, fieldName) => {
      acc[fieldName] = true;
      return acc;
    }, {} as Partial<Record<FormField, boolean>>);

    setFieldsAttempted(fieldNames);
    setUseFormStates(null, fieldErrors, dirtyFields);

    return fieldNames.every(fieldName => !fieldErrors[fieldName]);
  };

  const handleFieldChange = (fieldName: FormField, fieldValue: string) => {
    const updatedValue =
      fieldName === 'mobileNumber'
        ? fieldValue.replace(/\D/g, '').slice(0, 10)
        : fieldValue;

    handleOnChange(fieldName, updatedValue);

    if (!attemptedFields[fieldName]) {
      return;
    }

    const nextValues = {
      ...(values as FormValues),
      [fieldName]: updatedValue,
    };
    const nextErrors: Partial<FormErrors> = {
      [fieldName]: getFieldError(fieldName, updatedValue, nextValues),
    };

    if (fieldName === 'password' && attemptedFields.confirmPassword) {
      nextErrors.confirmPassword = getFieldError(
        'confirmPassword',
        nextValues.confirmPassword,
        nextValues,
      );
    }

    setUseFormStates(null, nextErrors, null);
  };

  const handlePrimaryAction = () => {
    if (step < TOTAL_STEPS) {
      const isCurrentStepValid = validateFields(STEP_FIELDS[step]);

      if (isCurrentStepValid) {
        setStep(prev => prev + 1);
      }

      return;
    }

    const allFields = Object.keys(FIELD_TO_STEP) as FormField[];
    const isFormValid = validateFields(allFields);

    if (!isFormValid) {
      const firstInvalidField = allFields.find(fieldName =>
        Boolean(
          getFieldError(fieldName, values[fieldName], values as FormValues),
        ),
      );

      if (firstInvalidField) {
        setStep(FIELD_TO_STEP[firstInvalidField]);
      }

      return;
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <HandleStep
          values={values}
          errors={errors}
          attemptedFields={attemptedFields}
          onChangeField={handleFieldChange}
        />
      );
    }

    if (step === 2) {
      return (
        <ContactStep
          values={values}
          errors={errors}
          attemptedFields={attemptedFields}
          onChangeField={handleFieldChange}
        />
      );
    }

    return (
      <PasswordStep
        values={values}
        errors={errors}
        attemptedFields={attemptedFields}
        onChangeField={handleFieldChange}
      />
    );
  };

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
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
          <Text style={styles.whiteText}>{`${step} of ${TOTAL_STEPS}`}</Text>
        </View>
        <View style={styles.contentContainer}>{renderStep()}</View>
        <View style={styles.submitContainer}>
          <CustomButton
            onPress={handlePrimaryAction}
            title={
              step === TOTAL_STEPS ? TITLES.COMMON.SIGN_UP : TITLES.AUTH.NEXT
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    height: 60,
    justifyContent: 'center',
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
  contactInputContainer: {
    height: moderateScale(60),
    borderRadius: 3,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  countryCodeDropdown: {
    width: '32%',
    marginTop: 16,
  },
  countryCodeValue: {
    fontSize: moderateScale(16),
  },
  mobileNumberWrapper: {
    flex: 1,
    marginTop: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  progressSegment: {
    width: moderateScale(48),
    height: 4,
    borderRadius: 999,
    backgroundColor: '#242424',
  },
  progressSegmentActive: {
    backgroundColor: '#188BFF',
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 28,
  },
  stepContainer: {
    marginTop: 8,
    flex: 1,
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
  contentContainer: {
    flex: 1,
  },
  submitContainer: {
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  topMargin: {
    marginTop: 20,
  },
});

import { useState, useEffect, useCallback } from 'react';

const isRequired = (value: any, required: any, errorMessage: any) => {
  if (
    required &&
    (!value || (typeof value === 'string' && value?.trim()?.length === 0))
  ) {
    return errorMessage;
  }
  return '';
};

const isObject: any = (value: any) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};

const getPropValues: any = (obj: any, prop: any) => {
  const result: any = {};
  Object?.keys(obj)?.forEach(key => {
    if (prop) {
      result[key] = obj[key]?.[prop] ?? '';
    } else {
      result[key] = obj[key] ?? false;
    }
  });
  return result;
};

export const useForm = (stateSchema: any, submitFormCallback: any) => {
  const [state, setStateSchema] = useState<any>({ ...stateSchema });
  const [values, setValues] = useState(getPropValues(state, 'value'));
  const [errors, setErrors] = useState(getPropValues(state, 'error'));
  const [dirty, setDirty] = useState(getPropValues(state));
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const trimStringValue = useCallback((value?: any, fieldName?: any) => {
    if (typeof value !== 'string') {
      return value;
    }
    const isEmailOrPassword =
      fieldName != null && /email|password/i.test(String(fieldName));
    if (isEmailOrPassword) {
      return value.trim();
    }
    return value.replace(/^\s+/, '');
  }, []);

  useEffect(() => {
    setStateSchema(stateSchema);
    setDisable(true);
  }, []);

  useEffect(() => {
    if (isDirty) {
      const hasErrors = validateErrorState();
      const hasEmptyRequiredFields = Object?.keys(state)?.some(key => {
        const field: any = state?.[key];
        if (field?.required) {
          const value = values?.[key];
          return (
            !value || (typeof value === 'string' && value?.trim()?.length === 0)
          );
        }
        return false;
      });
      setDisable(hasErrors || hasEmptyRequiredFields);
    }
  }, [errors, isDirty, state, values]);

  const updateSchema = useCallback((schema: any) => {
    setStateSchema(schema);
  }, []);

  const setRequired = useCallback(
    (fields: any) => {
      Object?.keys(fields)?.forEach(key => {
        if (state?.[key] !== undefined) {
          setStateSchema((prev: any) => ({
            ...prev,
            [key]: {
              ...prev?.[key],
              required: fields?.[key],
            },
          }));
        }
      });
    },
    [state],
  );

  const setValidator = useCallback(
    (fieldName: any, validatorFunction: any) => {
      if (!state?.[fieldName]) {
        return;
      }

      setStateSchema((prev: any) => ({
        ...prev,
        [fieldName]: {
          ...prev?.[fieldName],
          validator: validatorFunction,
        },
      }));
    },
    [state],
  );

  //   const validateFormFields = useCallback(
  //     (name: any, value: any) => {
  //       if (!state?.[name]) {
  //         console.log(state?.name, '123 name');
  //         return '';
  //       }
  //       console.log(state?.name, '123 name out');
  //       const field = state?.[name];
  //       let error = '';

  //       if (isObject(field?.validator)) {
  //         const fieldValidator = field?.validator;
  //         const testFunc = fieldValidator?.func;
  //         const shouldShowError = !testFunc || !testFunc(value, values);
  //         if (shouldShowError) {
  //           const errorKey =
  //             typeof fieldValidator?.error === 'function'
  //               ? fieldValidator?.error(value, values)
  //               : fieldValidator?.error;
  //           error = errorKey;
  //         }
  //       } else {
  //         error = isRequired(
  //           value,
  //           field?.required ?? false,
  //           'This is a required',
  //         );
  //       }

  //       return error;
  //     },
  //     [state, values],
  //   );

  const validateFormFields = useCallback(
    (name: any, value: any) => {
      if (!state?.[name]) return '';

      const field = state?.[name];
      if (
        field?.required &&
        (value === null ||
          value === undefined ||
          (typeof value === 'string' && value?.trim()?.length === 0) ||
          (Array.isArray(value) && value?.length === 0))
      ) {
        return 'This is required';
      }

      // validator
      if (isObject(field?.validator)) {
        const fieldValidator = field?.validator;
        const testFunc = fieldValidator?.func;
        const isValid = testFunc ? testFunc(value, values) : true;

        if (!isValid) {
          return fieldValidator?.error;
        }
      }

      return '';
    },
    [state, values],
  );

  const setInitialErrorState = useCallback(() => {
    Object?.keys(errors)?.forEach(name => {
      setErrors((prev: any) => ({
        ...prev,
        [name]: validateFormFields(name, values?.[name]),
      }));
    });
  }, [errors, values, validateFormFields]);

  const validateErrorState = useCallback(() => {
    return Object?.values(errors)?.some(error => error !== '');
  }, [errors]);

  const setUseFormStates = useCallback(
    (vals: any = null, errs: any = null, dirt: any = null) => {
      if (vals) {
        setValues((prev: any) => ({ ...prev, ...vals }));
      }
      if (errs) {
        setErrors((prev: any) => ({ ...prev, ...errs }));
      }
      if (dirt) {
        setDirty((prev: any) => ({ ...prev, ...dirt }));
      }
    },
    [],
  );

  const handleOnChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(true);
      const trimmedValue = trimStringValue(value, name);
      const error = validateFormFields(name, trimmedValue);
      setUseFormStates(
        { [name]: trimmedValue },
        { [name]: error },
        { [name]: error !== '' },
      );
    },
    [validateFormFields, setUseFormStates, trimStringValue],
  );

  const handleOnNumberChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(true);
      const field = stateSchema?.[name];
      const processedValue =
        field && field?.required ? (isNaN(value) ? '' : value) : value;
      const error = validateFormFields(name, processedValue);
      setUseFormStates(
        { [name]: processedValue },
        { [name]: error },
        { [name]: error !== '' },
      );
    },
    [validateFormFields, setUseFormStates, stateSchema],
  );

  const handleOnSelection = useCallback(
    (name: any, value: any, allowEmptyVal = false) => {
      setIsDirty(true);
      if (value || allowEmptyVal) {
        const trimmedValue = trimStringValue(value);
        const error = validateFormFields(name, trimmedValue);
        setUseFormStates(
          { [name]: trimmedValue },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates, trimStringValue],
  );

  const handleOnMultipleSelection = useCallback(
    (name: any, selectedValues: any) => {
      setIsDirty(true);
      if (selectedValues) {
        const error = validateFormFields(name, selectedValues);
        setUseFormStates(
          { [name]: selectedValues },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnCheckboxChange = useCallback(
    (name: any, value: any, selection: any) => {
      setIsDirty(true);
      let checkedValues = [];

      if (Array.isArray(value)) {
        checkedValues = [...value];
      } else if (selection && Array.isArray(selection)) {
        checkedValues = [...selection];

        const stringValue = String(value);
        if (checkedValues?.includes(stringValue)) {
          const index = checkedValues?.indexOf(stringValue);
          if (index > -1) {
            checkedValues?.splice(index, 1);
          }
        } else {
          checkedValues = [...checkedValues, stringValue];
        }
      } else {
        checkedValues = [value];
      }

      const error = validateFormFields(name, checkedValues);
      if (value !== null && value !== undefined) {
        setUseFormStates(
          { [name]: checkedValues },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnSwitch = useCallback(
    (name: any, value: any) => {
      setIsDirty(true);
      const error = validateFormFields(name, value);
      if (value !== null && value !== undefined) {
        setUseFormStates(
          { [name]: value },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnValueChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(false);
      const processedValue = value || '';
      const trimmedValue = trimStringValue(processedValue);
      const error = validateFormFields(name, trimmedValue);
      if (trimmedValue !== null && trimmedValue !== undefined) {
        setUseFormStates(
          { [name]: trimmedValue },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates, trimStringValue],
  );

  const handleDateTimeChange = useCallback(
    (name: any, value: any) => {
      const error = validateFormFields(name, value);
      if (value !== null && value !== undefined) {
        setUseFormStates(
          { [name]: value },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnMultiselectChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(false);
      const error = validateFormFields(name, value);
      if (value !== null && value !== undefined) {
        setUseFormStates(
          { [name]: value },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnFileUpload = useCallback(
    (name: any, file: any) => {
      setIsDirty(true);
      const error = validateFormFields(name, file);
      setUseFormStates({ [name]: file }, { [name]: error }, { [name]: true });
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnImageUpload = useCallback(
    (name: any, file: any, base64Name: any) => {
      setIsDirty(true);
      const fileFieldName = `file-${name}`;
      const error = validateFormFields(fileFieldName, file);
      setUseFormStates(
        { [fileFieldName]: file },
        { [fileFieldName]: error },
        { [fileFieldName]: true },
      );

      if (!error && base64Name) {
        setUseFormStates(
          { [base64Name]: file },
          { [base64Name]: '' },
          { [base64Name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnClearImageUpload = useCallback(
    (name: any, value: any) => {
      setIsDirty(false);
      setUseFormStates({ [name]: value }, { [name]: value }, { [name]: true });
      const key = 'file';
      setUseFormStates({ [key]: value }, { [key]: value }, { [key]: true });
    },
    [setUseFormStates],
  );

  //   const handleOnDocumentUpload = useCallback(
  //     (name: string, file: any, content?: string) => {
  //       setIsDirty(true);
  //       let fileData = {};

  //       if (content) {
  //         fileData.name = file?.name ?? '';
  //         fileData.lastModified = file?.lastModified ?? '';
  //         fileData.size = file?.size ?? '';
  //         fileData.type = file?.type ?? '';
  //         fileData.lastModifiedDate = file?.lastModifiedDate ?? '';

  //         if (!fileData.content) {
  //           fileData.content = content;
  //         }
  //       }

  //       const stateValue = content ? fileData : file;
  //       const error = validateFormFields(name, stateValue);
  //       setUseFormStates(
  //         { [name]: stateValue },
  //         { [name]: error },
  //         { [name]: true },
  //       );
  //     },
  //     [validateFormFields, setUseFormStates],
  //   );

  const handleOnClearDocumentUpload = useCallback(
    (name: any) => {
      setIsDirty(true);
      const stateValue = '';
      const error = validateFormFields(name, stateValue);
      setUseFormStates(
        { [name]: stateValue },
        { [name]: error },
        { [name]: true },
      );
      const contentName = `Content-${name}`;
      const contentError = validateFormFields(contentName, stateValue);
      setUseFormStates(
        { [contentName]: stateValue },
        { [contentName]: contentError },
        { [contentName]: true },
      );
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnTelephoneExtChange = useCallback(
    (name: any, phoneValue: any) => {
      setIsDirty(false);
      const joinedValue = phoneValue.join('');
      const trimmedValue = trimStringValue(joinedValue);
      const error = validateFormFields(name, trimmedValue);
      if (phoneValue !== null && phoneValue !== undefined) {
        const trimmedPhoneValue = phoneValue?.map((val: any) =>
          trimStringValue(val),
        );
        setUseFormStates(
          { [name]: trimmedPhoneValue },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates, trimStringValue],
  );

  const handleOnMobileCountryChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(false);
      const val = Array.isArray(value) ? value.join('') : value;
      const trimmedVal = trimStringValue(val);
      const error = validateFormFields(name, trimmedVal);
      let processedValue = value || '';
      if (Array.isArray(processedValue)) {
        processedValue = processedValue?.map(val => trimStringValue(val));
      } else {
        processedValue = trimStringValue(processedValue);
      }
      if (processedValue !== null && processedValue !== undefined) {
        setUseFormStates(
          { [name]: processedValue },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates, trimStringValue],
  );

  const handleOnEditorChange = useCallback(
    (name: any, value: any) => {
      setIsDirty(false);
      if (value !== null && value !== undefined) {
        setUseFormStates({ [name]: value }, { [name]: '' }, { [name]: true });
      }
    },
    [setUseFormStates],
  );

  const handleOnSegment = useCallback(
    (name: any, value: any) => {
      const error = validateFormFields(name, value);
      if (value) {
        setUseFormStates(
          { [name]: value },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnRadioChange = useCallback(
    (name: any, value: any) => {
      const error = validateFormFields(name, value);
      if (value !== null && value !== undefined) {
        setUseFormStates(
          { [name]: value },
          { [name]: error },
          { [name]: true },
        );
      }
    },
    [validateFormFields, setUseFormStates],
  );

  const handleOnClear = useCallback((obj: any) => {
    setValues((prev: any) => ({ ...prev, ...obj }));
  }, []);

  const handleOnDataClear = useCallback(
    (name: any, value = '', stateVal = true) => {
      const error = validateFormFields(name, value);
      setUseFormStates(
        { [name]: value },
        { [name]: error },
        { [name]: stateVal },
      );
    },
    [validateFormFields, setUseFormStates],
  );

  const clearFieldFromSchema = useCallback(
    (name: any, value = '') => {
      setUseFormStates({ [name]: value }, { [name]: '' }, { [name]: false });
    },
    [setUseFormStates],
  );

  const handleDataClearOnCategoryChange = useCallback(
    (nameArray: any) => {
      nameArray?.forEach((name: any) => {
        const error = validateFormFields(name, '');
        setUseFormStates({ [name]: '' }, { [name]: error }, { [name]: false });
      });
    },
    [validateFormFields, setUseFormStates],
  );

  const handleSubmit = useCallback(() => {
    setInitialErrorState();
    if (!validateErrorState()) {
      submitFormCallback(values, null);
    } else {
      const newDirty: any = {};
      Object?.keys(errors)?.forEach(name => {
        if (errors?.[name] && errors?.[name]?.length > 0) {
          newDirty[name] = true;
        }
      });
      setDirty((prev: any) => ({ ...prev, ...newDirty }));
      submitFormCallback(null, errors);
    }
  }, [
    validateErrorState,
    submitFormCallback,
    values,
    errors,
    setInitialErrorState,
  ]);

  const clearStateSchema = useCallback(() => {
    Object?.keys(values)?.forEach(name => {
      setValues((prev: any) => ({ ...prev, [name]: '' }));
    });
    Object?.keys(errors)?.forEach(name => {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    });
    Object?.keys(dirty)?.forEach(name => {
      setDirty((prev: any) => ({ ...prev, [name]: false }));
    });
    setInitialErrorState();
  }, [values, errors, dirty, setInitialErrorState]);

  const handleNewSchema = useCallback((newSchema: any) => {
    setStateSchema(newSchema);
    setValues(getPropValues(newSchema, 'value'));
    setErrors(getPropValues(newSchema, 'error'));
    setDirty(getPropValues(newSchema));
  }, []);

  const handleCandidateEligibilitySubmit = useCallback(() => {
    submitFormCallback(values, errors);
  }, [submitFormCallback, values, errors]);

  const handleSubmitForm = useCallback(() => {
    setInitialErrorState();
    if (!validateErrorState()) {
      submitFormCallback(values, null);
    } else {
      const newDirty: any = {};
      Object?.keys(errors)?.forEach(name => {
        if (errors?.[name] && errors?.[name]?.length > 0) {
          newDirty[name] = true;
        }
      });
      setDirty((prev: any) => ({ ...prev, ...newDirty }));
      submitFormCallback(null, errors);
    }
  }, [
    validateErrorState,
    submitFormCallback,
    values,
    errors,
    setInitialErrorState,
  ]);

  const addUseFormFields = useCallback(
    (fields: any) => {
      const { keys = [], errorMessages = [], newSchemaFields = null } = fields;
      let valuesToSet: any = {};
      let errorsToSet: any = {};
      let dirtyToSet: any = {};

      keys.forEach((eleKey: any, index: any) => {
        valuesToSet[eleKey] = '';
        errorsToSet[eleKey] = errorMessages?.[index] ?? '';
        dirtyToSet[eleKey] = errorMessages?.[index] ? false : true;
      });

      setUseFormStates(valuesToSet, errorsToSet, dirtyToSet);

      if (newSchemaFields !== null) {
        const clonedStates = { ...state, ...newSchemaFields };
        updateSchema(clonedStates);
      }
    },
    [state, setUseFormStates, updateSchema],
  );

  const removeUseFormFields = useCallback(
    (keys = []) => {
      if (keys?.length > 0) {
        let valuesToSet = { ...values };
        let errorsToSet = { ...errors };
        let dirtyToSet = { ...dirty };
        let clonedStates = { ...state };

        keys.forEach(eleKey => {
          delete valuesToSet?.[eleKey];
          delete errorsToSet?.[eleKey];
          delete dirtyToSet?.[eleKey];
          delete clonedStates?.[eleKey];
        });

        setUseFormStates(valuesToSet, errorsToSet, dirtyToSet);
        updateSchema(clonedStates);
      }
    },
    [values, errors, dirty, state, setUseFormStates, updateSchema],
  );

  const changeMandatoryFields = useCallback(
    (fields: any) => {
      let initialStateClone = { ...state };
      fields?.forEach(({ key, required }: any) => {
        if (`${key}` in initialStateClone && typeof required === 'boolean') {
          initialStateClone[`${key}`] = {
            ...initialStateClone[`${key}`],
            required: !required,
          };
        }
      });
      setStateSchema(initialStateClone);
    },
    [state],
  );

  return {
    values,
    errors,
    dirty,
    disable,
    isDirty,
    handleOnChange,
    handleOnNumberChange,
    handleOnSelection,
    handleOnMultipleSelection,
    handleOnCheckboxChange,
    handleOnSwitch,
    handleOnValueChange,
    handleDateTimeChange,
    handleOnMultiselectChange,
    handleOnFileUpload,
    handleOnImageUpload,
    handleOnClearImageUpload,
    // handleOnDocumentUpload,
    handleOnClearDocumentUpload,
    handleOnTelephoneExtChange,
    handleOnMobileCountryChange,
    handleOnEditorChange,
    handleOnSegment,
    handleOnRadioChange,
    handleOnClear,
    handleOnDataClear,
    clearFieldFromSchema,
    handleDataClearOnCategoryChange,
    handleSubmit,
    clearStateSchema,
    handleNewSchema,
    handleCandidateEligibilitySubmit,
    handleSubmitForm,
    setRequired,
    setValidator,
    validateErrorState,
    setUseFormStates,
    addUseFormFields,
    removeUseFormFields,
    changeMandatoryFields,
    updateSchema,
  };
};

export default useForm;

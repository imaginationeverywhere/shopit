import { useState } from 'react';

const useForm = (formInput) => {
  const [formValues, setFormValues] = useState(formInput);

  const resetForm = (resetInput) => {
    if (resetInput) setFormValues((prevVal) => ({ ...prevVal, ...resetInput }));
    else {
      setFormValues((prevVal) => {
        const newVals = {};
        Object.keys(prevVal).forEach((key) => {
          newVals[key] = '';
        });
        return newVals;
      });
    }
  };

  const checkAllRequired = (except = []) => {
    let allRequired = true;
    Object.keys(formValues).forEach((key) => {
      if (!except.includes(key) && !formValues[key]) {
        allRequired = false;
      }
    });
    return allRequired;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    handleChange, formValues, resetForm, checkAllRequired
  };
};

export default useForm;

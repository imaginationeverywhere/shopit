import { useState } from 'react';

const useForm = (formInput) => {
  const [formValues, setFormValues] = useState(formInput);
  const cleanForm = (raw) => {
    const actualRec = {};
    Object.keys(formInput).forEach((key) => {
      if(raw[key] !== undefined) {
       actualRec[key] = raw[key];
      }
    });
    return actualRec
  }
  
  const resetForm = (resetInput) => {
    if (resetInput) setFormValues((prevVal) => ({ ...prevVal, ...cleanForm(resetInput) }));
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

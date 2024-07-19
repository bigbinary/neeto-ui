import { useEffect } from "react";

import { useFormikContext } from "formik";

import { getFieldsWithServerError, scrollToError } from "./utils";

const ScrollToErrorField = ({ formRef }) => {
  const { submitCount, isValid, errors, status } = useFormikContext();

  useEffect(() => {
    const fieldsWithServerError = getFieldsWithServerError(status);
    if (!formRef.current || (isValid && fieldsWithServerError.length > 0)) {
      return;
    }

    scrollToError(formRef, errors, status);
  }, [submitCount]);

  return null;
};

export default ScrollToErrorField;

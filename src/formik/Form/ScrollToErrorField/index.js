import { useEffect } from "react";

import { useFormikContext } from "formik";
import { isEmpty } from "ramda";

import { getFieldsWithServerError, scrollToError } from "./utils";

const ScrollToErrorField = ({ formRef }) => {
  const { submitCount, isValid, errors, status } = useFormikContext();

  useEffect(() => {
    const fieldsWithServerError = getFieldsWithServerError(status);
    if (!formRef.current || (isValid && isEmpty(fieldsWithServerError))) {
      return;
    }

    scrollToError(formRef, errors, status);
  }, [submitCount]);

  return null;
};

export default ScrollToErrorField;

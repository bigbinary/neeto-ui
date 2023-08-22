import { useEffect, useRef } from "react";

import { useFormikContext } from "formik";

import { scrollToError } from "./utils";

const ScrollToErrorField = ({ formRef }) => {
  const { submitCount, isValid, errors } = useFormikContext();
  const isValidatedReference = useRef(false);

  useEffect(() => {
    isValidatedReference.current = false;
  }, [submitCount]);

  useEffect(() => {
    if (!formRef.current || isValidatedReference.current || isValid) return;
    isValidatedReference.current = true;

    scrollToError(formRef, errors);
  }, [submitCount]);

  return null;
};

export default ScrollToErrorField;

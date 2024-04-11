import { useEffect } from "react";

import { useFormikContext } from "formik";

import { scrollToError } from "./utils";

const ScrollToErrorField = ({ formRef }) => {
  const { submitCount, isValid, errors } = useFormikContext();

  useEffect(() => {
    if (!formRef.current || isValid) return;

    scrollToError(formRef, errors);
  }, [submitCount]);

  return null;
};

export default ScrollToErrorField;

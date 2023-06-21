import { useEffect, useRef } from "react";

import { useFormikContext } from "formik";

import { getErrorFieldName } from "./utils";

const ScrollToErrorField = ({ formRef }) => {
  const { submitCount, isValid, errors } = useFormikContext();
  const isValidatedReference = useRef(false);

  useEffect(() => {
    isValidatedReference.current = false;
  }, [submitCount]);

  useEffect(() => {
    if (!formRef.current || isValidatedReference.current || isValid) return;

    isValidatedReference.current = true;
    const fieldErrorNames = getErrorFieldName(errors);
    if (!fieldErrorNames) return;

    const errorFormElement = formRef.current.elements[fieldErrorNames];

    errorFormElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [submitCount, errors]);

  return null;
};

export default ScrollToErrorField;

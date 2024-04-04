import React from "react";
import { FormikProps } from "formik";

export interface Form {
  className?: string;
  children: React.ReactNode | ((props: FormikProps<any>) => React.ReactNode);
  formikProps: { [key: string]: any };
  formProps?: { [key: string]: any };
  scrollToErrorField?: boolean;
}

export const Form: React.FC<Form>;

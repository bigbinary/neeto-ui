import React from "react";
import { Form, Formik } from "formik";
import {
  ActionBlock,
  Input as FormikInput,
  Radio as FormikRadio,
  Select as FormikSelect,
  Switch as FormikSwitch,
} from "../../../lib/v2/formik";

import Header from "../Header";

const FormikElements = () => {
  const RADIO_OPTIONS = [
    {
      label: "Everyone",
      value: true,
      id: "Everyone",
    },
    {
      label: "Logged in users only",
      value: false,
      id: "Logged in users only",
    },
  ];

  const SELECT_OPTIONS = [
    {
      label: "Option 1",
      value: "fselect-opt1",
    },
    {
      label: "Option 2",
      value: "fselect-opt2",
    },
  ];

  return (
    <div className="w-full">
      <Header title="Formik" />
      <div className="flex flex-col items-start justify-start p-6">
        <Formik
          initialValues={{ formikRadio: "", formikSelect: "" }}
          onSubmit={() => {}}
        >
          <Form className="w-2/6">
            <FormikInput
              name="formikInput"
              type="text"
              label="Formik Input"
              placeholder="Type Something"
              error="Input error message"
              className="mb-6"
              data-testid="formik-input"
            />
            <FormikRadio
              name="formikRadio"
              label="Formik Radio"
              options={RADIO_OPTIONS}
              className="mb-6"
              data-testid="formik-radio"
            />
            <FormikSelect
              name="formikSelect"
              label="Formik Select"
              options={SELECT_OPTIONS}
              className="mb-8"
              data-testid="formik-select"
            />
            <FormikSwitch
              name="formikSwitch"
              label="Formik Switch"
              options={SELECT_OPTIONS}
              className="mb-8"
              data-testid="formik-select"
            />
            <ActionBlock className="space-x-3" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikElements;

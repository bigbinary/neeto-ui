import React from 'react';
import { Form, Formik } from "formik";
import {
  ActionBlock,
  Input as FormikInput,
  Radio as FormikRadio,
  Select as FormikSelect,
} from "../../lib/components/formik";

import Header from '../Header';

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
      <Header title="Formik"/>
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
          />
          <FormikRadio
            name="formikRadio"
            label="Formik Radio"
            options={RADIO_OPTIONS}
            className="mb-6"
          />
          <FormikSelect
            name="formikSelect"
            label="Formik Select"
            options={SELECT_OPTIONS}
            className="mb-8"
          />
          <ActionBlock/>
        </Form>
      </Formik>
      </div>
    </div>
  )
}

export default FormikElements;

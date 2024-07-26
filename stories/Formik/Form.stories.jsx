import React from "react";

import * as yup from "yup";

import { Input, Button } from "formikcomponents";
import Form from "formikcomponents/Form";

import FormStoriesDocs from "!raw-loader!./FormStories.mdx";

const metadata = {
  title: "Formik/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: FormStoriesDocs } },
  },
};

const FormikStory = args => (
  <Form
    formikProps={{
      initialValues: { firstName: "", lastName: "", email: "" },
      validationSchema: yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
      }),
      onSubmit: () => {
        window.alert("Form submitted without errors");

        return Promise.resolve();
      },
    }}
    {...args}
  >
    <div className="flex h-auto w-full flex-col items-start gap-4 p-6">
      <Input required className="w-80" label="First name" name="firstName" />
      <Input required className="w-80" label="Last name" name="lastName" />
      <Input required className="w-80" label="Email" name="email" />
      <Button className="w-20" disabled={false} label="Submit" type="submit" />
    </div>
  </Form>
);

FormikStory.storyName = "Form";
FormikStory.args = { scrollToErrorField: true };

export { FormikStory };

export default metadata;

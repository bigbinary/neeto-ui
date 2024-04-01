import React from "react";

import * as yup from "yup";

import { ActionBlock, Input } from "formikcomponents";
import Form from "formikcomponents/Form";

import ActionBlockDocs from "!raw-loader!./ActionBlockStories.mdx";

const metadata = {
  title: "Formik/ActionBlock",
  component: ActionBlock,
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: ActionBlockDocs } },
  },
};

const FormikStory = args => (
  <Form
    formikProps={{
      initialValues: { firstName: "", lastName: "" },
      validationSchema: yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
      }),
      onSubmit: () => {
        window.alert("Form submitted without errors");

        return Promise.resolve();
      },
    }}
  >
    <div className="m-4 w-1/2 space-y-4">
      <Input required label="First name" name="firstName" />
      <Input required label="Last name" name="lastName" />
      <ActionBlock cancelButtonProps={{ label: "Reset" }} {...args} />
    </div>
  </Form>
);

FormikStory.storyName = "ActionBlock";
FormikStory.args = {};

export { FormikStory };

export default metadata;

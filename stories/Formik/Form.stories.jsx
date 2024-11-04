import React from "react";

import * as yup from "yup";

import { Input, Button } from "formikcomponents";
import Form from "formikcomponents/Form";

const description = `
\`import { Form } from "@bigbinary/neetoui/formik";\`

The neetoUI \`Form\` component serves as an abstraction layer for the \`Formik\` and
\`Form\` components in the \`formik\` library.

It has a built-in mechanism to scroll to the element that gave an error when the
form is submitted. This is handled by the \`ScrollToErrorField\` component within
it. It can be turned on by passing the prop \`scrollToErrorField\`.

Please note that the \`name\` prop of input components must be in dot notation.
For example: \`name="firstName"\` or \`name="addJob.name"\` are both valid. While
\`name="addJob[name]"\` is valid for the form to work, such a name cannot be
parsed by the \`ScrollToErrorField\` component.

In the below story, scroll down to see the submit button and click on it. This
will trigger the validations and scroll to the field which gave the error.
`;

const metadata = {
  title: "Formik/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: description } },
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

const HandlingServerValidationErrors = () => {
  const handleSubmit = (_, actions) =>
    new Promise(resolve => {
      setTimeout(() => {
        actions.setStatus({ username: "Username is already taken!" });
        actions.setSubmitting(false);
        resolve();
      }, 2000);
    });

  return (
    <Form
      formikProps={{
        initialValues: { firstName: "", lastName: "", username: "" },
        validationSchema: yup.object().shape({
          firstName: yup.string().required(),
          username: yup.string().required(),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <div className="flex h-auto w-full flex-col items-start gap-4 p-6">
        <Input required className="w-80" label="First name" name="firstName" />
        <Input required className="w-80" label="Last name" name="lastName" />
        <Input required className="w-80" label="Username" name="username" />
        <Button
          className="w-20"
          disabled={false}
          label="Submit"
          type="submit"
        />
      </div>
    </Form>
  );
};

HandlingServerValidationErrors.storyName =
  "Handling server side validation errors";

const ServerValidationErrorDocs = `
Often times, we will have to handle server-side validation errors in the forms.
It's not ideal to show toasts in such cases; the user would not get any clue about which
field caused the error or what action they should take.

The recommended way to handle this is to set the \`errors\` in the Formik state.
Thus, the user could see the error near the field and act on it. The problem with using the \`errors\`
state of Formik is that it gets mixed with the frontend validation schema, leading to unexpected
results.

To solve this, we have added a feature to the NeetoUI Form and Formik components. We will use \`status\`
in the Formik state to handle this. When there's a server-side validation error, you can set it in \`status\` as
a key-value pair with the \`key\` as the field name and the \`value\` as the error using the \`setStatus\`
helper from the Formik actions.

The Formik components will show the set status as an inline error. It will reset the status when the user
types in something in the field and additionally prevents submission if there are statuses set for some of the fields.
`;

HandlingServerValidationErrors.parameters = {
  docs: { description: { story: ServerValidationErrorDocs } },
};

export { FormikStory, HandlingServerValidationErrors };

export default metadata;

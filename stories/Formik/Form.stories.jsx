import React, { useState } from "react";

import * as yup from "yup";

import { Input, Button } from "formikcomponents";
import Form from "formikcomponents/Form";

import FormStoriesDocs from "!raw-loader!./FormStories.mdx";
import ServerValidationErrorDocs from "!raw-loader!./ServerValidationErrors.mdx";

const metadata = {
  title: "Formik/Form",
  component: Form,
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: FormStoriesDocs } },
  },
};

const responseStatuses = ["success", "error"];

const FormikStory = args => {
  const [status, setStatus] = useState();

  return (
    <Form
      formikProps={{
        initialValues: { firstName: "", lastName: "", email: "" },
        validationSchema: yup.object().shape({
          firstName: yup.string().required(),
          lastName: yup.string().required(),
          email: yup.string().required(),
        }),
        onSubmit: (_, actions) =>
          new Promise(resolve => {
            setTimeout(() => {
              actions.setSubmitting(false);
              resolve();
              const randomStatus =
                responseStatuses[
                  Math.round(Math.random() * 10) % responseStatuses.length
                ];

              setStatus(randomStatus);
            }, 1500);
          }),
      }}
      {...args}
    >
      <div className="flex h-auto w-full flex-col items-start gap-4 p-6">
        <Input required className="w-80" label="First name" name="firstName" />
        <Input required className="w-80" label="Last name" name="lastName" />
        <Input required className="w-80" label="Email" name="email" />
        <Button {...{ status }} disabled={false} label="Submit" type="submit" />
      </div>
    </Form>
  );
};

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

HandlingServerValidationErrors.parameters = {
  docs: { description: { story: ServerValidationErrorDocs } },
};

export { FormikStory, HandlingServerValidationErrors };

export default metadata;

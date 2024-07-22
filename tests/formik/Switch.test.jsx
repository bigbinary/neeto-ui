import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import Form from "formikcomponents/Form";
import FormikSwitch from "formikcomponents/Switch";

const TestSwitch = ({ onSubmit, schema }) => {
  const handleSubmit = (values, { setStatus }) => {
    onSubmit(values, setStatus);
  };

  const validationSchema =
    schema || yup.object().shape({ formikSwitch: yup.boolean() });

  return (
    <Form
      formikProps={{
        initialValues: { formikSwitch: false },
        validationSchema,
        onSubmit: handleSubmit,
      }}
    >
      <FormikSwitch name="formikSwitch" />
      <button type="submit">Submit</button>
    </Form>
  );
};

describe("formik/Switch", () => {
  it("should render without errors", () => {
    render(<TestSwitch />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should submit with correct value", async () => {
    const onSubmit = jest.fn();
    render(<TestSwitch {...{ onSubmit }} />);
    await userEvent.click(screen.getByRole("checkbox"));
    await userEvent.click(screen.getByText(/Submit/i));
    await waitFor(() => {
      const [submittedData] = onSubmit.mock.calls[0];
      expect(submittedData).toStrictEqual({ formikSwitch: true });
    });
  });

  it("should display error message if submission doesn't pass validationScehma", async () => {
    const onSubmit = jest.fn();
    const validationScehma = yup.object().shape({
      formikSwitch: yup.boolean().isTrue("Switch must be on"),
    });

    render(<TestSwitch {...{ onSubmit }} schema={validationScehma} />);
    await userEvent.click(screen.getByText(/Submit/i));
    expect(await screen.findByText(/Switch must be on/i)).toBeInTheDocument();
  });

  it("should display inline error when the status is set", async () => {
    const serverErrorMessage = "Not valid state";
    const onSubmit = (_, setStatus) => {
      setStatus({ formikSwitch: serverErrorMessage });
    };
    render(<TestSwitch {...{ onSubmit }} />);
    const switchComponent = screen.getByRole("checkbox");
    await userEvent.click(switchComponent);
    await userEvent.click(screen.getByText(/Submit/i));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    await userEvent.click(switchComponent);
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});

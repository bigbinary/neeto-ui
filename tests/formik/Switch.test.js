import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { Switch as FormikSwitch } from "../../lib/components/formik";

const TestSwitch = ({ onSubmit, schema }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  const validationSchema =
    schema ||
    yup.object().shape({
      formikSwitch: yup.boolean(),
    });
  return (
    <Formik
      initialValues={{
        formikSwitch: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormikSwitch name="formikSwitch" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

describe("formik/Switch", () => {
  it("should render without errors", () => {
    render(<TestSwitch />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should submit with correct value", async () => {
    const onSubmit = jest.fn();
    render(<TestSwitch onSubmit={onSubmit} />);
    userEvent.click(screen.getByRole("checkbox"));
    userEvent.click(screen.getByText(/Submit/i));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({
        formikSwitch: true,
      })
    );
  });

  it("should display error message if submission doesn't pass validationScehma", async () => {
    const onSubmit = jest.fn();
    const validationScehma = yup.object().shape({
      formikSwitch: yup.boolean().isTrue("Switch must be on"),
    });
    render(<TestSwitch onSubmit={onSubmit} schema={validationScehma} />);
    userEvent.click(screen.getByText(/Submit/i));
    expect(await screen.findByText(/Switch must be on/i)).toBeInTheDocument();
  });
});

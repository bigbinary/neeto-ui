import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import { Checkbox } from "../../lib/components/formik";
import * as yup from "yup";

const TestRadioForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          formikCheckbox: false,
        }}
        validationSchema={yup.object().shape({
          formikCheckbox: yup.boolean().oneOf([true],"Checking the formik checkbox is required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <Checkbox name="formikCheckbox" label="Formik Checkbox" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

describe("formik/Checkbox", () => {
  it("should render without error", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Checkbox name="checkbox" label="Checkbox" />
        </Form>
      </Formik>
    );
    expect(screen.getByLabelText("Checkbox")).toBeInTheDocument();
  });

  it("should return checked when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<TestRadioForm onSubmit={onSubmit} />);
    const checkbox = getByRole("checkbox");
    userEvent.click(checkbox);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({formikCheckbox : true })
    );
  });

  it("should display error when checkbox is not checked", async () => {
    const onSubmit = jest.fn();
    render(<TestRadioForm onSubmit={onSubmit} />);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(
        screen.getByText("Checking the formik checkbox is required")
      ).toBeInTheDocument()
    );
  });
});

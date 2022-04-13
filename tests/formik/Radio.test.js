import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import { Radio } from "../../lib/components/formik";
import * as yup from "yup";

const options = {
  option1: { label: "Option 1", value: "option1" },
  option2: { label: "Option 1", value: "option1" },
};

const TestRadioForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          options: "",
        }}
        validationSchema={yup.object().shape({
          options: yup.string().required("selecting one option is required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <Radio
            name="options"
            label="Options"
          >
            <Radio.Item value="option1" name="options" label="Option 1" />
            <Radio.Item value="option2" name="options" label="Option 2" />
            <button type="submit">Submit</button>
          </Radio>
        </Form>
      </Formik>
    </>
  );
};

describe("formik/Radio", () => {
  it("should render without error", () => {
      render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Radio name="Radio"  onChange={() => {}} value="">
            <Radio.Item label="Option 1" name="options" value="option1" />
          </Radio>
        </Form>
      </Formik>
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("should return selected value when used inside a formik form", async () => {
    const onSubmit = jest.fn();
   const {getAllByRole} = render(<TestRadioForm onSubmit={onSubmit} />);
    const radio = getAllByRole("radio");
    userEvent.click(radio[0]);
    expect(radio[0]).toBeChecked();
    expect(radio[1]).not.toBeChecked();
    userEvent.click(radio[1]);
    expect(radio[0]).not.toBeChecked();
    expect(radio[1]).toBeChecked();
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({options: 'option2'})
    );
  });

  it("should display error when no option is selected", async () => {
    const onSubmit = jest.fn();
    const {getAllByRole} =render(<TestRadioForm onSubmit={onSubmit} />);
    const radio = getAllByRole("radio");
    expect(radio[0]).not.toBeChecked();
    expect(radio[1]).not.toBeChecked();
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() => expect(screen.getByText("selecting one option is required")).toBeInTheDocument());
  });
});

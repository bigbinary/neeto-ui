import React from "react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import { Radio } from "../../lib/components/formik";
import * as yup from "yup";

const TestRadioForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
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
          <Radio name="Radio">
            <Radio.Item label="Option 1" name="options" value="option1" />
          </Radio>
        </Form>
      </Formik>
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("should return selected option value when used inside a formik form", async () => {
    const onSubmit = jest.fn();
   const {getAllByRole} = render(<TestRadioForm onSubmit={onSubmit} />);
    const radio = getAllByRole("radio");
    userEvent.click(radio[0]);
    userEvent.click(radio[1]);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({options: 'option2'})
    );
  });

  it("should display error when no option is selected", async () => {
    const onSubmit = jest.fn();
    render(<TestRadioForm onSubmit={onSubmit} />);
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() => expect(screen.getByText("selecting one option is required")).toBeInTheDocument());
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import { Button, Input } from "../../lib/components/formik";
import * as yup from "yup";

const TestButtonForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={{ name: "Oliver" }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Name is required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input name="name" label="Name" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

const renderTestComponent = () => {
  const onSubmit = jest.fn();
  render(<TestButtonForm onSubmit={onSubmit} />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  return { input, button, onSubmit };
};

describe("formik/Button", () => {
  it("Should render without error", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Button label="Submit" type="submit" />
        </Form>
      </Formik>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should be enabled if formik value differs from initial value", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    userEvent.type(input, " Smith");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith({ name: "Oliver Smith" })
    );
  });

  it("Should be disabled if formik value is same as initial value", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    userEvent.type(input, "{selectall}{backspace}"); // clear everything
    userEvent.type(input, "Oliver"); // retype initial value
    // button disabled: no change in form values
    await waitFor(() => expect(button).toBeDisabled());
    userEvent.click(button);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("Should be disabled if form contains errors", async () => {
    const { input, button, onSubmit } = renderTestComponent();
    userEvent.type(input, "{selectall}{backspace}"); // clear everything
    // error: name is required; button disabled
    await waitFor(() => expect(button).toBeDisabled());
    userEvent.click(button);
    await waitFor(() => expect(onSubmit).not.toBeCalled());
  });

  it("Should be disabled during submission", async () => {
    render(<TestButtonForm onSubmit={new Promise(() => {})} />); // will be submitting forever
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    userEvent.type(input, " Smith");
    await waitFor(() => expect(button).not.toBeDisabled());
    userEvent.click(button);
    await waitFor(() => expect(button).toBeDisabled());
  });
});

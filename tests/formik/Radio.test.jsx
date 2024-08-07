import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as yup from "yup";

import Form from "formikcomponents/Form";
import Radio from "formikcomponents/Radio";

const TestRadioForm = ({ onSubmit }) => {
  const handleSubmit = (values, { setStatus }) => {
    onSubmit(values, setStatus);
  };

  return (
    <Form
      formikProps={{
        initialValues: { options: "" },
        validationSchema: yup.object().shape({
          options: yup.string().required("Selecting an option is required."),
        }),
        onSubmit: handleSubmit,
      }}
    >
      <Radio label="Options" name="options">
        <Radio.Item label="Option 1" name="options" value="option1" />
        <Radio.Item label="Option 2" name="options" value="option2" />
        <button type="submit">Submit</button>
      </Radio>
    </Form>
  );
};

describe("formik/Radio", () => {
  it("should render without error", () => {
    render(
      <Form formikProps={{ initialValues: {}, onSubmit: () => {} }}>
        <Radio name="Radio">
          <Radio.Item label="Option 1" name="options" value="option1" />
        </Radio>
      </Form>
    );
    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
  });

  it("should return selected option value when used inside a formik form", async () => {
    const onSubmit = jest.fn();
    render(<TestRadioForm {...{ onSubmit }} />);
    const radio = screen.getAllByRole("radio");
    await userEvent.click(radio[0]);
    await userEvent.click(radio[1]);
    await userEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      const [submittedData] = onSubmit.mock.calls[0];
      expect(submittedData).toStrictEqual({ options: "option2" });
    });
  });

  it("should display error when no option is selected", async () => {
    const onSubmit = jest.fn();
    render(<TestRadioForm {...{ onSubmit }} />);
    await userEvent.click(screen.getByText("Submit"));
    expect(
      await screen.findByText("Selecting an option is required.")
    ).toBeInTheDocument();
  });

  it("should display inline error when the status is set", async () => {
    const serverErrorMessage = "Not a valid option";
    const onSubmit = (_, setStatus) => {
      setStatus({ options: serverErrorMessage });
    };
    render(<TestRadioForm {...{ onSubmit }} />);
    const radio = screen.getAllByRole("radio");
    await userEvent.click(radio[1]);
    await userEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText(serverErrorMessage)).toBeVisible();

    await userEvent.click(radio[0]);
    expect(screen.queryByText(serverErrorMessage)).not.toBeInTheDocument();
  });
});

/* eslint-disable @bigbinary/neeto/use-common-routes */
import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { repeat } from "ramda";
import { MemoryRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";

import BlockNavigation from "formikcomponents/BlockNavigation";
import Form from "formikcomponents/Form";
import Input from "formikcomponents/Input";

const firstName = "Oliver",
  lastName = "Smith";
const TestComponent = () => <div>Home page</div>;
const mockSubmit = jest.fn();
const TestForm = ({ isDirty }) => (
  <>
    <Link to="/home">Home</Link>
    <Form
      formikProps={{
        initialValues: { firstName, lastName },
        validationSchema: yup.object().shape({
          firstName: yup.string().required("First name is required"),
          lastName: yup.string().required("Last name is required"),
        }),
        onSubmit: mockSubmit,
      }}
    >
      <BlockNavigation {...{ isDirty }} />
      <Input
        label="First name"
        name="firstName"
        placeholder="First name"
        type="text"
      />
      <Input
        label="Last name"
        name="lastName"
        placeholder="Last name"
        type="text"
      />
    </Form>
  </>
);

const TestBlockNavigation = ({ isDirty }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <TestForm {...{ isDirty }} />
      </Route>
      <Route component={TestComponent} path="/home" />
    </Switch>
  </Router>
);

describe("formik/BlockNavigation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render without errors", () => {
    render(<TestBlockNavigation />);

    expect(screen.getByPlaceholderText("First name")).toBeInTheDocument();
    expect(screen.queryByText(/Home page/i)).not.toBeInTheDocument();
  });

  it("should allow navigation when form is empty", async () => {
    render(<TestBlockNavigation />);

    await userEvent.click(screen.getByRole("link"));
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });

  it("should not allow navigation when form isn't empty", async () => {
    render(<TestBlockNavigation />);

    const firstNameInput = screen.getByPlaceholderText("First name");
    await userEvent.type(firstNameInput, "Sam");
    await userEvent.click(screen.getByRole("link"));

    expect(screen.queryByText(/Home page/i)).not.toBeInTheDocument();
  });

  it("should not allow navigation if isDirty prop is true", async () => {
    render(<TestBlockNavigation isDirty />);

    await userEvent.click(screen.getByRole("link"));
    expect(screen.queryByText(/Home page/i)).not.toBeInTheDocument();
  });

  it("should display an Alert modal with Continue and Cancel buttons", async () => {
    render(<TestBlockNavigation isDirty />);

    await userEvent.click(screen.getByRole("link"));
    expect(screen.getByText(/You have unsaved changes/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Discard changes" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Save and continue" })
    ).toBeInTheDocument();
  });

  it("should close the modal and return to previous state on clicking the close button", async () => {
    render(<TestBlockNavigation isDirty />);

    const firstNameInput = screen.getByPlaceholderText("First name");

    await userEvent.click(screen.getByRole("link"));

    const alertCloseButton = screen.getByTestId("close-button");
    await userEvent.click(alertCloseButton);

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    expect(firstNameInput).toBeInTheDocument();
  });

  it("should allow navigation and reset the form if the Discard changes button is clicked", async () => {
    render(<TestBlockNavigation isDirty />);

    const firstNameInput = screen.getByPlaceholderText("First name");
    await userEvent.type(
      firstNameInput,
      repeat("{backspace}", firstName.length).join("")
    );
    await userEvent.type(firstNameInput, "Sam");

    expect(firstNameInput.value).toBe("Sam");

    await userEvent.click(screen.getByRole("link"));

    const continueButton = screen.getByRole("button", {
      name: "Discard changes",
    });
    await userEvent.click(continueButton);

    await waitFor(() => expect(continueButton).not.toBeInTheDocument());
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("should allow navigation and save the form if the Save and continue button is clicked", async () => {
    render(<TestBlockNavigation isDirty />);

    const firstNameInput = screen.getByPlaceholderText("First name");
    await userEvent.type(
      firstNameInput,
      repeat("{backspace}", firstName.length).join("")
    );
    await userEvent.type(firstNameInput, "Sam");

    expect(firstNameInput.value).toBe("Sam");

    await userEvent.click(screen.getByRole("link"));

    const saveButton = screen.getByRole("button", {
      name: "Save and continue",
    });
    await userEvent.click(saveButton);

    await waitFor(() => expect(saveButton).not.toBeInTheDocument());
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
    expect(mockSubmit).toBeCalledTimes(1);
  });

  it("should not allow navigation and save the form if the Save and continue button is clicked and the form has an error", async () => {
    render(<TestBlockNavigation isDirty />);

    const lastNameInput = screen.getByPlaceholderText("Last name");
    await userEvent.type(
      lastNameInput,
      repeat("{backspace}", lastName.length).join("")
    );
    expect(lastNameInput.value).toBe("");

    await userEvent.click(screen.getByRole("link"));

    const saveButton = screen.getByRole("button", {
      name: "Save and continue",
    });
    await userEvent.click(saveButton);

    await waitFor(() => expect(saveButton).not.toBeInTheDocument());
    expect(screen.queryByText(/Home page/i)).not.toBeInTheDocument();
    expect(mockSubmit).not.toBeCalled();
  });
});

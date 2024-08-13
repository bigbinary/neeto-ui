/* eslint-disable @bigbinary/neeto/use-common-routes */
import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Field } from "formik";
import { repeat } from "ramda";
import { MemoryRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Input } from "components";
import BlockNavigation from "formikcomponents/BlockNavigation";
import Form from "formikcomponents/Form";

const firstName = "Oliver";
const TestComponent = () => <div>Home page</div>;
const mockSubmit = jest.fn();
const TestForm = ({ isDirty }) => (
  <>
    <Link to="/home">Home</Link>
    <Form
      formikProps={{
        initialValues: { firstName },
        onSubmit: mockSubmit,
      }}
    >
      <BlockNavigation {...{ isDirty }} />
      <Field name="firstName">
        {({ field }) => (
          <Input
            {...field}
            label="First name"
            placeholder="First name"
            type="text"
          />
        )}
      </Field>
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
  it("should render without errors", () => {
    render(<TestBlockNavigation />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText(/Home page/i)).not.toBeInTheDocument();
  });

  it("should allow navigation when form is empty", async () => {
    render(<TestBlockNavigation />);

    await userEvent.click(screen.getByRole("link"));
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });

  it("should not allow navigation when form isn't empty", async () => {
    render(<TestBlockNavigation />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Sam");
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

    const input = screen.getByRole("textbox");

    await userEvent.click(screen.getByRole("link"));

    const alertCloseButton = screen.getByTestId("close-button");
    await userEvent.click(alertCloseButton);

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
    expect(input).toBeInTheDocument();
  });

  it("should allow navigation and reset the form if the Discard changes button is clicked", async () => {
    render(<TestBlockNavigation isDirty />);

    const input = screen.getByRole("textbox");
    await userEvent.type(
      input,
      repeat("{backspace}", firstName.length).join("")
    );
    await userEvent.type(input, "Testing discard changes");

    expect(input.value).toBe("Testing discard changes");

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

    const input = screen.getByRole("textbox");
    await userEvent.type(
      input,
      repeat("{backspace}", firstName.length).join("")
    );
    await userEvent.type(input, "Testing save changes");

    expect(input.value).toBe("Testing save changes");

    await userEvent.click(screen.getByRole("link"));

    const saveButton = screen.getByRole("button", {
      name: "Save and continue",
    });
    await userEvent.click(saveButton);

    await waitFor(() => expect(saveButton).not.toBeInTheDocument());
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
    expect(mockSubmit).toBeCalledTimes(1);
  });
});

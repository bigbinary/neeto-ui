/* eslint-disable @bigbinary/neeto/use-common-routes */
import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Field } from "formik";
import { MemoryRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Input } from "components";
import { BlockNavigation, Form } from "components/formik";

const TestComponent = () => <div>test page</div>;

const TestForm = ({ isDirty }) => (
  <>
    <Link to="/test">Navigate</Link>
    <Form formikProps={{ initialValues: { formikInput: "test" } }}>
      <BlockNavigation isDirty={isDirty} />
      <Field name="formikInput">
        {({ field }) => (
          <Input
            {...field}
            label="Formik Input"
            placeholder="Type Something"
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
        <TestForm isDirty={isDirty} />
      </Route>
      <Route component={TestComponent} path="/test" />
    </Switch>
  </Router>
);

describe("formik/BlockNavigation", () => {
  it("should render without errors", () => {
    render(<TestBlockNavigation />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByText(/test page/i)).not.toBeInTheDocument();
  });

  it("should allow navigation when form is empty", () => {
    render(<TestBlockNavigation />);

    userEvent.click(screen.getByRole("link"));
    expect(screen.getByText(/test page/i)).toBeInTheDocument();
  });

  it("should not allow navigation when form isn't empty", async () => {
    render(<TestBlockNavigation />);

    const input = screen.getByRole("textbox");
    await waitFor(() => {
      userEvent.type(input, "test");
      userEvent.click(screen.getByRole("link"));
    });

    expect(screen.queryByText(/test page/i)).not.toBeInTheDocument();
  });

  it("should not allow navigation if isDirty prop is true", () => {
    render(<TestBlockNavigation isDirty />);

    userEvent.click(screen.getByRole("link"));
    expect(screen.queryByText(/test page/i)).not.toBeInTheDocument();
  });

  it("should display an Alert modal with Continue and Cancel buttons", () => {
    render(<TestBlockNavigation isDirty />);

    userEvent.click(screen.getByRole("link"));
    expect(screen.getByText(/You have unsaved changes/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Discard changes" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("should close the modal and return to previous state on clicking the Cancel button", async () => {
    render(<TestBlockNavigation isDirty />);

    const input = screen.getByRole("textbox");

    userEvent.click(screen.getByRole("link"));

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    userEvent.click(cancelButton);

    await waitFor(() => expect(cancelButton).not.toBeInTheDocument());
    expect(input).toBeInTheDocument();
  });

  it("should allow navigation if the Continue button is clicked", async () => {
    render(<TestBlockNavigation isDirty />);

    userEvent.click(screen.getByRole("link"));

    const continueButton = screen.getByRole("button", {
      name: "Discard changes",
    });
    userEvent.click(continueButton);

    await waitFor(() => expect(continueButton).not.toBeInTheDocument());
    expect(screen.getByText(/test page/i)).toBeInTheDocument();
  });
});

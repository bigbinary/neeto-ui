import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as yup from "yup";

import { Button as NeetoUIButton } from "components";
import { Input, BlockNavigation } from "formikcomponents";
import Button from "formikcomponents/Button";
import Form from "formikcomponents/Form";

import BlockNavigationStoriesDocs from "!raw-loader!./BlockNavigationStories.mdx";

const metadata = {
  title: "Formik/BlockNavigation",
  component: BlockNavigation,
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: BlockNavigationStoriesDocs } },
  },
};

const FormikStory = args => (
  <Router>
    <Switch>
      <Route exact path="*">
        <div className="sp space-y-5 space-x-5 p-10">
          <NeetoUIButton
            iconPosition="left"
            label="Go back"
            style="secondary"
            to="/test"
            type="button"
          />
          <Form
            formikProps={{
              initialValues: { firstName: "Oliver", lastName: "" },
              validationSchema: yup.object({
                firstName: yup.string().required("First name is required"),
                lastName: yup.string().required("Last name is required"),
              }),
              onSubmit: () => {
                window.alert("Form submitted without errors");

                return Promise.resolve();
              },
            }}
            {...args}
          >
            <BlockNavigation />
            <div className="space-y-4">
              <Input required label="First name" name="firstName" />
              <Input required label="Last name" name="lastName" />
              <div className="flex justify-center">
                <Button label="Submit" type="submit" />
              </div>
            </div>
          </Form>
        </div>
      </Route>
      {/* eslint-disable-next-line @bigbinary/neeto/use-common-routes */}
      <Route component={<div>Test</div>} path="/test" />
    </Switch>
  </Router>
);

FormikStory.storyName = "BlockNavigation";
FormikStory.args = {};

export { FormikStory };

export default metadata;

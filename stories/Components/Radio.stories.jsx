import React, { useState } from "react";

import { Formik, Form } from "formik";

import Button from "components/Button";
import Radio from "components/Radio";
import Typography from "components/Typography";
import { Radio as FormikRadio } from "formikcomponents";

import RadioCSSCustomization from "!raw-loader!./RadioStoriesDocs/RadioCSSCustomization.mdx";
import RadioDocs from "!raw-loader!./RadioStoriesDocs/RadioDocs.mdx";

const metadata = {
  title: "Components/Radio",
  component: Radio,
  subcomponents: { "Radio.Item": Radio.Item },
  parameters: {
    layout: "padded",
    docs: { description: { component: RadioDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A10",
    },
  },
};

const Options = args => (
  <Radio {...args}>
    <Radio.Item label="Option 1" name="options" value="Option1" />
    <Radio.Item label="Option 2" name="options" value="Option2" />
  </Radio>
);

Options.args = { label: "Radio options" };

const OptionsStacked = args => (
  <Radio {...args}>
    <Radio.Item label="Option 1" name="stackedOptions" value="Option1" />
    <Radio.Item label="Option 2" name="stackedOptions" value="Option2" />
  </Radio>
);

OptionsStacked.args = {
  label: "Radio options stacked",
  stacked: true,
};
OptionsStacked.storyName = "Options stacked";

const ControlledRadio = args => {
  const [value, setValue] = React.useState("");

  return (
    <Radio {...{ ...args, value }} onChange={e => setValue(e.target.value)}>
      <Radio.Item label="Option 1" name="controlledOptions" value="Option1" />
      <Radio.Item label="Option 2" name="controlledOptions" value="Option2" />
      <Radio.Item label="Option 3" name="controlledOptions" value="Option3" />
      <Radio.Item label="Option 4" name="controlledOptions" value="Option4" />
      <Radio.Item label="Option 5" name="controlledOptions" value="Option5" />
    </Radio>
  );
};

const FormikRadioStory = args => {
  const [values, setValues] = useState({});

  return (
    <Formik
      initialValues={{ reaction: "Happy" }}
      onSubmit={values => setValues(values)}
    >
      <Form className="space-y-4">
        <FormikRadio {...args} name="reaction">
          {[
            { label: "Happy", value: "Happy" },
            { label: "Sad", value: "Sad" },
            { label: "Neutral", value: "Neutral" },
          ].map(option => (
            <FormikRadio.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </FormikRadio>
        <Button label="Submit" type="submit" />
        <Typography>Reaction: {values.reaction} </Typography>
      </Form>
    </Formik>
  );
};

FormikRadioStory.storyName = "Formik Radio";
FormikRadioStory.parameters = {
  docs: {
    description: {
      story:
        "`import { Radio as FormikRadio } from '@bigbinary/neetoui/formik';`",
    },
  },
};

const CSSCustomization = args => (
  <Radio {...args}>
    <Radio.Item label="Option 1" name="options" value="Option1" />
    <Radio.Item label="Option 2" name="options" value="Option2" />
  </Radio>
);

CSSCustomization.storyName = "Radio CSS Customization";

CSSCustomization.args = {
  label: "Custom Radio options",
  className: "neetix-radio",
};

CSSCustomization.parameters = {
  docs: { description: { story: RadioCSSCustomization } },
};

export {
  Options,
  OptionsStacked,
  ControlledRadio,
  FormikRadioStory,
  CSSCustomization,
};

export default metadata;

import React, { useState } from "react";
import { Formik, Form } from "formik";

import Radio from "components/Radio";
import Button from "components/Button";
import Typography from "components/Typography";
import { Radio as FormikRadio } from "components/formik";

export default {
  title: "Components/Radio",
  component: Radio,
  subcomponents: {
    "Radio.Item": Radio.Item,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Radio } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A10",
    },
  },
};

export const Options = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="options" label="Option 1" value="Option1" />
      <Radio.Item name="options" label="Option 2" value="Option2" />
    </Radio>
  );
};

Options.args = {
  label: "Radio options",
};

export const OptionsStacked = (args) => {
  return (
    <Radio {...args}>
      <Radio.Item name="stackedOptions" label="Option 1" value="Option1" />
      <Radio.Item name="stackedOptions" label="Option 2" value="Option2" />
    </Radio>
  );
};

OptionsStacked.args = {
  label: "Radio options stacked",
  stacked: true,
};
OptionsStacked.storyName = "Options stacked";

export const ControlledRadio = (args) => {
  const [value, setValue] = React.useState("");
  return (
    <Radio {...args} onChange={(e) => setValue(e.target.value)} value={value}>
      <Radio.Item name="controlledOptions" label="Option 1" value="Option1" />
      <Radio.Item name="controlledOptions" label="Option 2" value="Option2" />
      <Radio.Item name="controlledOptions" label="Option 3" value="Option3" />
      <Radio.Item name="controlledOptions" label="Option 4" value="Option4" />
      <Radio.Item name="controlledOptions" label="Option 5" value="Option5" />
    </Radio>
  );
};

export const FormikRadioStory = () => {
  const [values, setValues] = useState({});

  return (
    <>
      <Formik
        initialValues={{ reaction: "Happy" }}
        onSubmit={(values) => setValues(values)}
      >
        <Form className="space-y-4">
          <FormikRadio name="reaction">
            {[
              { label: "Happy", value: "Happy" },
              { label: "Sad", value: "Sad" },
              { label: "Neutral", value: "Neutral" },
            ].map((option) => (
              <FormikRadio.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </FormikRadio>
          <Button type="submit" label="Submit" />
          <Typography>Reaction: {values.reaction} </Typography>
        </Form>
      </Formik>
    </>
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

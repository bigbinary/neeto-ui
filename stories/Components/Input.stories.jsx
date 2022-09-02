import React, { useState } from "react";
import { Search } from "@bigbinary/neeto-icons";

import Input from "../../lib/components/Input";
import Button from "../../lib/components/Button";
import Typography from "../../lib/components/Typography";
import { Input as FormikInput } from "../../lib/components/formik";
import { Formik, Form } from "formik";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Input } from "@bigbinary/neetoui";`',
      },
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A11",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Input label",
  placeholder: "Input Placeholder",
};

// eslint-disable-next-line no-empty-pattern
export const Sizes = ({}) => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Input label="Small" placeholder="Input Placeholder" size="small" />
      <Input label="Medium" placeholder="Input Placeholder" />
      <Input label="Large" placeholder="Input Placeholder" size="large" />
    </div>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState("BigBinary");
  return (
    <Input
      prefix={<Search />}
      label="Controlled Input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// eslint-disable-next-line no-empty-pattern
export const Required = ({}) => (
  <Input
    label="Required Input"
    placeholder="Input Placeholder"
    required={true}
  />
);

// eslint-disable-next-line no-empty-pattern
export const Disabled = ({}) => (
  <Input
    label="Disabled Input"
    placeholder="Input Placeholder"
    disabled={true}
  />
);

export const Error = Template.bind({});
Error.args = {
  label: "Error",
  error: "Provide valid email",
  placeholder: "Input Placeholder",
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "Error",
  helpText: "This is help text.",
  placeholder: "Input Placeholder",
};
HelpText.storyName = "Help text";

export const NakedInput = Template.bind({});
NakedInput.args = {
  label: "Naked Input Field",
  nakedInput: true,
  placeholder: "Input Placeholder",
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  label: "Search",
  prefix: <Search />,
  suffix: ".neetohelp.com",
  type: "search",
  placeholder: "Input search text",
};

export const InputWithMaxLength = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Input
        label="Input with max length"
        maxLength={10}
        placeholder="Input Placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample I"
        placeholder="Input Placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample In"
        placeholder="Input Placeholder"
      />
      <Input
        label="Input with max length"
        maxLength={10}
        value="Sample Input"
        placeholder="Input Placeholder"
      />
    </div>
  );
};
InputWithMaxLength.storyName = "Input with max length";

export const FormikInputStory = ({}) => {
  const [values, setValues] = useState({});
  return (
    <>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => setValues(values)}
      >
        <Form className="space-y-2">
          <FormikInput name="name" label="Name" />
          <Button type="submit" label="Submit" />
          <Typography>Name: {values.name} </Typography>
        </Form>
      </Formik>
    </>
  );
};

FormikInputStory.storyName = "Formik Input";
FormikInputStory.parameters = {
  docs: {
    description: {
      story:
        "`import { Input as FormikInput } from '@bigbinary/neetoui/formik';`",
    },
  },
};

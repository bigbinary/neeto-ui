import React, { useState } from "react";

import EmailInput from "../../lib/components/EmailInput";

export default {
  title: "Components/Email Input",
  component: EmailInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { EmailInput } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = args => <EmailInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Emails",
  placeholder: "",
  error: "",
};

export const Controlled = () => {
  const [emails, setEmails] = useState([]);

  return (
    <EmailInput
      label="Emails"
      value={emails}
      onChange={emails => setEmails(emails)}
    />
  );
};

export const Error = () => <EmailInput error="Please make sure all emails are valid." />;

export const Disabled = () => <EmailInput disabled />;
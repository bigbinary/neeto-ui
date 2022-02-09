import React, { useState } from "react";

import EmailInput from "../../lib/components/EmailInput";

export default {
  title: "Components/Multiple Email Input",
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

const Template = (args) => <EmailInput {...args} />;

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
      onChange={(emails) => setEmails(emails)}
    />
  );
};

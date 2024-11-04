import React, { useState } from "react";

import { LiveProvider, LivePreview } from "react-live";
import MonacoEditor from "react-monaco-editor";

import * as atoms from "atoms";
import * as components from "components";
import * as FormikComponents from "formikcomponents";
import * as hooks from "hooks";

import { DEFAULT_PLAYGROUND_CODE } from "./constants";

const LivePlayground = () => {
  const [code, setCode] = useState(DEFAULT_PLAYGROUND_CODE);

  return (
    <div className="flex h-full flex-col">
      <div
        className="min-h-96 m-4 mt-0 flex-grow overflow-y-auto border-2 p-4"
        style={{ minHeight: "300px" }}
      >
        <LiveProvider
          {...{ code }}
          scope={{ ...components, ...atoms, ...hooks, FormikComponents, React }}
        >
          <LivePreview />
        </LiveProvider>
      </div>
      <div className="w-full flex-grow">
        <MonacoEditor
          height="300px"
          language="javascript"
          value={code}
          onChange={setCode}
        />
      </div>
    </div>
  );
};

const description = `
We use \`react-live\` to render the code you write in the editor. They have documented what it can [render](https://commerce.nearform.com/open-source/react-live/docs/usage).
Please read the documentation for a better understanding of how to use the editor.

All the NeetoUI components, atoms, and hooks are set in the scope. You can directly use them:
\`<Button label="hello world" />\`

To use Formik components, please use them from the FormikComponents namespace:


Additionally, React is also set in the scope. To use hooks, you can call them as \`React.useState\`:
`;

const metadata = {
  title: "Live Playground",
  component: LivePlayground,
  parameters: { docs: { description: { component: description } } },
};

export default metadata;

export { LivePlayground };

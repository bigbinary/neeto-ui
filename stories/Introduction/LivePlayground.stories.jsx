import React, { useState } from "react";

import { LiveProvider, LivePreview } from "react-live";
import MonacoEditor from "react-monaco-editor";

import * as atoms from "atoms";
import * as components from "components";
import * as FormikComponents from "formikcomponents";
import * as hooks from "hooks";

import LivePlaygroundDocs from "!raw-loader!./LivePlaygroundDocs/LivePlaygroundUsage.mdx";

const LivePlaygroundCard = () => {
  const [code, setCode] = useState("\n");

  return (
    <div className="flex h-full flex-col">
      <div className="w-full flex-grow">
        <MonacoEditor
          height="300px"
          language="jsx"
          theme="vs-dark"
          value={code}
          onChange={setCode}
        />
      </div>
      <h3 className="p-4">Preview</h3>
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
    </div>
  );
};

const metadata = {
  title: "Live Playground",
  component: LivePlaygroundCard,
  parameters: { docs: { description: { component: LivePlaygroundDocs } } },
};

export default metadata;

export { LivePlaygroundCard };

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
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: "1", width: "100%" }}>
        <MonacoEditor
          height="300px"
          language="jsx"
          theme="vs-dark"
          value={code}
          onChange={setCode}
        />
      </div>
      <div
        style={{
          flex: "1",
          width: "100%",
          padding: "10px",
          overflowY: "auto",
        }}
      >
        <h3>Live Preview:</h3>
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

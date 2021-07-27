## Importing

NeetoUI exports all it's component as named exports. You can individually import necessary components in the following way:

```code
lang: jsx
---
import { Button, Tooltip, } from "@bigbinary/neetoui";
```

If you need access to an object that contains references to all the components you can do a wildcard import. This way, you can render dynamic components from NeetoUI.

```code
lang: jsx
---
import React from "react";
import * as NeetoUI from "@bigbinary/neetoui";

export default function index() {
  const Button = NeetoUI.Button;

  // get a random component
  const componentName = Math.random() > 0.5 ? "Badge" : "Avatar";
  const MyDynamicComponent = NeetoUI[componentName];

  return (
    <div>
      <Button />
      <MyDynamicComponent />
    </div>
  );
}
```

### Acceptable props for Components

Refer documentation of each component for a detailed list of available props and their usage. [Accordion Component](https://neeto-ui.netlify.app/#/accordion) would be a pretty good start.

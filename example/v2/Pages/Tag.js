import React from 'react';
import { Tag } from '../../../lib/v2';
import Header from '../Header';

const Tabs = () => {
  return (
    <>
      <Header title="Tags" />
      <div className="p-6 space-y-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <div className="flex flex-wrap space-x-4">
              <h3>Default: </h3>
              <Tag content="Small" />
              <Tag type="large" content="Large" />
              <Tag type="solid" content="Small Solid" />
              <Tag type="largeSolid" content="Large Solid" />
            </div>
            <div className="flex flex-wrap space-x-4">
              <h3>Icons: </h3>
              <Tag icon="ri-pencil-line" content="Small" />
              <Tag icon="ri-pencil-line" type="large" content="Large" />
              <Tag icon="ri-pencil-line" type="solid" content="Small Solid" />
              <Tag icon="ri-pencil-line" type="largeSolid" content="Large Solid" />
            </div>
            <div className="flex flex-wrap space-x-4">
              <h3>Clear button: </h3>
              <Tag icon="ri-pencil-line" content="Small" showClearOption />
              <Tag icon="ri-pencil-line" type="large" content="Large" showClearOption />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
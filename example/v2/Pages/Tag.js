import React from 'react';
import { Tag } from '../../../lib/v2';
import Header from "../Header";

const Tabs = () => {
  return (
    <>
      <Header title="Tags" />
      <div className="flex flex-col space-y-4 p-2">
        <div className="flex flex-wrap space-x-4">
          <Tag content="Small" />
          <Tag type="large" content="Large" />
          <Tag type="solid" content="Small Solid" />
          <Tag type="largeSolid" content="Large Solid" />
        </div>
        <div className="flex flex-wrap space-x-4">
          <Tag icon="ri-pencil-line" content="Small" />
          <Tag icon="ri-pencil-line" type="large" content="Large" />
          <Tag icon="ri-pencil-line" type="solid" content="Small Solid" showClearOption />
          <Tag icon="ri-pencil-line" type="largeSolid" content="Large Solid" showClearOption />
        </div>
      </div>
    </>
  );
};

export default Tabs;
import React from 'react';
import { Tag } from '../../../lib/v2';
import Header from '../Header';

const Tabs = () => {

  const onClick = () => {
    alert('onClick event!');
  };

  return (
    <>
      <Header title="Tags" />
      <div className="p-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <div className="flex space-x-4">
              <h3>Default: </h3>
              <Tag content="Small" />
              <Tag type="large" content="Large" />
              <Tag type="solid" content="Small Solid" />
              <Tag type="largeSolid" content="Large Solid" />
            </div>
            <div className="flex space-x-4">
              <h3>Icons: </h3>
              <Tag icon="ri-pencil-line" content="Small" />
              <Tag icon="ri-pencil-line" type="large" content="Large" />
              <Tag icon="ri-pencil-line" type="solid" content="Small Solid" />
              <Tag icon="ri-pencil-line" type="largeSolid" content="Large Solid" />
            </div>
            <div className="flex space-x-4">
              <h3>Clear button: </h3>
              <Tag icon="ri-pencil-line" onClick={onClick} content="Small" showClearOption />
              <Tag icon="ri-pencil-line" onClick={onClick} type="large" content="Large" showClearOption />
              <Tag icon="ri-pencil-line" onClick={onClick} type="solid" content="Small Solid" showClearOption />
              <Tag icon="ri-pencil-line" onClick={onClick} type="largeSolid" content="Large Solid" showClearOption />
            </div>
            <div className="flex space-x-4">
              <h3>Color: </h3>
              <Tag content="Green" type="color" color="#00BA88" />
              <Tag content="Yellow" type="color" color="#F3CD82" />
              <Tag content="Blue" type="color" color="#5E5CE6" />
              <Tag content="Red" type="color" color="#F56A58" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
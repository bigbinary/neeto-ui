import React from 'react';
import Header from '../Header';
import {
  Avatar
} from '../../../lib/v2';

function Avatars() {
  const onClick = () => {
    alert('onClick event!');
  };

  return (
    <>
      <Header title="Avatar" />
      <div className="p-6">
        <div className="flex p-4 space-x-4 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} fallbackText="AB" size="small" imageUrl="" />
            <Avatar onClick={onClick} fallbackText="CD" size="medium" imageUrl="" />
            <Avatar onClick={onClick} fallbackText="EF" size="large" imageUrl="" />
            <Avatar onClick={onClick} fallbackText="GH" size="xlarge" imageUrl="" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} fallbackText="IJ" size="small" imageUrl="" isRounded />
            <Avatar onClick={onClick} fallbackText="KL" size="medium" imageUrl="" isRounded />
            <Avatar onClick={onClick} fallbackText="MN" size="large" imageUrl="" isRounded />
            <Avatar onClick={onClick} fallbackText="OP" size="xlarge" imageUrl="" isRounded />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} fallbackText="WR" size="small" imageUrl="https://i.pravatar.cc/300" />
            <Avatar onClick={onClick} fallbackText="ST" size="medium" imageUrl="https://i.pravatar.cc/300" />
            <Avatar onClick={onClick} fallbackText="UV" size="large" imageUrl="https://i.pravatar.cc/300" />
            <Avatar onClick={onClick} fallbackText="WX" size="xlarge" imageUrl="https://i.pravatar.cc/300" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} fallbackText="YZ" size="small" imageUrl="https://i.pravatar.cc/300" />
            <Avatar onClick={onClick} fallbackText="AB" size="medium" imageUrl="https://i.pravatar.cc/300" isRounded />
            <Avatar onClick={onClick} fallbackText="CD" size="large" imageUrl="https://i.pravatar.cc/300" isRounded />
            <Avatar onClick={onClick} fallbackText="EF" size="xlarge" imageUrl="https://i.pravatar.cc/300" isRounded />
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatars;

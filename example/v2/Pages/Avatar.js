import React from 'react';
import Header from '../Header';
import {
  Avatar
} from '../../../lib/v2';

function Avatars() {
  const imageUrl = 'https://i.pravatar.cc/300';
  const onClick = () => {
    alert('onClick event!');
  };

  return (
    <>
      <Header title="Avatar" />
      <div className="p-6">
        <div className="flex p-4 space-x-4 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: 'AB' }} size="small" />
            <Avatar onClick={onClick} content={{ text: 'CD' }} size="medium" />
            <Avatar onClick={onClick} content={{ text: 'EF' }} size="large" />
            <Avatar onClick={onClick} content={{ text: 'GH' }} size="xlarge" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: 'IJ' }} size="small" status="online" isRounded />
            <Avatar onClick={onClick} content={{ text: 'KL' }} size="medium" status="idle" isRounded />
            <Avatar onClick={onClick} content={{ text: 'MN' }} size="large" status="offline" isRounded />
            <Avatar onClick={onClick} content={{ text: 'OP' }} size="xlarge" status="online" isRounded />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: 'WR', imageUrl }} size="small" />
            <Avatar onClick={onClick} content={{ text: 'ST', imageUrl }} size="medium" />
            <Avatar onClick={onClick} content={{ text: 'UV', imageUrl }} size="large" />
            <Avatar onClick={onClick} content={{ text: 'WX', imageUrl }} size="xlarge" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: 'YZ', imageUrl }} size="small" isRounded />
            <Avatar onClick={onClick} content={{ text: 'AB', imageUrl }} size="medium" isRounded />
            <Avatar onClick={onClick} content={{ text: 'CD', imageUrl }} size="large" isRounded />
            <Avatar onClick={onClick} content={{ text: 'EF', imageUrl }} size="xlarge" isRounded />
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatars;

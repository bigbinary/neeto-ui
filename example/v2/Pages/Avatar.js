import React from "react";
import Header from "../Header";
import { Avatar } from "../../../lib/v2";

function Avatars() {
  const imageUrl = "https://i.pravatar.cc/300";
  const onClick = () => {
    alert("onClick event!");
  };

  return (
    <>
      <Header title="Avatar" />
      <div className="p-6">
        <div className="flex p-4 space-x-4 border border-indigo-500 border-dashed">
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: "Akkshay Lawrence" }} size="small" />
            <Avatar onClick={onClick} content={{ text: "Vinay V" }} size="medium" />
            <Avatar onClick={onClick} content={{ text: "Neeraj Singh" }} size="large" />
            <Avatar onClick={onClick} content={{ text: "Goutham Subramanyam" }} size="xlarge" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: "Akkshay Lawrence" }} size="small" status="online" isRounded />
            <Avatar onClick={onClick} content={{ text: "Vinay V" }} size="medium" status="idle" isRounded />
            <Avatar onClick={onClick} content={{ text: "Neeraj Singh" }} size="large" status="offline" isRounded />
            <Avatar onClick={onClick} content={{ text: "Goutham Subramanyam" }} size="xlarge" status="online"
              isRounded />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: "Akkshay Lawrence", imageUrl }} status="online" size="small" />
            <Avatar onClick={onClick} content={{ text: "Vinay V", imageUrl }} status="idle" size="medium" />
            <Avatar onClick={onClick} content={{ text: "Neeraj Singh", imageUrl }} status="offline" size="large" />
            <Avatar onClick={onClick} content={{ text: "Goutham Subramanyam", imageUrl }} status="online"
              size="xlarge" />
          </div>
          <div className="flex flex-col space-y-4 p-2">
            <Avatar onClick={onClick} content={{ text: "Akkshay Lawrence", imageUrl }} size="small" isRounded />
            <Avatar onClick={onClick} content={{ text: "Vinay V", imageUrl }} size="medium" isRounded />
            <Avatar onClick={onClick} content={{ text: "Neeraj Singh", imageUrl }} size="large" isRounded />
            <Avatar onClick={onClick} content={{ text: "Goutham Subramanyam", imageUrl }} size="xlarge" isRounded />
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatars;

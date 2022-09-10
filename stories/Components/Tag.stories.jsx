/* eslint-disable no-empty-pattern */
import React from "react";
import { Favorite } from "@bigbinary/neeto-icons";

import Tag from "../../lib/components/Tag";
import { icons } from "../constants";

const DEPRECATED_PROPS = {
  color: {
    table: { type: { summary: null } },
    control: false,
  },

  indicatorColor: {
    table: { type: { summary: null } },
    control: false,
  },
};

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Tag } from "@bigbinary/neetoui";`',
      },
    },
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
    },
    ...DEPRECATED_PROPS,
  },
};

const Template = ({ onClose, ...args }) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};

export const Sizes = ({}) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      <Tag label="Large" size="large" />
      <Tag label="Small" size="small" />
    </div>
  );
};

export const Styles = ({}) => {
  return (
    <div className="flex flex-row items-start justify-start space-x-4">
      <Tag label="Primary" style="primary" />
      <Tag label="Secondary" style="secondary" />
      <Tag label="Info" style="info" />
      <Tag label="Success" style="success" />
      <Tag label="Warning" style="warning" />
      <Tag label="Danger" style="danger" />
    </div>
  );
};

export const Types = ({}) => {
  return (
    <div className="space-y-4">
      <div>
        <h5 className="mb-4 capitalize">Outline</h5>
        <div className="space-x-3">
          <Tag type="outline" label="Primary" style="primary" />
          <Tag type="outline" label="Secondary" style="secondary" />
          <Tag type="outline" label="Info" style="info" />
          <Tag type="outline" label="Success" style="success" />
          <Tag type="outline" label="Warning" style="warning" />
          <Tag type="outline" label="Danger" style="danger" />
        </div>
      </div>
      <div>
        <h5 className="mb-4 capitalize">Solid</h5>
        <div className="space-x-3">
          <Tag type="solid" label="Primary" style="primary" />
          <Tag type="solid" label="Secondary" style="secondary" />
          <Tag type="solid" label="Info" style="info" />
          <Tag type="solid" label="Success" style="success" />
          <Tag type="solid" label="Warning" style="warning" />
          <Tag type="solid" label="Danger" style="danger" />
        </div>
      </div>
    </div>
  );
};

export const WithIndicator = ({}) => {
  return (
    <div className="flex flex-row items-start justify-start space-x-4">
      <Tag label="Primary" indicatorStyle="primary" style="secondary" />
      <Tag label="Secondary" indicatorStyle="secondary" style="secondary" />
      <Tag label="Info" indicatorStyle="info" style="secondary" />
      <Tag label="Success" indicatorStyle="success" style="secondary" />
      <Tag label="Warning" indicatorStyle="warning" style="secondary" />
      <Tag label="Danger" indicatorStyle="danger" style="secondary" />
    </div>
  );
};
WithIndicator.storyName = "With indicator";

export const WithIcon = ({}) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      <Tag label="With icon" icon={Favorite} />
      <Tag label="With icon" icon={Favorite} size="large" />
    </div>
  );
};
WithIcon.storyName = "With icon";

export const WithOnClose = ({}) => {
  return (
    <div className="flex flex-row items-center justify-start space-x-4">
      <Tag label="With close icon" onClose={() => {}} />
      <Tag label="With close icon" onClose={() => {}} size="large" />
    </div>
  );
};
WithOnClose.storyName = "With on close";

// export const Variants = () => {
//   const STATUS_TAGS = [
//     { style: "success", label: "Success" },
//     { style: "warning", label: "Warning" },
//     { style: "danger", label: "Danger" },
//     { style: "primary", label: "Primary" },
//     { style: "inactive", label: "Inactive" },
//   ];

//   const INDICATOR_COLORS = [
//     { style: "success", label: "Success" },
//     { style: "warning", label: "Warning" },
//     { style: "danger", label: "Danger" },
//     { style: "primary", label: "Primary" },
//     { style: "inactive", label: "Inactive" },
//   ];

//   const onClose = () => alert("onClose Triggered!");

//   return (
//     <div className="p-6">
//       <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
//         <div className="flex flex-col p-2 space-y-6">
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Outline Small: </h5>
//             <Tag label="Label" />
//             <Tag icon={Favorite} label="Label" />
//             <Tag onClose={onClose} label="Label" />
//             <Tag icon={Favorite} onClose={onClose} label="Label" />
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Outline Large: </h5>
//             <Tag size="large" label="Label" />
//             <Tag size="large" icon={Favorite} label="Label" />
//             <Tag size="large" onClose={onClose} label="Label" />
//             <Tag size="large" icon={Favorite} onClose={onClose} label="Label" />
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Colored Outline Large : </h5>
//             <Tag
//               type="outline"
//               size="large"
//               style="gray"
//               icon={Favorite}
//               onClose={onClose}
//               label="Label"
//             />
//             <Tag type="outline" size="large" style="red" label="Label" />
//             <Tag
//               type="outline"
//               size="large"
//               style="green"
//               icon={Favorite}
//               label="Label"
//             />
//             <Tag
//               type="outline"
//               size="large"
//               style="blue"
//               onClose={onClose}
//               label="Label"
//             />
//             <Tag
//               type="outline"
//               size="large"
//               style="yellow"
//               icon={Favorite}
//               onClose={onClose}
//               label="Label"
//             />
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Solid Small: </h5>
//             {STATUS_TAGS.map((tag) => (
//               <Tag
//                 type="solid"
//                 size="small"
//                 key={tag.label}
//                 style={tag.style}
//                 label={tag.label}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Solid Large : </h5>
//             {STATUS_TAGS.map((tag) => (
//               <Tag
//                 type="solid"
//                 size="large"
//                 key={tag.label}
//                 style={tag.style}
//                 label={tag.label}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Solid With Colors : </h5>
//             {STATUS_TAGS.map((tag) => (
//               <Tag
//                 type="solid"
//                 size="large"
//                 key={tag.label}
//                 style={tag.style}
//                 label={tag.label}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>Outline With Colors : </h5>
//             {STATUS_TAGS.map((tag) => (
//               <Tag
//                 type="outline"
//                 size="large"
//                 key={tag.label}
//                 style={tag.style}
//                 label={tag.label}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>With Indicator : </h5>
//             {INDICATOR_COLORS.map((tag) => (
//               <Tag
//                 type="outline"
//                 size="large"
//                 key={tag.label}
//                 label={tag.label}
//                 indicatorStyle={tag.style}
//               />
//             ))}
//           </div>
//           <div className="flex flex-row items-start justify-start space-x-4">
//             <h5>With Indicator Large : </h5>
//             {INDICATOR_COLORS.map((tag) => (
//               <Tag
//                 type="outline"
//                 size="large"
//                 key={tag.label}
//                 label={tag.label}
//                 indicatorStyle={tag.style}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

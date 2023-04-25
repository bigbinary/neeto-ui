import React from "react";

import { Favorite } from "neetoicons";

import Tag from "components/Tag";

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

export const Sizes = ({}) => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag label="Large" size="large" />
    <Tag label="Small" size="small" />
  </div>
);

export const Styles = ({}) => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag label="Primary" style="primary" />
    <Tag label="Secondary" style="secondary" />
    <Tag label="Info" style="info" />
    <Tag label="Success" style="success" />
    <Tag label="Warning" style="warning" />
    <Tag label="Danger" style="danger" />
  </div>
);

export const Types = ({}) => (
  <div className="space-y-4">
    <div>
      <h5 className="mb-4 capitalize">Outline</h5>
      <div className="space-x-3">
        <Tag label="Primary" style="primary" type="outline" />
        <Tag label="Secondary" style="secondary" type="outline" />
        <Tag label="Info" style="info" type="outline" />
        <Tag label="Success" style="success" type="outline" />
        <Tag label="Warning" style="warning" type="outline" />
        <Tag label="Danger" style="danger" type="outline" />
      </div>
    </div>
    <div>
      <h5 className="mb-4 capitalize">Solid</h5>
      <div className="space-x-3">
        <Tag label="Primary" style="primary" type="solid" />
        <Tag label="Secondary" style="secondary" type="solid" />
        <Tag label="Info" style="info" type="solid" />
        <Tag label="Success" style="success" type="solid" />
        <Tag label="Warning" style="warning" type="solid" />
        <Tag label="Danger" style="danger" type="solid" />
      </div>
    </div>
  </div>
);

export const WithIndicator = ({}) => (
  <div className="flex flex-row items-start justify-start space-x-4">
    <Tag indicatorStyle="primary" label="Primary" style="secondary" />
    <Tag indicatorStyle="secondary" label="Secondary" style="secondary" />
    <Tag indicatorStyle="info" label="Info" style="secondary" />
    <Tag indicatorStyle="success" label="Success" style="secondary" />
    <Tag indicatorStyle="warning" label="Warning" style="secondary" />
    <Tag indicatorStyle="danger" label="Danger" style="secondary" />
  </div>
);
WithIndicator.storyName = "With indicator";

export const WithIcon = ({}) => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag icon={Favorite} label="With icon" />
    <Tag icon={Favorite} label="With icon" size="large" />
  </div>
);
WithIcon.storyName = "With icon";

export const WithOnClose = ({}) => (
  <div className="flex flex-row items-center justify-start space-x-4">
    <Tag label="With close icon" onClose={() => {}} />
    <Tag label="With close icon" size="large" onClose={() => {}} />
  </div>
);
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

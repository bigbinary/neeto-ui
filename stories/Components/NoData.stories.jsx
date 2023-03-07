import React from "react";

import NoData from "../../lib/components/NoData";
import Button from "../../lib/components/Button";

export default {
  title: "Components/NoData",
  component: NoData,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { NoData } from "@bigbinary/neetoui";`',
      },
    },
  },
};

const Template = () => (
  <div className="w-full flex items-center justify-center">
    <NoData
      title="There are no tickets to show"
      primaryButtonProps={{
        label: "Add new ticket"
      }}
    />
  </div>
);

export const Default = Template.bind({});

export const WithDescription = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="There are no tickets to show"
        description="You can try adding a new ticket"
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithDescription.storyName = "No Data with description";

export const WithSecondaryButton = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="There are no suites to show"
        description="You can try adding a new suite or importing test cases"
        buttonSeparatorText="or"
        primaryButtonProps={{
          label: "Add new suite"
        }}
        secondaryButtonProps={{
          label: "Import Test Cases"
        }}
      />
    </div>
  );
};

WithSecondaryButton.storyName = "No Data with secondary button";

export const WithHelpText = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        title="There are no tickets to show"
        helpText={<>For more information, please visit our <Button style="link" label="Knowledge Base"/></>}
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithHelpText.storyName = "No Data with help text";

export const WithCustomImageAsSVG = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        image={
          <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130 65C130 29.1015 100.899 0 65 0H0V130H130V65Z" fill="#1D1D1F"/>
            <path d="M37.9165 115.818H41.3443V107.327H46.9273V104.211H41.3443V78.347H36.1767C35.0341 80.0609 33.8829 81.7834 32.723 83.5146C31.5631 85.2284 30.4119 86.9423 29.2693 88.6562C28.1267 90.3701 26.9755 92.0926 25.8156 93.8238C24.6557 95.5376 23.4958 97.2515 22.3359 98.9654C21.1934 100.679 20.0508 102.402 18.9082 104.133V107.327H37.9165V115.818ZM22.4658 104.211V104.133C23.4872 102.609 24.5086 101.095 25.53 99.5886C26.5514 98.0825 27.5728 96.5763 28.5941 95.0702C29.6155 93.5641 30.6369 92.058 31.6583 90.5518C32.6797 89.0457 33.7011 87.5482 34.7225 86.0594C35.7439 84.5533 36.7653 83.0385 37.7867 81.5151H37.9165V104.211H22.4658Z" fill="white"/>
            <path d="M64.3257 116.416C67.1475 116.416 69.5711 115.637 71.5966 114.079C73.6221 112.503 75.1715 110.279 76.2448 107.405C77.3355 104.514 77.8808 101.086 77.8808 97.1216V97.0437C77.8808 93.0967 77.3355 89.6776 76.2448 86.7865C75.1715 83.8954 73.6221 81.6709 71.5966 80.1128C69.5711 78.5374 67.1475 77.7498 64.3257 77.7498C61.5039 77.7498 59.0802 78.5374 57.0547 80.1128C55.0466 81.6709 53.4972 83.8954 52.4065 86.7865C51.3332 89.6603 50.7965 93.0793 50.7965 97.0437V97.1216C50.7965 101.069 51.3332 104.488 52.4065 107.379C53.4972 110.253 55.0466 112.477 57.0547 114.053C59.0802 115.628 61.5039 116.416 64.3257 116.416ZM64.3257 113.3C62.2309 113.3 60.4392 112.642 58.9504 111.326C57.4616 110.01 56.319 108.141 55.5226 105.717C54.7436 103.293 54.3541 100.428 54.3541 97.1216V97.0437C54.3541 93.7372 54.7436 90.8721 55.5226 88.4484C56.319 86.0248 57.4616 84.1551 58.9504 82.8394C60.4392 81.5237 62.2309 80.8659 64.3257 80.8659C66.4204 80.8659 68.2122 81.5237 69.701 82.8394C71.2071 84.1551 72.3583 86.0248 73.1547 88.4484C73.951 90.8548 74.3492 93.7199 74.3492 97.0437V97.1216C74.3492 100.428 73.951 103.293 73.1547 105.717C72.3583 108.141 71.2071 110.01 69.701 111.326C68.2122 112.642 66.4204 113.3 64.3257 113.3Z" fill="white"/>
            <path d="M101.174 115.818H104.602V107.327H110.185V104.211H104.602V78.347H99.434C98.2914 80.0609 97.1402 81.7834 95.9803 83.5146C94.8204 85.2284 93.6692 86.9423 92.5266 88.6562C91.384 90.3701 90.2328 92.0926 89.0729 93.8238C87.913 95.5376 86.7531 97.2515 85.5932 98.9654C84.4506 100.679 83.3081 102.402 82.1655 104.133V107.327H101.174V115.818ZM85.723 104.211V104.133C86.7444 102.609 87.7658 101.095 88.7872 99.5886C89.8086 98.0825 90.83 96.5763 91.8514 95.0702C92.8728 93.5641 93.8942 92.058 94.9156 90.5518C95.937 89.0457 96.9584 87.5482 97.9798 86.0594C99.0012 84.5533 100.023 83.0385 101.044 81.5151H101.174V104.211H85.723Z" fill="white"/>
          </svg>
        }
        title="The page you're looking for can't be found"
        primaryButtonProps={{
          label: "Back to home"
        }}
      />
    </div>
  );
};

WithCustomImageAsSVG.storyName = "No Data with custom SVG image";

export const WithCustomImageFromURL = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <NoData
        image="https://cdn-icons-png.flaticon.com/512/15/15457.png"
        title="There are no tickets to show"
        primaryButtonProps={{
          label: "Add new ticket"
        }}
      />
    </div>
  );
};

WithCustomImageFromURL.storyName = "No Data with custom image from URL";

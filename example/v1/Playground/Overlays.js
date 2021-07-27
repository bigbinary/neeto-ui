import React, { useState } from "react";
import { Pane, Alert, Modal, Button } from "../../../lib";
import Header from "../Header";

const Buttons = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <Header title="Overlays" />
      <div className="flex flex-col items-start justify-start p-6">
        <div className="mb-8">
          <h4 className="mb-3 text-sm font-medium text-gray-800">Triggers</h4>
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              style="secondary"
              label="Trigger Pane"
              onClick={() => setIsPaneOpen(true)}
              data-testid="trigger-pane"
            />
            <Button
              style="secondary"
              label="Trigger Alert"
              onClick={() => setIsAlertOpen(true)}
              data-testid="trigger-alert"
            />
            <Button
              style="secondary"
              label="Trigger Modal"
              onClick={() => setIsModalOpen(true)}
              data-testid="trigger-modal"
            />
          </div>
        </div>
        <Pane
          title="Example Pane"
          isOpen={isPaneOpen}
          onClose={() => setIsPaneOpen(false)}
        >
          <div className="px-6">
            <p className="text-base text-gray-800">Pane Content</p>
          </div>
        </Pane>

        <Alert
          style="info"
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          title="Alert Title"
          message="This is an alert message"
          icon="ri-information-line text-blue-500"
          submitButtonProps={{
            onClick: () => setIsAlertOpen(false),
          }}
        />

        <Modal
          title="Modal Title"
          size="medium"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          showFooter
        >
          <p className="px-4 text-base leading-relaxed text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            posuere nec sem at luctus. Sed quam ex, posuere ut velit nec,
            dignissim scelerisque elit. Nullam fermentum molestie eros.
            Curabitur faucibus volutpat purus. Duis velit urna, rhoncus nec
            convallis quis, tempor sed massa. Ut gravida efficitur congue.
            Nullam sit amet velit enim. Mauris eu porta nisl. Nulla enim neque,
            viverra in mattis nec, interdum quis mi. Proin ut enim arcu. Nullam
            feugiat, metus vel feugiat commodo, orci risus elementum augue, et
            elementum nibh tellus vel eros. Morbi euismod turpis sit amet dui
            congue tincidunt vel non lorem. Ut consectetur dignissim aliquam.
            Phasellus at vestibulum libero. Vivamus lorem dolor, malesuada eget
            porta ac, consequat ut elit. Donec vitae tortor quis urna luctus
            porta vel vitae augue. Praesent elementum elit nec bibendum
            imperdiet. Quisque lorem est, venenatis nec ultrices ac, iaculis eu
            ex. Donec vitae nisi augue. Proin iaculis in nunc sit amet pharetra.
            Sed a dapibus ligula. Sed varius in massa varius blandit. Sed
            faucibus risus arcu, vel aliquam ligula mattis a. Ut tincidunt
            consequat iaculis. Sed vel aliquam augue. Sed tempor laoreet
            sollicitudin. Praesent interdum imperdiet nisl in egestas. Aliquam
            pellentesque laoreet urna at ultrices. Nullam et tincidunt turpis.
            Suspendisse maximus elit metus. Suspendisse vestibulum dapibus diam,
            in semper ligula pharetra nec. Vivamus in justo sit amet libero
            varius gravida. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Fusce sagittis
            pellentesque lectus, interdum dignissim dolor egestas posuere.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default Buttons;

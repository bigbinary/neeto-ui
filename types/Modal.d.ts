import { PopupProps, PopupContentProps } from "./Popup";

export type ModalProps = PopupProps & { size?: "small" | "medium" | "large" };

const Modal: React.FC<ModalProps> & {
  Header: React.FC<PopupContentProps>;
  Body: React.FC<PopupContentProps>;
  Footer: React.FC<PopupContentProps>;
};
export default Modal;

import { memo } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  renderBody?: JSX.Element;
};

const ModalComponent = ({
  isOpen,
  onClose,
  renderBody,
  title = '',
}: TModalProps) => (
  <Modal
    isCentered
    closeOnOverlayClick={false}
    isOpen={isOpen}
    onClose={onClose}
  >
    <ModalOverlay />
    <ModalContent minW={320} maxW="fit-content">
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{renderBody}</ModalBody>
    </ModalContent>
  </Modal>
);

const CustomModal = memo(ModalComponent);
export default CustomModal;

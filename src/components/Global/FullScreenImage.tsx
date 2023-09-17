import { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const FullScreenImage = ({ imageUrl }: { imageUrl: stirng }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box onClick={openModal} cursor="pointer">
        <Image src={imageUrl} alt="Image" maxW="100%" maxH="100%" />
      </Box>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={imageUrl}
              alt="Full Screen Image"
              maxW="100%"
              maxH="100vh"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FullScreenImage;

import { useEffect } from "react";
import { Box, Image, Flex } from "@chakra-ui/react";

interface CarouselProps {
  images: string[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({ images, currentIndex, setCurrentIndex }: CarouselProps) => {
  // Automatically move to the next slide every 3 seconds

  useEffect(() => {
    const getRandomImageIndex = () => {
      return Math.floor(Math.random() * images.length);
    };
    const interval = setInterval(() => {
      const randomIndex = getRandomImageIndex();
      setCurrentIndex(randomIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, setCurrentIndex]);
  return (
    <Box
      overflow="hidden"
      width="100%"
      position="relative"
      maxW="100%"
      maxH="fit"
      // Adjust the carousel height as needed
    >
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Carousel;

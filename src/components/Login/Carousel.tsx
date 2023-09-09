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
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const interval = setInterval(nextSlide, 1000 * 4);
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
      <Flex
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            width="100%"
            height="100%"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;

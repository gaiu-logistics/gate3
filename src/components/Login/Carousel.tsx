import { useState, useEffect } from "react";
import { Box, Image, Flex, ChakraProvider } from "@chakra-ui/react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to advance to the next slide

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const interval = setInterval(nextSlide, 1000 * 1);
    return () => clearInterval(interval);
  }, [images.length]);

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

import React from "react";
import { Image, Box, Center } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ImageSlider = () => {
  const SlideData = [
    {
      image:
        "https://outerbanksrestaurantguide.com/wp-content/uploads/2019/07/vege-restaurants-obx-rg-2019.jpg",
    },
    {
      image: "https://msgdish.com/wp-content/uploads/2023/11/Veggie-Dish.jpg",
    },
    {
      image:
        "https://www.eligasht.co.uk/Blog/wp-content/uploads/2019/09/INDIAN-FOOD.jpg",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
      >
        {SlideData.map((ele, index) => (
          <Center>
            <Box key={index} height={"180px"} w={"90%"}>
              <Image
                borderRadius={"1rem"}
                w={"100%"}
                h={"90%"}
                src={ele.image}
              />
            </Box>
          </Center>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ProductNavBar = () => {
  return (
    <Box className="shadow-lg">
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 20px",
        }}
      >
        <Box>
          <Text color={"#838BA1"} fontWeight={"semibold"}>
            Pre Order From
          </Text>
          <Text fontWeight={"bold"}>Connaught Place</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductNavBar;

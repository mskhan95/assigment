import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { Box, Text, Heading } from "@chakra-ui/react";

const UserDeatils = () => {
  return (
    <Box
      padding={5}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        className="w-[50%]"
        style={{
          backgroundColor: "#FAFAFA",
          borderRadius: "10px",
          padding: "20px 10px",
        }}
      >
        <Heading
          size="lg"
          style={{ color: "#838BA1", fontWeight: "semi-bold" }}
        >
          Karan
        </Heading>
        <Text style={{ fontWeight: "bold" }}>Let's explore this evening'</Text>
      </Box>
      <Box
        className="flex w-[50%] gap-5"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box>
          <Box bg={"#476dc5"} p={2} borderRadius="2xl">
            <LuWallet color="white" fontSize={"36px"} />
          </Box>
          <Text color={"#838BA1"}>Wallet</Text>
        </Box>
        <Box className="">
          <Box bg={"#ff00008f"} p={2} borderRadius="2xl">
            <BiSolidOffer color="white" fontSize={"36px"} />
          </Box>
          <Text color={"#838BA1"}>Offers</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDeatils;

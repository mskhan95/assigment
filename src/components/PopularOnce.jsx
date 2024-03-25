import React from "react";
import { IoStar } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PopularOnce = ({ data }) => {
  return (
    <div>
      <Heading
        style={{
          fontSize: "24px",
          lineHeight: "16px",
          fontWeight: "bold",
          fontStyle: "normal",
          margin: "10px 20px",
        }}
      >
        Popular Once
      </Heading>
      {data?.map((Product, i) => {
        return (
          <Link to={`/products/${Product?.restaurant_id}`}>
            <Box
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                height: "150px",
                margin: "10px 20px",
                justifyContent: "space-between",
              }}
            >
              <Box
                style={{
                  borderRadius: "10px 10px",
                }}
              >
                <Image
                  style={{
                    borderRadius: "14px 14px",
                    height: "118px",
                    width: "122px",
                  }}
                  src={Product.images[0].url}
                  alt="res"
                />
              </Box>
              <Box style={{ width: "180px" }}>
                <Text fontWeight={"semibold"}>{Product?.restaurant_name}</Text>
                <Box
                  style={{
                    fontSize: "12px",
                    color: "#8391A1",
                    display: "flex",
                    flexWrap: "wrap",
                    columnGap: "1ch",
                  }}
                >
                  {Product.cuisines.map((e, i) => {
                    return (
                      <Text key={i}>
                        {e?.cuisine_name}
                        {i < Product?.cuisines?.length - 1 ? ", " : ""}
                      </Text>
                    );
                  })}
                </Box>

                <Box
                  style={{
                    fontSize: "12px",
                    color: "#8391A1",
                    display: "flex",
                    flexWrap: "wrap",
                    columnGap: "1ch",
                  }}
                >
                  <Text key={i}>
                    {`${Product?.location?.city_name} ${Product?.location?.state_name}`}
                  </Text>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#D09571",
                    fontSize: "14px",
                  }}
                >
                  <BiSolidOffer /> 4 Offers Trending
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <IoStar />
                      <Box>{Product?.rating?.restaurant_avg_rating}</Box>
                    </Box>
                    <Box style={{ fontSize: "12px", color: "#8391A1" }}>
                      Popularity
                    </Box>
                  </Box>
                  <Box>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <BsCurrencyDollar />
                      <Box>{Product?.avg_cost_for_two}</Box>
                    </Box>
                    <Box style={{ fontSize: "12px", color: "#8391A1" }}>
                      Cost for two
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </div>
  );
};

export default PopularOnce;

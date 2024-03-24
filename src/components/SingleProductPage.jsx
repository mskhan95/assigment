import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { Box, Img, Text, Spinner } from "@chakra-ui/react";
import { getProducts } from "../Redux/Product/product.action";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.ProductReducer?.products);
  let filterData = products?.filter((el) => el.restaurant_id === id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      {filterData === null ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner size="xl" />
        </Box>
      ) : (
        filterData.map((ele, i) => {
          return (
            <Box>
              <Img
                src={ele?.images?.[0].url && ele?.images?.[0].url}
                alt={ele?.restaurant_name}
              />
              <Box style={{ height: "100vh" }} p={5}>
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Text style={{ fontWeight: "bold" }}>
                      {ele?.restaurant_name}
                    </Text>
                    <p>{` ${ele?.location?.city_name} ${ele?.location?.state_name}`}</p>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <CiStar size={"20px"} />
                    <Text>{ele?.rating?.restaurant_avg_rating}</Text>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#D09571",
                  }}
                >
                  <BiSolidOffer />
                  <span style={{ fontSize: "12px" }}>4 Offers trending</span>
                </Box>
                <Box
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#515151",
                  }}
                  mt={8}
                >
                  Our delicate vanilla cake swirled with chocolate and filled
                  with mocha chocolate chip cream and a layer of dark chocolate
                  ganache
                </Box>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
};

export default SingleProductPage;

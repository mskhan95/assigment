import React, { useEffect } from "react";
import PopularOnce from "./PopularOnce";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/product.action";
import ProductNavBar from "./ProductNavBar";
import UserDeatils from "./UserDeatils";
import ImageSlider from "./ImageSlider";

const ProductPage = () => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.ProductReducer?.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div style={{ width: "375px" }}>
      <ProductNavBar />
      <UserDeatils />
      <ImageSlider />
      <PopularOnce data={data} />
    </div>
  );
};

export default ProductPage;

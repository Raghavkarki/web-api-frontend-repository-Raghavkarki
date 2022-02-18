import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Easy Shoe Store" />

          <div className="banner">
            <p>Welcome to Easy Shoe Store</p>
            <h1>FIND AMAZING SHOES BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Shoes Collection</h2>

          <div className="container" id="container">
            {products?.length > 0 ? (
              products &&
              products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <h1>No Products Available</h1>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

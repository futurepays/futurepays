import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ecommerce/ProductCard"
import ProductCardDesk from "../components/ecommerce/ProductCardDesk"
import ProductDetails from "../components/ecommerce/ProductDetails"
import Footer from "../components/ecommerce/Footer"
import NavBar from "../components/ecommerce/NavBar";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const fetchProductDetails = async () => {
        const accessToken = sessionStorage.getItem("accessToken");
        try {
          const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/products/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          console.error("Failed to fetch product details", err);
        }
      };
  
      fetchProductDetails();
    }, [id]);
  
    if (!product) return <p>Loading...</p>;

  return (
    <>
        <NavBar />
        {viewportWidth > 1023 ? <ProductCardDesk product={product} /> : <ProductCard product={product} />}
        <ProductDetails />
        <Footer />
    </>
  );
};

export default ProductPage;

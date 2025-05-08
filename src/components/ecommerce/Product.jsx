import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Product = () => {
  const [products, setProducts] = useState([]); // for array
  const navigate = useNavigate();

  const openProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const accessToken = sessionStorage.getItem("accessToken");
        console.log(accessToken);
        
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products/products`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network error. Failed to fetch product data");
        }
        const result = await response.json();
        setProducts(result); // set full array
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="prod-container" onClick={() => openProductPage(product.id)}>
            <div className="prod-title-container">
              <p className="prod-title">UNISEX TEES</p>
            </div>
            <div className="prod-card">
              <div className="prod-img-container">
                <img
                  src={product.images?.[0]?.image}
                  className="prod-img"
                  alt={`${product.name} image`}
                />
              </div>
              <div className="prod-det-container">
                <p className="prod-name">{product.name}</p>
                <p className="prod-desc">{product.description}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Product;

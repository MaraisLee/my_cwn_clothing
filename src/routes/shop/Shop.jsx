import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductContext } from "../../contexts/ProductContext";
import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

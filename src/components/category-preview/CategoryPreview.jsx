import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import { CategoryPreviewContainer, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryiesArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoryiesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

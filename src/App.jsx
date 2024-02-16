import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import { CATALOG, FAVORITES, HOME } from "./constants/routes";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import HomePage from "./pages/HomePage/HomePage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={CATALOG} element={<CatalogPage />} />
        <Route path={FAVORITES} element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

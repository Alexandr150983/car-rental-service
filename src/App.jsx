import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import { CATALOG, FAVORITES, HOME } from "./constants/routes";
import Loader from "./components/Loader/Loader";

const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={CATALOG} element={<CatalogPage />} />
          <Route path={FAVORITES} element={<FavoritesPage />} />
          <Route path="*" element={<Navigate replace to={HOME} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

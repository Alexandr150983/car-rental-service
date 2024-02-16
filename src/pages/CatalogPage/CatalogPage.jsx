import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../services/carApi";
import {
  selectAllCars,
  selectCarsLoading,
  selectCarsError,
  selectFavorites,
} from "../../redux/Cars/selectors";
import { addFavorite, removeFavorite } from "../../redux/Cars/favoritesSlice";
import CarCard from "../../components/CarCard/CarCard";
import { CarsWrapper, LoadBtn, StyledCatalog } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);
  const favorites = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const limit = 12;
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const response = await dispatch(fetchCars({ page, limit }));

      if (response.payload.length < limit) {
        setHasMore(false);
      }
    };

    fetch();
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFavoriteToggle = (car) => {
    const isCurrentlyFavorite = favorites.some(
      (favorite) => favorite.id === car.id
    );

    if (isCurrentlyFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };
  return (
    <StyledCatalog>
      {loading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <CarsWrapper>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.some((favorite) => favorite.id === car.id)}
          />
        ))}
      </CarsWrapper>
      {hasMore && (
        <LoadBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadBtn>
      )}
    </StyledCatalog>
  );
};

export default CatalogPage;

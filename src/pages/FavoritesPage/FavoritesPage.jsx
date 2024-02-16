import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { selectFavorites } from "../../redux/Cars/selectors";
import { removeFavorite } from "../../redux/Cars/favoritesSlice";
import { CarsWrapper, StyledFavorite, Title } from "./FavoritePage.styled";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleFavoriteToggle = (carId) => {
    dispatch(removeFavorite(carId));
  };

  return (
    <StyledFavorite>
      <Title>Your favorite cars!</Title>
      <CarsWrapper>
        {favorites.length > 0 ? (
          favorites.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onFavoriteToggle={() => handleFavoriteToggle(car.id)}
              isFavorite={true}
            />
          ))
        ) : (
          <p>You don't have any favorite cars yet.</p>
        )}
      </CarsWrapper>
    </StyledFavorite>
  );
};

export default FavoritesPage;

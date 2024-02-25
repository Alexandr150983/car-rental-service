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
import {
  CarsWrapper,
  CenteredLoader,
  FilterDropdown,
  LoadBtn,
  StyledCatalog,
} from "./CatalogPage.styled";
import Loader from "../../components/Loader/Loader";
import makes from "../../data/makes.json";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);
  const loading = useSelector(selectCarsLoading);
  const error = useSelector(selectCarsError);
  const favorites = useSelector(selectFavorites);
  const [visibleCars, setVisibleCars] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedMake, setSelectedMake] = useState("All");
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchCars());
      setLoaded(true);
    };

    fetch();
  }, [dispatch]);

  useEffect(() => {
    const filteredCars =
      selectedMake === "All"
        ? cars
        : cars.filter((car) => car.make === selectedMake);
    setVisibleCars(filteredCars.slice(0, limit));
    setHasMore(filteredCars.length > limit);
  }, [cars, selectedMake, loaded, limit]);

  const handleLoadMore = () => {
    const currentLength = visibleCars.length;
    const nextCars =
      selectedMake === "All"
        ? cars
        : cars.filter((car) => car.make === selectedMake);
    const nextVisibleCars = nextCars.slice(0, currentLength + limit);
    setVisibleCars(nextVisibleCars);

    setHasMore(nextVisibleCars.length < nextCars.length);
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

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);

    const filteredCars =
      event.target.value === "All"
        ? cars
        : cars.filter((car) => car.make === event.target.value);
    setVisibleCars(filteredCars.slice(0, limit));
    setHasMore(filteredCars.length > limit);
  };

  return (
    <StyledCatalog>
      {loading && (
        <CenteredLoader>
          <Loader />
        </CenteredLoader>
      )}
      {!loading && (
        <>
          {error && <p>Error: {error}</p>}
          <FilterDropdown onChange={handleMakeChange}>
            <option value="All">All Makes</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </FilterDropdown>
          <CarsWrapper>
            {visibleCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={favorites.some(
                  (favorite) => favorite.id === car.id
                )}
              />
            ))}
          </CarsWrapper>
          {hasMore && (
            <LoadBtn type="button" onClick={handleLoadMore}>
              Load more
            </LoadBtn>
          )}
        </>
      )}
    </StyledCatalog>
  );
};

export default CatalogPage;

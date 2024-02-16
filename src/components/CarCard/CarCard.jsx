import React, { useState } from "react";
import { ReactComponent as HeartNormal } from "../../assets/heart-normal.svg";
import { ReactComponent as HeartActive } from "../../assets/heart-active.svg";

import {
  Card,
  CarImage,
  CardContent,
  RentalPrice,
  LearnMoreButton,
  FavoriteButton,
  CarImageContainer,
  TitleContainer,
  Model,
  MakeAndYear,
  OptionsContainer,
} from "./CarCard.styled.js";
import Modal from "../Modal/Modal.jsx";
import CarDetailsModal from "../CarDetailsModal/CarDetailsModal.jsx";

const CarCard = ({ car, onFavoriteToggle, isFavorite }) => {
  const {
    id,
    year,
    make,
    model,
    description,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    accessories,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [, city, country] = address.split(", ");

  const options =
    accessories && accessories.length > 0
      ? [city, country, rentalCompany, type, model, id, accessories[0]]
      : [city, country, rentalCompany, type, model, id];

  const optionsString = options.join(" | ");

  return (
    <Card>
      <CardContent>
        <CarImageContainer>
          <FavoriteButton
            type="button"
            onClick={() => onFavoriteToggle(car)}
            $isFavorite={isFavorite}
          >
            {isFavorite ? <HeartActive /> : <HeartNormal />}
          </FavoriteButton>
        </CarImageContainer>
        <CarImage src={img} alt={description} />
        <TitleContainer>
          <MakeAndYear>
            {make} <Model>{model}</Model>, {year}
          </MakeAndYear>
          <RentalPrice>{`${rentalPrice}`}</RentalPrice>
        </TitleContainer>
        <OptionsContainer>{optionsString}</OptionsContainer>
      </CardContent>
      <LearnMoreButton onClick={toggleModal}>Learn more</LearnMoreButton>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <CarDetailsModal />
      </Modal>
    </Card>
  );
};

export default CarCard;

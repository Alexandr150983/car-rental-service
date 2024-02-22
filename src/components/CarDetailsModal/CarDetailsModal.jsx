import React from "react";

import {
  Accessoires,
  CarImage,
  ConditionParagraph,
  Description,
  DetailList,
  Functionalities,
  ModalBackdrop,
  Model,
  NumericValue,
  Options,
  RentalCarLink,
  RentalConditions,
  RentalConditionsContainer,
  StyledDivider,
  Title,
  TitleModel,
  TitleOptions,
} from "./CarDetailsModal.styled";

const ItemListWithDividers = ({ items, DividerComponent }) => (
  <>
    {items.map((item, index) => (
      <React.Fragment key={`${item}_${index}`}>
        <span>{item}</span>
        {index < items.length - 1 && <DividerComponent />}
      </React.Fragment>
    ))}
  </>
);

const highlightNumber = (text) => {
  const regex = /(\d+)/g;
  return text
    .split(regex)
    .map((part, index) =>
      regex.test(part) ? <NumericValue key={index}>{part}</NumericValue> : part
    );
};

const CarDetailsModal = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    description,
    type,
    img,
    rentalPrice,
    address,
    accessories,
    engineSize,
    functionalities,
    mileage,
    rentalConditions,
    fuelConsumption,
  } = car;

  const [, city, country] = address.split(", ");

  const options = [
    city,
    country,
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const conditions = rentalConditions ? rentalConditions.split("\n") : [""];

  return (
    <ModalBackdrop>
      <CarImage src={img} alt={description} />
      <TitleOptions>
        <TitleModel>
          {make} <Model>{model}</Model>, {year}
        </TitleModel>
        <Options>
          <ItemListWithDividers
            items={options}
            DividerComponent={StyledDivider}
          />
        </Options>
        <Description>{description}</Description>
      </TitleOptions>
      <DetailList>
        <Title>Accessories and functionalities:</Title>
        <Accessoires>
          <ItemListWithDividers
            items={accessories}
            DividerComponent={StyledDivider}
          />
        </Accessoires>
        <Functionalities>
          <ItemListWithDividers
            items={functionalities}
            DividerComponent={StyledDivider}
          />
        </Functionalities>
      </DetailList>
      <RentalConditionsContainer>
        <Title>Rental Conditions: </Title>
        <RentalConditions>
          {conditions.map((condition, index) => (
            <ConditionParagraph key={`${condition}_${index}`}>
              {index === 0 ? highlightNumber(condition) : condition}
            </ConditionParagraph>
          ))}
          <ConditionParagraph>
            Mileage:{" "}
            <NumericValue>{mileage.toLocaleString("en-US")}</NumericValue>
          </ConditionParagraph>
          <ConditionParagraph>
            Rental Price: <NumericValue>{rentalPrice}</NumericValue>
          </ConditionParagraph>
        </RentalConditions>
      </RentalConditionsContainer>
      <RentalCarLink href="tel:+380730000000">Rental car</RentalCarLink>
    </ModalBackdrop>
  );
};

export default CarDetailsModal;

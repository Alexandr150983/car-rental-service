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
  Title,
  TitleContainer,
  TitleModel,
  TitleOptions,
} from "./CarDetailsModal.styled";

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
      <TitleContainer>
        <TitleOptions>
          <TitleModel>
            {make} <Model>{model}</Model>, {year}
          </TitleModel>
          <Options>{options.join(" | ")}</Options>
          <Description>{description}</Description>
        </TitleOptions>
      </TitleContainer>
      <DetailList>
        <Title>Accessories and functionalities:</Title>
        <Accessoires>{accessories.join(" | ")}</Accessoires>
        <Functionalities>{functionalities.join(" | ")}</Functionalities>
      </DetailList>
      <RentalConditionsContainer>
        <Title>Rental Conditions: </Title>
        <RentalConditions>
          {conditions.map((condition, index) => (
            <ConditionParagraph key={`${condition}_${index}`}>
              {condition}
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
        <RentalCarLink href="tel:+380730000000">Rental car</RentalCarLink>
      </RentalConditionsContainer>
    </ModalBackdrop>
  );
};

export default CarDetailsModal;

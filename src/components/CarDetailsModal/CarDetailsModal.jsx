import React from "react";

const CarDetailsModal = ({
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
}) => {
  const [, city, country] = address.split(", ");

  const conditions = rentalConditions.split("\n");

  const options =
    functionalities && functionalities.length > 0
      ? [
          city,
          country,
          `Id: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
          `FuelConsumption: ${fuelConsumption}`,
          `EngineSize: ${engineSize}`,
          model,
          functionalities[0],
        ]
      : [
          city,
          country,
          `Id: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
          `FuelConsumption: ${fuelConsumption}`,
          `EngineSize: ${engineSize}`,
        ];

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>
          {make} {model}
        </h2>
        <p>Рік випуску: {year}</p>
        <p>Ціна за годину оренди: {rentalPrice}</p>
        <p>Адреса: {address}</p>
        <p>Тип: {type}</p>
        <p>Споживання палива: {fuelConsumption}L/100km</p>
        <p>Об'єм двигуна: {engineSize}</p>
        <p>Об'єм двигуна: {options}</p>
        <p>Об'єм двигуна: {conditions}</p>
        {/* Відображення інших деталей авто */}
        <button>Закрити</button>
      </div>
    </div>
  );
};

export default CarDetailsModal;

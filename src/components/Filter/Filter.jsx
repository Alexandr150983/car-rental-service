import React from "react";
import { useDispatch } from "react-redux";
import {
  setBrand,
  setPriceRange,
  setMileageRange,
} from "../../redux/Cars/filtersSlice";

function Filter() {
  const dispatch = useDispatch();
  const makes = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land Rover",
  ];
  const priceSteps = Array.from({ length: 10 }, (_, index) => (index + 1) * 10);

  const handleMakeSelect = (e) => {
    dispatch(setBrand(e.target.value));
  };

  const handlePriceSelect = (e) => {
    const [min, max] = e.target.value.split("-");
    dispatch(setPriceRange({ min: parseInt(min, 10), max: parseInt(max, 10) }));
  };

  const handleMileageRange = (min, max) => {
    dispatch(setMileageRange({ min, max }));
  };

  return (
    <div>
      <select onChange={handleMakeSelect} defaultValue="">
        <option value="">Виберіть марку</option>
        {makes.map((make) => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>

      <select onChange={handlePriceSelect} defaultValue="">
        <option value="">Виберіть діапазон цін</option>
        {priceSteps.map((step, index) => (
          <option key={index} value={`${step * 10}-${(step + 1) * 10}`}>
            ${step * 10} - ${(step + 1) * 10}
          </option>
        ))}
      </select>

      {/* Поля введення для діапазону пробігу */}
      <input
        type="number"
        placeholder="Мін. пробіг"
        onChange={(e) =>
          handleMileageRange(parseInt(e.target.value, 10) || 0, undefined)
        }
      />
      <input
        type="number"
        placeholder="Макс. пробіг"
        onChange={(e) =>
          handleMileageRange(undefined, parseInt(e.target.value, 10) || 0)
        }
      />
    </div>
  );
}

export default Filter;

import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
`;

export const CarImageContainer = styled.div`
  position: relative;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CarImage = styled.img`
  border-radius: 12px;
  margin-bottom: 14px;
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  height: 24px;
  margin-bottom: 8px;
`;

export const MakeAndYear = styled.p``;

export const Model = styled.span`
  color: rgb(52, 112, 255);
`;

export const RentalPrice = styled.p``;

export const OptionsContainer = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const CardContent = styled.div``;

export const LearnMoreButton = styled.button`
  color: white;
  background-color: rgb(52, 112, 255);
  border-radius: 12px;
  border: none;
  width: 100%;
  height: 44px;
  transition: all 0.6s;
  cursor: pointer;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

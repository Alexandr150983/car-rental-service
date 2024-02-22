import styled from "styled-components";
import { ReactComponent as DividerSvg } from "../../assets/divider.svg";

export const ModalBackdrop = styled.div`
  max-width: 541px;
`;

export const CarImage = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
`;

export const Model = styled.span`
  color: rgb(52, 112, 255);
`;

export const TitleOptions = styled.div`
  width: 461px;
  height: 126px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const TitleModel = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const Options = styled.div`
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);
`;

export const Description = styled.div`
  width: 461px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
`;

export const DetailList = styled.div`
  width: 461px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Accessoires = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 4px;
  color: rgba(18, 20, 23, 0.5);
`;

export const Functionalities = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const RentalConditionsContainer = styled.div`
  width: 461px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const RentalConditions = styled.div`
  width: 461px;
  display: flex;
  flex-wrap: wrap;
`;

export const ConditionParagraph = styled.p`
  margin-right: 8px;
  border-radius: 35px;
  padding: 7px 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  background-color: #f9f9f9;
`;

export const NumericValue = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const RentalCarLink = styled.a`
  display: block;
  text-align: center;
  border-radius: 12px;
  padding: 12px 50px;
  width: 80px;
  height: 44px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: rgb(52, 112, 255);
  border: none;
  transition: all 0.6s;
  cursor: pointer;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

export const StyledDivider = styled(DividerSvg)`
  margin: 0 6px;
  height: 16px;
`;

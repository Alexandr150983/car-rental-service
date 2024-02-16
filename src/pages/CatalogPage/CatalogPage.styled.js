import styled from "styled-components";

export const StyledCatalog = styled.section`
  display: flex;
  flex-direction: column;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

export const CarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  margin-bottom: 88px;
`;

export const LoadBtn = styled.button`
  display: block;
  text-decoration: underline;
  color: rgb(52, 112, 255);
  border: none;
  background-color: transparent;
  margin-top: 100px;
  margin-bottom: 138px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  padding: 12px 24px;
  cursor: pointer;

  &:hover {
    color: rgb(11, 68, 205);
  }
`;

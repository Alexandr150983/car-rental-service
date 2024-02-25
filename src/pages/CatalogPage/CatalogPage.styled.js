import styled from "styled-components";

export const StyledCatalog = styled.section`
  display: flex;
  flex-direction: column;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

export const CarsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  margin-bottom: 88px;
  padding-top: 50px;
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

export const CenteredLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const FilterDropdown = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    border-color: #888;
  }
  &:focus {
    outline: none;
    border-color: #555;
  }
`;
import styled from "styled-components";

export const StyledFavorite = styled.section`
  width: 1184px;
  margin-bottom: 274px;
  margin-left: auto;
  margin-right: auto;
`;
export const CarsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  line-height: 2;
  margin: 50px 0;
`;
export const CenteredMessage = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

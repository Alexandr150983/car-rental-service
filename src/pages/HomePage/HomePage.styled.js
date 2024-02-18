import styled from "styled-components";
import bgImg from "../../assets/home.jpg";

export const StyledContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url(${bgImg});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 1184px;
  height: 750px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

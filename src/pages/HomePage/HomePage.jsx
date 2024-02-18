import React from "react";
import { Paragraph, StyledContainer, TextContainer, Title } from "./HomePage.styled";

function HomePage() {
  return (
    <StyledContainer>
      <TextContainer>
      <Title>Welcome to the car rental service</Title>
      <Paragraph>
        Here you will find a wide selection of cars for every taste.
      </Paragraph>
    </TextContainer></StyledContainer>

  );
}

export default HomePage;

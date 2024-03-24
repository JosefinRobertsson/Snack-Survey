import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    text-shadow: 0 0 10px cadetblue, 0 0 20px cadetblue, 0 0 30px cadetblue;
  }
  50% {
    text-shadow: 0 0 20px cadetblue, 0 0 30px cadetblue, 0 0 40px cadetblue;
  }
  100% {
    text-shadow: 0 0 10px cadetblue, 0 0 20px cadetblue, 0 0 30px cadetblue;
  }
`;

export const ResultSpan = styled.span`
  font-family: 'Permanent Marker', cursive;
  color: magenta;
  opacity: 0.7; 
  padding-right: 6px;
  animation: ${glow} 1.5s infinite alternate;

  @media screen and (max-width: 667px) {
    animation: none; 
    text-shadow: 2px 2px 3px rgba(78, 163, 101, 0.7);
  }
`;


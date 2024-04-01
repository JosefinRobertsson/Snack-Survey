import styled, { keyframes } from "styled-components";

const glow = keyframes`
 from {
    text-shadow: 0 0 10px #258f86, 0 0 20px #EE82EE, 0 0 30px #ABF5EF;
  }
 to {
    text-shadow: 0 0 10px #EE82EE, 0 0 20px #ABF5EF, 0 0 30px #fff;
  }
`;

export const ResultSpan = styled.span`
  font-family: 'Permanent Marker', cursive;
  color: magenta;
  opacity: 0.7; 
  padding-right: 6px;
  transition: 0.2s ease-in-out;
  animation: ${glow} 1s infinite alternate;

  @media screen and (max-width: 667px) {
    animation: none; 
    text-shadow: 2px 2px 3px rgba(78, 163, 101, 0.7);
  }
`;


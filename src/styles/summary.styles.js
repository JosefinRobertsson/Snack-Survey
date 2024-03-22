import styled, { keyframes } from "styled-components";

const twinkling = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;

export const ResultSpan = styled.span`
 color: cadetblue;
 animation: ${twinkling} 1.5s infinite;
 `;
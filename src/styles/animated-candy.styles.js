import styled, { keyframes } from "styled-components";

const driftDown = keyframes`
  0% {
    transform: translateY(-100%) translateX(0%);
  }
  5% {
    transform: translateY(5vh) translateX(25%);
  }
  10% {
    transform: translateY(10vh) translateX(-25%);
  }
  15% {
    transform: translateY(15vh) translateX(25%);
  }
  20% {
    transform: translateY(20vh) translateX(-25%);
  }
  25% {
    transform: translateY(25vh) translateX(25%);
  }
  30% {
    transform: translateY(30vh) translateX(-25%);
  }
  35% {
    transform: translateY(35vh) translateX(25%);
  }
  40% {
    transform: translateY(40vh) translateX(-25%);
  }
  45% {
    transform: translateY(45vh) translateX(25%);
  }
  50% {
    transform: translateY(50vh) translateX(-25%);
  }
  55% {
    transform: translateY(55vh) translateX(25%);
  }
  60% {
    transform: translateY(60vh) translateX(-25%);
  }
  65% {
    transform: translateY(65vh) translateX(25%);
  }
  70% {
    transform: translateY(70vh) translateX(-25%);
  }
  75% {
    transform: translateY(75vh) translateX(25%);
  }
  80% {
    transform: translateY(80vh) translateX(-25%);
  }
  85% {
    transform: translateY(85vh) translateX(25%);
  }
  90% {
    transform: translateY(90vh) translateX(-25%);
  }
  95% {
    transform: translateY(95vh) translateX(25%);
  }
  99.99% {
    transform: translateY(100vh) translateX(0%);
  }
  100% {
    transform: translateY(-100%) translateX(0%);
  }
`;


export const AnimatedCandyContainer = styled.div`
    position: fixed;
    top: 0;
    left: 40%;
    overflow: hidden;
    z-index: 10;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f6d258;
    transform: translateX(-50%);
    animation: ${driftDown} 15s linear infinite;
    backface-visibility: hidden;

    @media screen and (max-width: 1100px) {
        left: 15%;
    }
    `;

export const AnimatedCandyContainer2 = styled(AnimatedCandyContainer)`
left: 45%;
animation: ${driftDown} 19s linear infinite;

@media screen and (max-width: 100px) {
        left: 45%;
    }
`;

export const AnimatedCandyContainer3 = styled(AnimatedCandyContainer)`
left: 60%;
animation: ${driftDown} 13s linear infinite;

@media screen and (max-width: 1100px) {
        left: 75%;
    }
`;

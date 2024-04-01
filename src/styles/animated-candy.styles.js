import styled, { keyframes } from "styled-components";

const driftDown = keyframes`
  0% {
    transform: translateY(-100%) translateX(-25%);
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

const slowDriftDown = keyframes`
  0% {
    transform: translateY(0vh) translateX(-25%) rotate(-5deg);
  }
  5% {
    transform: translateY(5vh) translateX(0%) rotate(0deg);
  }
  10% {
    transform: translateY(10vh) translateX(25%) rotate(5deg);
  }
  15% {
    transform: translateY(15vh) translateX(0%) rotate(0deg);
  }
  20% {
    transform: translateY(20vh) translateX(-25%) rotate(-5deg);
  }
  25% {
    transform: translateY(25vh) translateX(0%) rotate(0deg);
  }
  30% {
    transform: translateY(30vh) translateX(25%) rotate(5deg);
  }
  35% {
    transform: translateY(35vh) translateX(0%) rotate(0deg);
  }
  40% {
    transform: translateY(40vh) translateX(-25%) rotate(-5deg);
  }
  45% {
    transform: translateY(45vh) translateX(0%) rotate(0deg);
  }
  50% {
    transform: translateY(50vh) translateX(25%) rotate(5deg);
  }
  55% {
    transform: translateY(55vh) translateX(0%) rotate(0deg);
  }
  60% {
    transform: translateY(60vh) translateX(-25%) rotate(-5deg);
  }
  65% {
    transform: translateY(65vh) translateX(0%) rotate(0deg);
  }
  70% {
    transform: translateY(70vh) translateX(25%) rotate(5deg);
  }
  75% {
    transform: translateY(75vh) translateX(0%) rotate(0deg);
  }
  80% {
    transform: translateY(80vh) translateX(-25%) rotate(-5deg);
  }
  85% {
    transform: translateY(85vh) translateX(0%) rotate(0deg);
  }
  90% {
    transform: translateY(90vh) translateX(25%) rotate(5deg);
  }
  95% {
    transform: translateY(95vh) translateX(0%) rotate(0deg);
  }
  99.99% {
    transform: translateY(100vh) translateX(0%) rotate(-5deg);
  }
  100% {
    transform: translateY(100vh) translateX(-25%) rotate(-5deg);
  }
`;



export const AnimatedCandyContainer = styled.div`
    position: fixed;
    top: 0;
    left: 40%;
    overflow: hidden;
    z-index: 10;
    width: 50px;
    height: 50px;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.5)) brightness(115%);
    animation: ${driftDown} 15s linear infinite;
    backface-visibility: hidden;

    @media screen and (max-width: 2300px) {
        left: 32%;
    }
    @media screen and (max-width: 1100px) {
        left: 15%;
    }
    `;

export const AnimatedCandyContainer2 = styled(AnimatedCandyContainer)`
left: 45%;
animation: ${slowDriftDown} 19s linear infinite;

@media screen and (max-width: 2300px) {
        left: 40%;
    }
@media screen and (max-width: 100px) {
        left: 45%;
    }
`;

export const AnimatedCandyContainer3 = styled(AnimatedCandyContainer)`
left: 55%;
animation: ${driftDown} 13s linear infinite;

@media screen and (max-width: 2300px) {
        left: 66%;
    }
@media screen and (max-width: 1100px) {
        left: 75%;
    }
`;



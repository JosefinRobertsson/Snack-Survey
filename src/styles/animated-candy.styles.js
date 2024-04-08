import styled, { keyframes } from "styled-components";

const rotateAndDrift = keyframes`
  0% {
    transform: translateY(-100%) translateX(-25%) rotate(0deg);
  }
  25% {
    transform: translateY(25vh) translateX(25%) rotate(180deg);
  }
  50% {
    transform: translateY(50vh) translateX(-25%) rotate(360deg);
  }
  75% {
    transform: translateY(75vh) translateX(25%) rotate(540deg);
  }
  99.99% {
    transform: translateY(100vh) translateX(0%) rotate(720deg);
  }
  100% {
    transform: translateY(100vh) translateX(-25%) rotate(0deg);
  }
`;

const rotateAndDriftReverse = keyframes`
  0% {
    transform: translateY(-100%) translateX(-25%) rotate(0deg);
  }
  25% {
    transform: translateY(25vh) translateX(25%) rotate(-1turn);
  }
  50% {
    transform: translateY(50vh) translateX(-25%) rotate(-2turn);
  }
  75% {
    transform: translateY(75vh) translateX(25%) rotate(-3turn);
  }
  100% {
    transform: translateY(100vh) translateX(0%) rotate(-4turn);
  }
`;


const slowDriftDown = keyframes`
  0% {
    transform: translateY(-100%) translateX(-25%) rotate(-10deg);
  }
  5% {
    transform: translateY(5vh) translateX(0%) rotate(0deg);
  }
  10% {
    transform: translateY(10vh) translateX(25%) rotate(10deg);
  }
  15% {
    transform: translateY(15vh) translateX(0%) rotate(0deg);
  }
  20% {
    transform: translateY(20vh) translateX(-25%) rotate(-10deg);
  }
  25% {
    transform: translateY(25vh) translateX(0%) rotate(0deg);
  }
  30% {
    transform: translateY(30vh) translateX(25%) rotate(10deg);
  }
  35% {
    transform: translateY(35vh) translateX(0%) rotate(0deg);
  }
  40% {
    transform: translateY(40vh) translateX(-25%) rotate(-10deg);
  }
  45% {
    transform: translateY(45vh) translateX(0%) rotate(0deg);
  }
  50% {
    transform: translateY(50vh) translateX(25%) rotate(10deg);
  }
  55% {
    transform: translateY(55vh) translateX(0%) rotate(0deg);
  }
  60% {
    transform: translateY(60vh) translateX(-25%) rotate(-10deg);
  }
  65% {
    transform: translateY(65vh) translateX(0%) rotate(0deg);
  }
  70% {
    transform: translateY(70vh) translateX(25%) rotate(10deg);
  }
  75% {
    transform: translateY(75vh) translateX(0%) rotate(0deg);
  }
  80% {
    transform: translateY(80vh) translateX(-25%) rotate(-10deg);
  }
  85% {
    transform: translateY(85vh) translateX(0%) rotate(0deg);
  }
  90% {
    transform: translateY(90vh) translateX(25%) rotate(10deg);
  }
  95% {
    transform: translateY(95vh) translateX(0%) rotate(0deg);
  }
  99.99% {
    transform: translateY(100vh) translateX(0%) rotate(-10deg);
  }
  100% {
    transform: translateY(100vh) translateX(-25%) rotate(-10deg);
  }
`;



export const AnimatedCandyContainer = styled.div`
    position: fixed;
    top: 0;
    left: 40%;
    z-index: 10;
    width: 50px;
    aspect-ratio: 1/1;
    filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.5)) brightness(120%);
    animation: ${rotateAndDrift} 15s linear infinite;
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
animation: ${rotateAndDriftReverse} 13s linear infinite;

@media screen and (max-width: 2300px) {
        left: 66%;
    }
@media screen and (max-width: 1100px) {
        left: 75%;
    }
`;


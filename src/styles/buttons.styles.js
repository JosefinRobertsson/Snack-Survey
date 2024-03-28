import styled, { css, keyframes } from 'styled-components';

export const BaseButton = styled.button`
cursor: pointer;
border-radius: 10px;
padding: 3px 10px;
border: none;
margin: 10px;
color: inherit;
background: rgb(167,245,179);
box-shadow: 5px 5px 9px 1px rgba(78, 163, 101, 0.9);

&:focus, &:hover {
  color: white;
  transform: scale(1.1);
  transition: 0.2s;
  ${props => props.id === 'backBtn' && `
    background: rgb(141, 214, 153);
  `}
   ${props => props.id === 'nextBtn' && `
    background: #800080;
    text-shadow: 2px 2px 3px rgba(1, 1, 1, 0.7);
  `}
}

&:active {
  transition: 0.1s;
  transform: translateY(1px);
}
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const SubmitResultsButton = styled(BaseButton)`
  ${props => props.id === 'endBtn' && css`
    background-color: rgb(255, 0, 255, 0.7);
    color: white;
    text-shadow: 2px 2px 3px rgba(1, 1, 1, 0.7);
    animation: ${pulsate} 2s ease-in-out infinite;

    &:focus, &:hover {
      background-color: rgb(128, 0, 128);
      animation:none;
      transition: 0.3s;
  `}
`;
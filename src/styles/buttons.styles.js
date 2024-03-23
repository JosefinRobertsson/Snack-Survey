import styled from 'styled-components';

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
  background: rgb(245, 209, 241);
  transform: scale(1.1);
  transition: 0.2s;
  ${props => props.id === 'backBtn' && `
    background: rgb(167,245,179);
  `}
}

&:active {
  transition: 0.1s;
  transform: translateY(1px);
}
`;

export const SubmitResultsButton = styled(BaseButton)`
  ${props => props.id === 'endBtn' && `
    background-color: rgb(255, 0, 255, 0.8);
    color: white;
  `}
`;
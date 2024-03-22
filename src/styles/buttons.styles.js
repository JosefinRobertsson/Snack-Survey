import styled from 'styled-components';

export const BaseButton = styled.button`
cursor: pointer;
border-radius: 10px;
padding: 3px 10px;
border: none;
margin: 10px;
background-color: cadetblue;
`;

export const SubmitResultsButton = styled(BaseButton)`
  ${props => props.id === 'endBtn' && `
    background-color: magenta;
    color: white;
  `}
`;
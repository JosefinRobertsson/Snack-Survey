import styled from 'styled-components';

export const Label = styled.label`
display: inline-block;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.4s;
  padding: 5px 15px 5px 5px;

&:focus, &:hover {
    transform: scale(1.1);
    animation: shake 0.5s;
    animation-iteration-count: infinite;

    
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, opx) rotate(-1deg); }
  20% { transform: translate(-1px, 0px) rotate(1deg); }
  30% { transform: translate(1px, 1px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 0px) rotate(-1deg); }
  60% { transform: translate(-1px, 1px) rotate(0deg); }
  70% { transform: translate(1px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 0px) rotate(0deg); }
  100% { transform: translate(1px, 0px) rotate(-1deg); }
}
}
`;


export const CheckedLabel = styled(Label)`
color: ${({ checked }) => (checked ? 'violet' : 'inherit')};
&:active {
    color: ${({ checked }) => (checked ? 'inherit' : 'violet')};
    outline: none;
  }
`;
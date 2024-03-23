import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  transition: 0.3s;
  padding: 0px 10px 5px 5px;
  margin: 0 5px 1rem 5px;

&:focus, &:hover {
  color: #800080;
    text-shadow: 2px 2px 3px rgba(21, 43, 27, 1);
    border-radius: 15px;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, 0px) rotate(-1deg); }
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
  color: ${({ checked }) => (checked ? 'white' : 'inherit')};
  background-color: ${({ checked }) => (checked ? 'rgb(245, 184, 231)' : 'inherit')};
  border-radius: 15px;
  text-shadow: ${({ checked }) => (checked ? '2px 2px 3px rgba(21, 43, 27, 1)' : 'inherit')}; 
  animation: ${({ checked }) => (checked ? 'shake 0.5s' : 'none')};
  animation-iteration-count: infinite;
  &:active {
    display: inline;
    color: #EE82EE;
    transition: 0.1s;
   font-size: 1.2em;
   margin-left: 10px;
   margin-right: 10px;
  }
`;
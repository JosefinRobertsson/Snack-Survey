import styled from 'styled-components';

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  transition: 0.3s;
  padding: 0px 10px 5px 5px;
  margin: 0 5px 1rem 5px;
  border-radius: 15px;

  
&:focus, &:hover {
  color: white;
    text-shadow:  
    0 0 10px rgba(141, 214, 153, 0.95),
      0 0 20px rgba(141, 214, 153, 0.8),
      0 0 30px rgba(141, 214, 153, 0.6),
      0 0 40px rgba(141, 214, 153, 0.4),
      0 0 50px rgba(141, 214, 153, 0.2);
} 

    
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
`;


export const CheckedLabel = styled(Label)`

  color: ${({ checked }) => (checked ? 'white' : 'inherit')};
  background: ${({ checked }) =>
  checked
    ? `transparent` : 'inherit'};
    text-shadow: ${({ checked }) =>
  checked
    ? `
      0 0 10px rgba(128, 0, 128, 0.95),
      0 0 20px rgba(128, 0, 128, 0.8),
      0 0 30px rgba(128, 0, 128, 0.6),
      0 0 40px rgba(148, 0, 148, 0.4),
      0 0 50px rgba(148, 0, 148, 0.2)
    `
    : 'none'};
  animation: ${({ checked }) => (checked ? 'shake 0.5s' : 'none')};
  animation-iteration-count: infinite;
  &:active {
   color: inherit;
    transition: 0.2s;
    text-shadow: 
      0 0 10px rgba(141, 214, 153, 0.95),
      0 0 20px rgba(141, 214, 153, 0.8),
      0 0 30px rgba(141, 214, 153, 0.6),
      0 0 40px rgba(141, 214, 153, 0.4),
      0 0 50px rgba(141, 214, 153, 0.2);
  }
`;

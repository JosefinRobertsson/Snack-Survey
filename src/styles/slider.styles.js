import styled from 'styled-components';

export const PriceSlider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background: white;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

    &:hover,
    &:focus {
        opacity: 1;
    }

    &:focus::-webkit-slider-thumb {
        width: 25px;
        height: 25px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        clip-path: circle();
        width: 20px;
        height: 20px;
        background: violet;
        cursor: pointer;

        &:hover {
            width: 25px;
            height: 25px;
        }
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
    }
`;

import styled from 'styled-components';

export const PriceSlider = styled.input`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    background: #fa9cfa;
    outline: none;
    opacity: 1;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 5px;
    box-shadow: 5px 5px 9px 1px rgba(78, 163, 101, 0.9);

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
        background: rgb(249,210,249);
        background: radial-gradient(circle, rgba(249,210,249,1) 2%, rgba(250,156,250,1) 23%, rgba(189,63,189,1) 69%, rgba(128,0,128,1) 100%);
        cursor: pointer;
        transition: width 0.2s, height 0.2s;

        &:hover {
            width: 25px;
            height: 25px;
        }

        /* shrink thumb while pulled */
        &:active { 
            width: 15px; 
            height: 15px;
        }
    }

    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #4CAF50;
        cursor: pointer;
        transition: width 0.2s, height 0.2s;
    }
`;

export const RangeUpdate = styled.p`
    font-family: 'Permanent Marker', cursive;
    color:inherit;
    text-shadow: 2px 2px 3px rgba(78, 163, 101, 0.7);
`;

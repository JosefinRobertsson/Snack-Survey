import styled from "styled-components";

export const StyledProgressBar = styled.div`
    position: relative;
    width: 150px;
    height: 150px;

    .progress-outer {
        width: 100px;
        height: 100px;
        border-radius: 50%;
       position: relative;
       box-shadow: 5px 5px 7px 0px rgba(78, 163, 101, 0.5),
              -5px -5px 9px -1px rgba(255, 255, 255, 0.2);
    }

    .progress-inner {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 3px 3px 5px -1px rgba(78, 163, 101, 0.6),
              inset -3px -3px 9px -1px rgba(255, 255, 255, 0.2),
             
              0px 10px 8px -8px rgba(0, 0, 0, 0.05);
    }

    #progress-display {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Permanent Marker', cursive;
        letter-spacing: 1px;
        text-shadow: 2px 2px 3px rgba(78, 163, 101, 0.7);
        color: #800080;
    }

    #progress-display span {
        color:  rgb(255, 0, 255, 0.7);
    }
`;
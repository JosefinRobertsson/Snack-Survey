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
       box-shadow: 5px 5px 9px -1px rgba(0, 0, 0, 0.15),
              -5px -5px 9px -1px rgba(255, 255, 255, 0.2);
    }

    .progress-inner {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 3px 3px 7px -1px rgba(0, 0, 0, 0.15),
              inset -3px -3px 7px -1px rgba(255, 255, 255, 0.2),
              -1px -1px 0px rgba(0, 0, 0, 0.15),
              0px 10px 8px -8px rgba(0, 0, 0, 0.05);
    }

    #progress-display {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }
`;
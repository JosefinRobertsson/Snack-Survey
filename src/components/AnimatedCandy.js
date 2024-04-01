import React from 'react';
import { AnimatedCandyContainer, AnimatedCandyContainer2, AnimatedCandyContainer3 } from '../styles/animated-candy.styles';
import lollipop from '../images/lollipop64.png';
import chips from '../images/potato-chips64.png';
import gummy from '../images/gummy-bear.png';

const AnimatedCandy = () => {
    const lollipopImg = React.useState(lollipop)[0];
    const chipsImg = React.useState(chips)[0];
    const gummyImg = React.useState(gummy)[0];

    return (
        <>
        <AnimatedCandyContainer>
            <img src={lollipopImg} alt="lollipop" />
            </AnimatedCandyContainer>
        <AnimatedCandyContainer2>
        <img src={gummyImg} alt="gummy bears" />
        </AnimatedCandyContainer2>
        <AnimatedCandyContainer3>
        <img src={chipsImg} alt="chips" />
        </AnimatedCandyContainer3>
        </>
    )

}

export default AnimatedCandy;
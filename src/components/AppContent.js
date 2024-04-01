import React from 'react';
import { snackbase } from '../snackbase';
import StartScreen from './StartScreen';
import Taste from './Taste';
import Type from './Type';
import Flavor from './Flavor';
import { ProgressContext } from './ProgressProvider';
import Texture from './Texture';
import Slider from './Slider';
import ImportantChoice from './ImportantChoice';
import AddSuggestion from './AddSuggestion';
import SummaryScreen from './SummaryScreen';
import ThankYouScreen from './ThankYouScreen';
import greenBackground from '../images/green.png';
import magentaBackground from '../images/magenta1.png';
import AnimatedCandy from './AnimatedCandy';


// 0 start, 1 type, 2 taste, 3 texture, 4 flavor (checkbox), 5 price (slider), 6 options, 7 textinput, 8 summary, 9 thankyou

export const AppContent = () => {
  const { progress } = React.useContext(ProgressContext);
  const [imgSource, setImgSource] = React.useState(greenBackground);

  React.useEffect(() => {
    if (progress >= 9) {
      setImgSource(magentaBackground);
    }  else {
      setImgSource(greenBackground);
    }
  }, [progress]);

  return (
    <div className="all-wrapper">
      <AnimatedCandy />
    <div className="background-image">
      <img src={imgSource}
        alt="background" />
    </div>
      {progress === 0 &&
        <StartScreen />}
      {progress === 1 &&
          <Type data={snackbase} />
      }
      {progress === 2 &&
        <Taste data={snackbase} />
      }
      {progress === 3 &&
        <Texture data={snackbase} />
      }
      {progress === 4 &&
        <Flavor data={snackbase} />
      }
      {progress === 5 &&
        <Slider />}
      {progress === 6 &&
        <ImportantChoice />}
      {progress === 7 &&
        <AddSuggestion />}
      {progress === 8 &&
        <SummaryScreen />}
        {progress === 9 &&
        <ThankYouScreen />}
                  </div>
  );
};

export default AppContent;
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

// 0 start, 1 type, 2 taste, 3 texture, 4 flavor (checkbox), 5 price (slider), 6 options, 7 textinput, results

export const AppContent = () => {
    const { progress } = React.useContext(ProgressContext);
  
    return (
      <>
        {progress === 0 && <StartScreen />}
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
      </>
    );
  };

  export default AppContent;
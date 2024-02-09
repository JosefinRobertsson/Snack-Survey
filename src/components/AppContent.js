import React from 'react';
import { snackbase } from '../snackbase';
import StartScreen from './StartScreen';
import Taste from './Taste';
import Type from './Type';
import { ProgressContext } from './ProgressProvider';
import Texture from './Texture';

// start, type, taste, texture, flavor (checkbox), price (slider), textinput, options, results

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
      </>
    );
  };

  export default AppContent;
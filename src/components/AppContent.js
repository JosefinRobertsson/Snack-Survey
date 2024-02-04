import React from 'react';
import { snackbase } from '../snackbase';
import StartScreen from './StartScreen';
import Taste from './Taste';
import Type from './Type';
import { ProgressContext } from './ProgressProvider';

// start, type, taste, texture, flavor (checkbox), price (slider), textinput, options, results

export const AppContent = () => {
    const { progress } = React.useContext(ProgressContext);
    const [taste, setTaste] = React.useState('');
    const [type, setType] = React.useState('');
  
    return (
      <>
        {progress === 0 && <StartScreen />}
        {progress === 1 &&
          <Taste data={snackbase} taste={taste} setTaste={setTaste} />
        }
        {progress === 2 &&
          <Type data={snackbase} taste={taste} type={type} setType={setType} />
        }
      </>
    );
  };

  export default AppContent;
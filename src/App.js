import React from 'react';
import { snackbase } from './snackbase';
import ProgressButton from './components/ProgressButton';
import StartScreen from './components/StartScreen';
import Radiobuttons from './components/Radiobuttons';
import Taste from './components/Taste';
import Type from './components/Type';

// type, taste, texture, flavor, price, textinput, options

export const App = () => {
 // const [progress, setProgress] = React.useState(0);
 const [showProgress, setShowProgress] = React.useState(false);
 const [taste, setTaste] = React.useState('');
const [type, setType] = React.useState('');

  return (
<>
<StartScreen />
<Taste data={snackbase} taste={taste} setTaste={setTaste} />
<Type data={snackbase} taste={taste} type={type} setType={setType} />
</>
  );
}

export default App;

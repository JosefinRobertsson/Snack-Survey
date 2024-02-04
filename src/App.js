import React from 'react';
import ProgressProvider from './components/ProgressProvider';
import AppContent from './components/AppContent';


export const App = () => {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  );
};


export default App;
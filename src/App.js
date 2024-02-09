import React from 'react';
import ProgressProvider from './components/ProgressProvider';
import AppContent from './components/AppContent';
import TypeTasteTextureProvider from './components/TypeTasteTextureProvider';
import FlavorProvider from './components/FlavorProvider';



export const App = () => {
  return (
    <ProgressProvider>
      <TypeTasteTextureProvider>
        <FlavorProvider>
      <AppContent />
        </FlavorProvider>
      </TypeTasteTextureProvider>
    </ProgressProvider>
  );
};


export default App;
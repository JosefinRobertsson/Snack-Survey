import React from 'react';
import ProgressProvider from './components/ProgressProvider';
import AppContent from './components/AppContent';
import TypeTasteTextureProvider from './components/TypeTasteTextureProvider';
import CheckboxChoiceProvider from './components/CheckboxChoiceProvider';
import PriceProvider from './components/PriceProvider';
import SnackSuggestionProvider from './components/SnackSuggestionProvider';


export const App = () => {


  return (
    <ProgressProvider>
      <TypeTasteTextureProvider>
        <CheckboxChoiceProvider>
          <PriceProvider>
            <SnackSuggestionProvider>    
                <AppContent />
            </SnackSuggestionProvider>
          </PriceProvider>
        </CheckboxChoiceProvider>
      </TypeTasteTextureProvider>
    </ProgressProvider>
  );
};


export default App;
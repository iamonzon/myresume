import React from 'react';
import LandingPage from './components/landing-page/LandingPage';

// App-level constants
const APP_STYLES = {
  CONTAINER: 'min-h-screen bg-gray-100 py-8 print:bg-white print:py-0',
} as const;

function App(): React.JSX.Element {
  return (
    <div className={APP_STYLES.CONTAINER}>
      <LandingPage />
    </div>
  );
}

export default App;

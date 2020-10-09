import React from 'react';
import './App.css';

import NavigationComponent from './modules/Navigation/NavigationComponent';
import RoutesComponent from './modules/Routes/RoutesComponent';

function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <RoutesComponent />
    </div>
  );
}

export default App;

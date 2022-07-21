
import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
 
      <div className="auth-warper">
        <div className="auth-inner"></div>
        <Home />
        <App.css />
        </div> 
    </div>
  );
}

export default App;

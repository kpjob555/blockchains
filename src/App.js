import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Display from './components/displayChains/DisplayChains';
import InputData from './components/sendData/SendData';
import Mine from './components/mine/Mineblock';

import './App.css';

const App = () => {
  const [status, setStatus] = useState(false)
  return (
    <Router>
      <>
        <Link to="/Display">Display</Link>
        <Link to="/InputChains">Input Chains</Link>
        <Link to="/MineBlock" >Mine Block</Link>
      </>
      <>
        <Route path="/Display"><Display /></Route>
        <Route path="/InputChains"><InputData setStatus={setStatus} /></Route>
        <Route path="/MineBlock"><Mine status={status} setStatus={setStatus} /></Route>
      </>
    </Router>
  );
}

export default App;

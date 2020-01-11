import React, { useState } from 'react';

import Header from './core/header/Header';
import './App.css';

const App = () => {
  const [status, setStatus] = useState(false);
  const [url, setUrl] = useState('');
  return (
    <Header status={status} setStatus={setStatus} url={url} setUrl={setUrl} />
  );
}

export default App;

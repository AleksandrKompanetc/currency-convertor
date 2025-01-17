import React, { useState, useEffect } from 'react';
import { Block } from './Block';
import './index.css';

function App() {

  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
    .then((res) => res.json())
    .then((json) => {
      setRates(json.rates);
      console.log(json.rates);
    })
    .catch((err) => {
      console.warn(err);
      alert('Не удалось получить информацию');
    });
  }, []);

  return (
    <div className="App">
      <Block value={0} currency='RUB' onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency='USD' />
    </div>
  );
}

export default App;

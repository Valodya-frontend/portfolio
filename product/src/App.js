import './App.css';
import Header from './page/Header';
import Product from './page/Product';
import Footer from './page/Footer';
import { useState } from 'react';
import { Context } from './page/Context';

function App() {
  const [money, setMoney] = useState(Math.round(Math.random() * 175) * 10);
  const [total, setTotal] = useState(0);
  const [bonus, setBonus] = useState(0);

  let element = { 
    money, setMoney,
    total, setTotal,
    bonus, setBonus
  }

  return (
    <Context.Provider value={element}>
      <div className="App">
        <Header />
        <Product />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;

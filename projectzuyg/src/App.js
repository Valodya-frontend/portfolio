import { useRef, useState } from 'react';
import Header from './pages/Header';
import Product from './pages/Product';
import { Context } from './pages/Context';
import './App.css';
import Cart from './pages/Cart';
import Paymants from './pages/Paymants';

function App() {
  const [show, setShow] = useState(true);
  const [bgColor, setBgColor] = useState('#ff00dd');
  const globalRef = useRef();
  const [shopList, setShopList] = useState([]);
  const [total, setTotal] = useState(0);
  // const [money, setMoney] = useState(Math.round(Math.random() * 255) * 15);
  const [money, setMoney] = useState(1000);
  const [scroll, setScroll] = useState(true);
  const [paymant, setPaymant] = useState(true);

  const addElemenetFunction = (element) => {
    setShopList([...shopList, element]);
  }
  
  const removeElementFunciton = (id) => {
    setShopList([...shopList.filter(elem => elem.id !== id)]);
  }

  let object = {
    show, setShow,
    bgColor, setBgColor,
    globalRef,
    addElemenetFunction,
    shopList, setShopList,
    total, setTotal,
    money, setMoney,
    removeElementFunciton,
    scroll, setScroll,
    paymant, setPaymant
  }

  return (
    <Context.Provider value={object}>
      <div className="App">
        <Header />
        <Product />
        <Cart />
        <Paymants />
      </div>
    </Context.Provider>
  );
}

export default App;
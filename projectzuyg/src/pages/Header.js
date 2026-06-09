import React from 'react';
import './Header.css';
import { AiFillShopping } from 'react-icons/ai';
import { CgColorPicker } from 'react-icons/cg';
import { useContext } from 'react';
import { Context } from './Context';

export default function Header() {
  const elem = useContext(Context);

  return (
    <div className="header">
      <div className="headerEfect"></div>
      <header>
        <h1 onClick={() =>  window.location.reload()}>Only Shop</h1>
        <h3 ref={elem.globalRef}>Long Name For This Pruduct;</h3>
        <h3>{elem.money}$</h3>
        <div className="headerButtons">
          <button onClick={() => {
            elem.setShow(!elem.show);
            elem.setScroll(!elem.scroll);
            document.body.style.overflow = elem.scroll ? 'hidden' : 'visible';
          }}>
            <p>{elem.shopList.length}</p>
            <AiFillShopping />
          </button>
          <button>
            <input type="color" onChange={(event) => {
              elem.setBgColor(event.target.value);
            }} />
            <CgColorPicker />
          </button>
        </div>
        </header>
    </div>
  )
}
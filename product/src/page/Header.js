import React from 'react';
import { useContext } from 'react';
import { Context } from './Context';

export default function Header() {
  const value = useContext(Context);

  return (
        <header>
            <h3>{value.bonus}$</h3>
            <button onClick={() => {
                value.setMoney(value.money + value.bonus);
                value.setBonus(0);
            }}>CashBack</button>
            <h3>{value.money}$</h3>
        </header>
    )
}
import React from 'react';
import { useContext } from 'react';
import { Context } from './Context';

export default function Footer() {
  const value = useContext(Context);

  return (
    <footer>
      <button onClick={() => {
        value.setTotal(0);
        value.setBonus(value.total * 3 / 100);
      }}>Accept</button>
      <h3>{value.total}$</h3>
    </footer>
  )
}
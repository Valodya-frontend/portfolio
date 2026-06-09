import React from 'react';
import { useContext } from 'react';
import { Context } from './Context';

export default function Product() {
  const object = useContext(Context);

  const list = [
      {id : 1, price : 50, picture : 'https://pngimg.com/d/running_shoes_PNG5816.png', name : 'Adidas'},
      {id : 2, price : 100, picture : 'https://media2.sport-bittl.com/images/product_images/original_images/81060263536a_Nike_Fussballschuhe_Phantom_Uni_rot.gif', name : 'Puma'},
      {id : 3, price : 150, picture : 'https://bouncewear.com/cdn/shop/files/MB03_1.png?v=1708191300', name : 'Nike'},
      {id : 4, price : 200, picture : 'https://media2.sport-bittl.com/images/product_images/original_images/89462466228a_LaSportiva_Wanderschuh_Tx4_He_schwarz.gif', name : 'Sport Running'}
  ];

  return (
    <div className='product'>
        {
          list.map((elem, index) => {
            return (
              <div className='item' key={elem.id}>
                <h3>{elem.price}$</h3>
                <img src={elem.picture} alt="" />
                <h3>{elem.name}</h3>
                <button onClick={() => {
                  if(object.money < elem.price) {
                    return false; // Function Chashxati;
                  }
                  else {
                    object.setMoney(object.money - elem.price);
                    object.setTotal(object.total + elem.price);
                  }
                }}>Add</button>
              </div>
            )
          })
        }
    </div>
  )
}
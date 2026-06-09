import React, { useContext } from 'react';
import { Context } from '../pages/Context';
import { list } from './list';
import './Product.css';
import { FiShoppingBag } from 'react-icons/fi';

export default function Product() {
  const elem = useContext(Context);
  const ElementText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias aliquam provident officia. Ut excepturi ducimus voluptate!'

  return (
    <div className='product'>
      {
        list.map((element, index) => {
          return (
            <div className="productItems">
              <div className="effectProduct"></div>
              <div className="detal">
                <h3 className='name'    >{element.name}</h3>
                <div className='pic' style={{ background: `linear-gradient(${elem.bgColor}2c, transparent), url(${element.picture})` }}></div>
                <p className='text'   >{ElementText}</p>
                <h3 className='isQuan' >{element.isQuan}$</h3>
                <button onClick={() => {
                    if(elem.money < element.isQuan) {
                      return false
                    }
                    else {
                      if(elem.shopList.includes(element)) {
                        return false;
                      }
                      else {
                        elem.setMoney(elem.money - element.isQuan);
                        elem.setTotal(elem.total + element.isQuan);
                        elem.addElemenetFunction(element);
                        setTimeout(() => { elem.globalRef.current.style.opacity = '1'; }, 1000)
                        elem.globalRef.current.textContent = element.name;
                        setTimeout(() => { elem.globalRef.current.style.opacity = '0'; }, 2000)
                      }
                    }
                }} className='carzina'>
                  <FiShoppingBag />
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
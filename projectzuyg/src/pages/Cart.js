import './Cart.css';
import { useContext, useState } from 'react';
import { Context } from './Context';
import { AiFillDelete } from 'react-icons/ai';

// clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);       Pak;
// clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); Bac;

export default function Cart() {
    const elem = useContext(Context);
    const [price, setPrice] = useState(0);
    const [quanity, setQuanity] = useState(1);

    let cartOpenClosed = {
        clipPath: elem.show
            ? 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    }

    return (
        <div style={cartOpenClosed} className='cart'>
            <div className="scroll" >
                {
                    elem.shopList.map((shopItems, index) => {
                        return (
                            <div className="miniItems" key={shopItems.id}>
                                <div className="miniItemsEffect"></div>
                                <div className="shopBlock">
                                    <img src={shopItems.picture} alt="" />
                                    <h3 className='mName'>{shopItems.name}</h3>
                                    <h3>{shopItems.information}</h3>
                                    <h3>{shopItems.price}$</h3>
                                    <div className="miniButtons">
                                        <button onClick={() => {
                                            if (shopItems.quanity === 1) {
                                                return false;
                                            }
                                            else {
                                                setQuanity(shopItems.quanity -= 1);
                                                elem.setTotal(elem.total - shopItems.isQuan);
                                                elem.setMoney(elem.money + shopItems.isQuan);
                                                setPrice(shopItems.price -= shopItems.isQuan);
                                            }
                                        }}>-</button>
                                        <p>{shopItems.quanity}</p>
                                        <button onClick={() => {
                                            if (elem.money < shopItems.isQuan) {
                                                return false;
                                            }
                                            else {
                                                setQuanity(shopItems.quanity += 1);
                                                elem.setTotal(elem.total + shopItems.isQuan);
                                                elem.setMoney(elem.money - shopItems.isQuan);
                                                setPrice(shopItems.price += shopItems.isQuan);
                                            }
                                        }}>+</button>
                                    </div>
                                    <button onClick={() => {
                                        if (elem.shopList.length === 1) {
                                            elem.setShow(!elem.show);
                                            document.body.style.overflow = elem.scroll ? 'hidden' : 'visible';
                                            elem.setScroll(true);
                                            elem.setTotal(0);
                                            setQuanity(shopItems.quanity = 1);
                                        }
                                            elem.setMoney(elem.money + shopItems.price);
                                            elem.removeElementFunciton(shopItems.id);
                                            setQuanity(shopItems.quanity = 1);
                                    }}>
                                        <AiFillDelete />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <button className='total'>Total : {elem.total}$</button>
                <button className='total openPaymant' onClick={() => {
                    elem.setPaymant(false);
                }}>Pay With Cart;</button>
            </div>
        </div>
    )
}
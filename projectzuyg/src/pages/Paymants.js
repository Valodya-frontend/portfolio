import { useContext, useState } from 'react';
import './Paymants.css';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Context } from './Context';
import { AutoTabProvider } from 'react-auto-tab';

export default function Paymants() {
  const elem = useContext(Context);
  const [boll, setBool] = useState(false);
  const [one,  setOne]  = useState('');
  const [two,  setTwo]  = useState('');
  const [tree, setTree] = useState('');
  const [four, setFour] = useState('');

  const [valid, setValid] = useState({
    name   : '',
    number : '',
    cvv    : '',
    date   : ''
  });

  let paymantsStyle = {
    clipPath : elem.paymant ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
  }

  return (
    <div className='paymant' style={paymantsStyle}>
      <button className='closedPaymant' onClick={(events) => {
        events.preventDefault();
        elem.setPaymant(true);
      }}>
        <IoChevronBackOutline />
      </button>
      <div className="paymantBox">
        <div className="detalCart">
          <div className="back">
            <div className="cvv">
              <p>{two}</p>
            </div>
          </div>
          <div className="front">
            <section>
              <div className="pl numbers">{one}</div>
              <div className="validThru">
                  <p>Valid <br /> Thru </p>
                  <p>{tree}</p>
              </div>
              <p className='names'>{four}</p>
            </section>
          </div>
        </div>
        <div className="inputBox">
            <AutoTabProvider>
              <input type="text" onChange={(event) => { setOne(event.target.value);  }} placeholder='Number' maxLength={19} tabbable="false" />
              <input type="text" onChange={(event) => { setTwo(event.target.value);  }} placeholder='Cvv'    maxLength={3}  tabbable="false" />
              <input type="text" onChange={(event) => { setTree(event.target.value); }} placeholder='Date'   maxLength={5}  tabbable="false" />
              <input type="text" onChange={(event) => { setFour(event.target.value); }} placeholder='Name Surname'          tabbable="false" />
            </AutoTabProvider>
        </div>
      </div>
    </div>
  )
};

// npm install react-auto-tab => Aftomat Ijecum Inputic Input;
// Gorcume Partadir tabbable="false" <= Grwacqow;
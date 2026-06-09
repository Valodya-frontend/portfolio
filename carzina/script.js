const container = document.querySelector('.container');
const count = document.querySelector('.count');
const addElement = document.querySelectorAll('.add');
const icon = document.querySelector('aside > ion-icon');
const nav = document.querySelector('nav');
const article = document.querySelector('article');

let openClosed = 0;

icon.onclick = () => {
    openClosed++
    if (openClosed == 1) {
        nav.style.clipPath = 'polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)';
        document.body.style.overflow = "hidden";
    }
    else {
        openClosed = 0
        document.body.style.overflow = "visible";
        nav.style.clipPath = 'polygon(0 0, 0 0, 0 29%, 0 69%, 0 100%, 0 100%, 0 59%, 0 22%)';
    }
}

const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis doloremque praesentium neque? Minima ducimus similique repellendus officia!';

addElement.forEach((buttonsAll, index) => {
    let countLogic = 0;
    buttonsAll.onclick = (event) => {
        countLogic++; // 1 Angam Patkeri Ekranin;
        if (countLogic == 1) {
            const img = event.target.parentElement.children[0].src;
            const price = event.target.parentElement.children[1].innerText;

            article.innerHTML += `<div class="cartBox">
                                     <img src="${img}">
                                     <p>${text}</p>
                                     <div class="buttons">
                                         <button class="decrement">-</button>
                                         <p class="quanity">1</p>
                                         <button class="increment">+</button>
                                     </div>
                                     <h3 class="actualPrice" data="${price}">${price}</h3>
                                     <button class="deleteEl">X</button>
                                 </div>`;

            let decrement = document.querySelectorAll('.decrement');
            let quanity = document.querySelectorAll('.quanity');
            let increment = document.querySelectorAll('.increment');
            let actualPrice = document.querySelectorAll('.actualPrice');
            let deleteEl = document.querySelectorAll('.deleteEl');
            let cartBox = document.querySelectorAll('.cartBox');

            deleteEl.forEach((del, i) => {
                increment[i].onclick = () => {
                    quanity[i].innerText++;
                    actualPrice[i].innerText = parseInt(actualPrice[i].getAttribute('data')) * parseInt(quanity[i].innerText) + '$';
                }
                decrement[i].onclick = () => {
                    if (quanity[i].innerText > 1) {
                        quanity[i].innerText--;
                        actualPrice[i].innerText = parseInt(actualPrice[i].getAttribute('data')) * parseInt(quanity[i].innerText) + '$';
                    }
                }
                del.onclick = () => {
                    cartBox[i].className = 'none';
                }
            })

            buttonsAll.onclick = () => {
                for (let k = 0; k < cartBox.length; k++) {
                    cartBox[k].className = 'cartBox';
                }
            }
        }
        else {
            return false;
        }
    };
});

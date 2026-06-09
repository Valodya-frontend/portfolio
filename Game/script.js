const container = document.querySelector('.container');
const box = document.querySelector('.box');
const items = document.querySelectorAll('.items');
const startGame = document.querySelector('.startGame');
const picture = document.createElement('div');
const section = document.querySelectorAll('section');
const countText = document.createElement('h3');

var x = 3;

countText.className = 'countText';
countText.textContent = x;
container.append(countText);

let count = 0;
startGame.onclick = () => {
    section.forEach((sectionsAll, inx) => {
        setInterval(() => {
            sectionsAll.style.transform = 'rotateZ(10deg) scale(.9)';
        }, 1000)
        setInterval(() => {
            sectionsAll.style.transform = 'rotateZ(-10deg) scale(1)';
        }, 2000);
    })

    // Lazer Effect;
    setInterval(() => {
        const M = Math.round(Math.random() * 8);
        items[M].style.boxShadow = '0 0 7px lime inset, 0 0 7px lime inset, 0 0 7px lime inset';
    }, 150);

    setInterval(() => {
        const M = Math.round(Math.random() * 8);
        items[M].style.boxShadow = '0 0 1px lime inset, 0 0 1px lime inset, 0 0 1px lime inset';
    }, 100);

    // // Sxal patasxan;
    items.forEach((elem, index) => {
        elem.onclick = () => {
            count++;
            if (count <= 3) {
                setTimeout(() => {
                    elem.style.transform = 'rotateZ(1800deg) scale(0)';
                    elem.style.transition = 'all 3s linear';
                    elem.style.boxShadow = '0 0 7px lime inset, 0 0 7px lime inset, 0 0 7px lime inset';
                }, 0);
            }
            else {
                location.reload();
            }
            x--
            countText.textContent = x;
        }
    });

    // Chist patasxan;
    const replaceIndex = Math.round(Math.random() * 8);
    items[replaceIndex].onclick = () => {
        count = 0;
        x = 3;
        countText.textContent = x;
        items.forEach((elem, index) => {
            setTimeout(() => {
                elem.style.transform = 'rotateZ(0deg) scale(1)';
            }, 0);
        });
        picture.className = 'picture';
        items[replaceIndex].append(picture);
        setTimeout(() => {
            picture.style.opacity = '1';
        }, 500);
        setTimeout(() => {
            picture.style.opacity = '0';
        }, 3000);
    }
}
// Stexceq Werevic Nerqew Tapwox Twer Baxkacac 0ic 1ic;
// 'use strict';
// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }]

// let active = 0;

// let divpadre = document.querySelector('.items')
// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')
// // const imgSpace = document.querySelector('.item')
// // const img = document.createElement('img')
// // imgSpace.append(img)
// for (let i = 0; i < images.length; i++) {

//     let item = document.createElement('div') // <div></div>
//     item.classList.add('item')

//     // image
//     const img = document.createElement('img'); // <img />
//     img.src = images[i].image;
//     item.append(img)

//     // titolo

//     // testo

//     divpadre.append(item)
// }

// // settare la prima slide come active


// document.querySelectorAll('.item')[active].classList.add('active')

// next.addEventListener('click', function () {
//     document.querySelectorAll('.item')[active].classList.remove('active')
//     active++
//     if (active === images.length) {
//         active = 0
//     }
//     document.querySelectorAll('.item')[active].classList.add('active')
// })
// prev.addEventListener('click', function () {
//     document.querySelectorAll('.item')[active].classList.remove('active')
//     active--
//     if (active === -1) {
//         active = 4
//     }
//     document.querySelectorAll('.item')[active].classList.add('active')
// })

// // divpadre.addEventListener('click', function (e) {
// //     let pulsante = e.target;
// //     if (pulsante.className === 'prev') {
// //         console.log('hai cliccato prima')


// //     } else if (pulsante.className === 'next') {
// //         console.log('hai cliccato next')
// //     }

// //     console.log(pulsante)

// // }) 
'use strict'

const { createApp } = Vue;

const optionObj = {
    data() {

        return {
            upHere: false,
            count: 0,
            Images: ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp',]
        }
    },
    methods: {

        add() {
            if (this.count < this.Images.length - 1) { this.count++; }
            else {
                this.count = 0
            }
        },
        remove() {
            if (this.count > 0) { this.count--; }
            else {
                this.count = 4
            }
        }

    },
    created() {

        setInterval(() => {
            if (this.upHere === false) {
                if (this.count < this.Images.length - 1) { this.count++ }
                else (this.count = 0)
            }
            else {

            }
        }, 1000);
    }
}
const app = createApp(optionObj)
app.mount('#app')
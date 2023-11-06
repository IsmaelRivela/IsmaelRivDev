`use strict`

const videoCortinilla = document.querySelector(`.main__video`)
const videoWrapper = document.querySelector(`.video__wrapper`)

videoCortinilla.play()

videoCortinilla.addEventListener(`ended`,()=>{
    videoWrapper.classList.add(`isFaded`)
})


// menu clicable

const mainMenu = document.querySelector(`.main__menu`)
const menuH2 = document.querySelector(`.menu__h2`)

let menuHandler = ()=>{
    menuH2.classList.toggle('isHided')
}

mainMenu.addEventListener(`click`, menuHandler )

`use strict`

// body opacity
const bodyOpacity = document.querySelector(`.transitionOpacity`)

bodyOpacity.addEventListener(`DOMContentLoaded`,()=>{
    setTimeout(()=>{
    bodyOpacity.classList.add(`isHidden`)
} , 500)
})



// header desplegable

const headerLogo = document.querySelector(`.header__img`)
const headerNav  = document.querySelector(`.header__nav`)
const mainBody   = document.querySelector(`.main`)
const headerLi   = document.querySelectorAll(`.header__li`)


let hideNav = ()=>{
    
    headerNav.classList.remove(`isVisible`)
    headerNav.classList.add(`isHidden`)

    headerLi.forEach((eachLi, i)=>{
        headerLi[i].classList.remove(`liVisible`)
    })
}
let showNav = ()=>{

    headerNav.classList.remove(`isHidden`)
    headerNav.classList.add(`isVisible`)

    headerLi.forEach((eachLi, i)=>{
        
        let liTimer = 300 * i

        setTimeout(()=>{
            headerLi[i].classList.add(`liVisible`)
        }, liTimer)
        
    })
}

headerLogo.addEventListener(`pointerdown`, ()=>{
    headerNav.classList.contains(`isVisible`)
    ? hideNav()
    : showNav()
})

mainBody.addEventListener(`pointerdown`, ()=>{
    hideNav()
})

// carrousel container effect
const sliderContainer = document.querySelectorAll(`.slider__container`)

console.log(sliderContainer)

let fotoIsActive = 0

let carrouselHandler = ()=>{
    
    fotoIsActive++

    if(fotoIsActive >= 3 ){
        fotoIsActive = 0
    }

    sliderContainer.forEach((eachContainer, i)=>{
         sliderContainer[i].classList.remove(`isActive`)
    })

    sliderContainer.forEach((eachContainer , i)=>{
        sliderContainer[fotoIsActive].classList.add(`isActive`)
    })
    
}

setInterval(carrouselHandler , 3000);




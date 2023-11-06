`use strict`
// Home Effect

const fakeImg = document.querySelector(`.main__img`)
const errorGlitch = document.querySelector(`.main__glitch`)
const glitchEffect = document.querySelector(`.glitch__effect`)

console.log(fakeImg)
console.log(errorGlitch)

let fakeImgOpacity = ()=>{
    fakeImg.classList.add(`isActive`)
}

let errorGlitchAddOpacity = ()=>{
    errorGlitch.classList.add(`isActive`)
}

let errorGlitchRemoveOpacity = ()=>{
    errorGlitch.classList.remove(`isActive`)
    glitchEffect.style.display = `none`
}

let fakeImgClick = ()=>{

    errorGlitchAddOpacity()

    setTimeout(fakeImgOpacity, 3000 )

    setTimeout(errorGlitchRemoveOpacity, 3300)

    fakeImg.removeEventListener(`click` , fakeImgClick)
}

let fakeImgScroll = e => {
    
    errorGlitchAddOpacity()

    setTimeout(fakeImgOpacity, 3000 )

    setTimeout(errorGlitchRemoveOpacity, 3300)

    window.removeEventListener(`scroll` , fakeImgScroll)
}

fakeImg.addEventListener(`click`, fakeImgClick)

window.addEventListener(`scroll`, fakeImgScroll)

// 

// 
// header



// sticker




// carrousel

const mainRelated = document.querySelector(`.main__related`)
const relatedWrapper = document.querySelector(`.related__wrapper`)

let relatedWrapperHandlerStart = ()=>{
    relatedWrapper.classList.remove(`isFinal`)
    relatedWrapper.classList.add(`isStart`)
}
let relatedWrapperHandlerFinal = ()=>{
    relatedWrapper.classList.remove(`isStart`)
    relatedWrapper.classList.add(`isFinal`)
}
mainRelated.addEventListener(`wheel`, e=>{
    
    e.preventDefault()
    
    let Scroll = e.deltaY

    console.log(Scroll)

    Scroll > 0 
    ? relatedWrapperHandlerStart ()
    : relatedWrapperHandlerFinal ()

})

// carousel mobile

let touchStartX = 0;
let touchEndX = 0;

mainRelated.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

relatedWrapper.addEventListener('touchend', (e) => {
  
    touchEndX = e.changedTouches[0].clientX;
  
  let touchDiff = touchEndX - touchStartX;

  if (Math.abs(touchDiff) > 20) {
    let delta = touchDiff > 0 ? 1 : -1;

    console.log(delta)

    if (delta > 0) {
        relatedWrapperHandlerFinal ()
    }else if (delta < 0){
        relatedWrapperHandlerStart ()
    }
  }
})

// responsive grid

const heroAsset = document.querySelectorAll(`.hero__asset`)


let spanHandler = ()=>{
    heroAsset.forEach((eachAsset , i)=>{
        heroAsset[i].style.gridColumn = `span 1`
        heroAsset[i].style.gridRow = `span 1`
    })
}

let spanHandlerStopper = ()=>{
    heroAsset.forEach((eachAsset , i)=>{
        heroAsset[i].removeAttribute(`style`)
        heroAsset[i].removeAttribute(`style`)
    })
}

window.addEventListener(`resize`, ()=>{

   window.innerWidth < 550
   ? spanHandler() 
   : spanHandlerStopper() 

})

// black text

const blackText = document.querySelector(`.black__text`)

let blackTextHandler = ()=>{
    blackText.classList.add(`isVisible`)    
}

setTimeout(()=>{
    blackTextHandler()
}, 500)
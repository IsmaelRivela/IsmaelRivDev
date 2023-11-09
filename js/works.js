`use strict`


const mainContainer = document.querySelectorAll (`.main__container`)
const logoContainer = document.querySelectorAll (`.container__img`)
const videoContainer = document.querySelectorAll(`.container__video`)

console.log(mainContainer)

mainContainer.forEach((eachContainer , index)=>{
    
    mainContainer[0].addEventListener(`mouseover`,()=>{
        mainContainer[0].classList.add(`isBig`)
        mainContainer[1].classList.add(`is40_60`)
        mainContainer[2].classList.add(`is60_40`)
        mainContainer[3].classList.add(`isSmall`)
    })
    mainContainer[1].addEventListener(`mouseover`,()=>{
        mainContainer[1].classList.add(`isBig`)
        mainContainer[0].classList.add(`is40_60`)
        mainContainer[3].classList.add(`is60_40`)
        mainContainer[2].classList.add(`isSmall`)
    })
    mainContainer[2].addEventListener(`mouseover`,()=>{
        mainContainer[2].classList.add(`isBig`)
        mainContainer[3].classList.add(`is40_60`)
        mainContainer[0].classList.add(`is60_40`)
        mainContainer[1].classList.add(`isSmall`)
    })
    mainContainer[3].addEventListener(`mouseover`,()=>{
        mainContainer[3].classList.add(`isBig`)
        mainContainer[2].classList.add(`is40_60`)
        mainContainer[1].classList.add(`is60_40`)
        mainContainer[0].classList.add(`isSmall`)
    })
    
})

mainContainer.forEach((eachContainer , index)=>{
    
    mainContainer[0].addEventListener(`mouseout`,()=>{
        mainContainer[0].classList.remove(`isBig`)
        mainContainer[1].classList.remove(`is40_60`)
        mainContainer[2].classList.remove(`is60_40`)
        mainContainer[3].classList.remove(`isSmall`)
    })
    mainContainer[1].addEventListener(`mouseout`,()=>{
        mainContainer[1].classList.remove(`isBig`)
        mainContainer[0].classList.remove(`is40_60`)
        mainContainer[3].classList.remove(`is60_40`)
        mainContainer[2].classList.remove(`isSmall`)
    })
    mainContainer[2].addEventListener(`mouseout`,()=>{
        mainContainer[2].classList.remove(`isBig`)
        mainContainer[3].classList.remove(`is40_60`)
        mainContainer[0].classList.remove(`is60_40`)
        mainContainer[1].classList.remove(`isSmall`)
    })
    mainContainer[3].addEventListener(`mouseout`,()=>{
        mainContainer[3].classList.remove(`isBig`)
        mainContainer[2].classList.remove(`is40_60`)
        mainContainer[1].classList.remove(`is60_40`)
        mainContainer[0].classList.remove(`isSmall`)
    })
    
})



mainContainer.forEach((eachContainer , i)=>{
    
       mainContainer[i].addEventListener(`click`, (e)=>{
        
        e.preventDefault()

        setTimeout(()=>{
            (logoContainer[i].classList.add(`isFaded`))
        } , 1000)
        
        mainContainer[i].classList.add(`isClicked`)

        setTimeout(() => {
            videoContainer.forEach((eachVideo , j)=>{
                videoContainer[j].classList.add(`isVisible`)
            })
            videoContainer[i].play()

            console.log(videoContainer[i].duration*1000)
        }, 2000);

        videoContainer[i].addEventListener(`ended`, ()=>{
            window.location.href = mainContainer[i].getAttribute(`href`)
        })
    }) 
    
    
})




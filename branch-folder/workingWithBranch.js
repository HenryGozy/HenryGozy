const button = document.getElementById('btn1')
const scrollCont = document.getElementById('scroll-cont')
const buttons = document.querySelectorAll('.btn3')
const rgbLoopBtn = document.getElementById('rgb-btn')
buttons.forEach(element => {
    element.addEventListener('click', () => {
        const scrollWidth = scrollCont.clientWidth
        let scrollAmout = 0
        if (element.id === 'left') {
            scrollAmout = -1
        }
        else if (element.id === 'right') {
            scrollAmout = 1;
        }
        let combine = scrollWidth * scrollAmout

        scrollCont.scrollBy({ left: combine, behavior: "smooth" })
    })
});

scrollCont.addEventListener('scroll', () => {

    CheckFor()
})
function CheckFor() {
    buttons[0].style.display = (scrollCont.scrollLeft === 0) ? 'none' : 'inline';
}

button.addEventListener('click', () => {
    document.body.classList.toggle('logy')
    console.log('hey')
})

window.onload = function () {
    console.log('hey')
}

rgbLoopBtn.addEventListener('click', buttonsLoop)

function buttonsLoop() {
    document.getElementById('DisButton').innerHTML = ''
    for (i = 0; i <= 10; i++) {
        let r = R()
        let g = G()
        let b = B()
        const button = document.createElement('button')
         button.textContent = `rgb(${r},${g},${b})`
        button.className = 'btnStyle'
        button.style.color = (r < 50 || g <50 ||  b < 50) ? 'white' : 'black';
        button.style.backgroundColor = `rgb(${r},${g},${b})`
        document.getElementById('DisButton').appendChild(button)
    }
}

function R() {
    const R = Math.round(Math.random() * 225)
    return R
}
function G() {
    const g = Math.round(Math.random() * 225)
    return g
}
function B() {
    const b = Math.round(Math.random() * 225)
    return b

}
CheckFor()
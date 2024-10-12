const button = document.getElementById('btn1')
const scrollCont = document.getElementById('scroll-cont')
const buttons = document.querySelectorAll('.btn3')
console.log(buttons)
buttons.forEach(element => {
    element.addEventListener('click',()=>{
        const scrollWidth = scrollCont.clientWidth
        let scrollAmout = 0
        if(element.id === 'left'){
            scrollAmout = -1
        }
        else if(element.id === 'right'){
            scrollAmout = 1;
        }
        let combine = scrollWidth*scrollAmout

        scrollCont.scrollBy({left:combine,behavior:"smooth"})
    })
});

scrollCont.addEventListener('scroll',()=>{
   
       CheckFor()
})
function All(){
    document.getElementById('demo1').textContent = "who the fuck click button1"
    document.body.style.backgroundColor = 'rgb(225,30,30)'
}
function CheckFor(){
    buttons[0].style.display = (scrollCont.scrollLeft === 0)?'none' : 'inline';
}

CheckFor()

button.addEventListener('click',()=>{
    document.body.classList.toggle('logy')
    console.log('hey')
})
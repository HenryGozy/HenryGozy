const button = document.getElementById('btn1')
button.addEventListener('click', All)

function All(){
    document.getElementById('demo1').textContent = "who the fuck click button1"
    document.body.style.backgroundColor = 'rgb(225,30,30)'
}
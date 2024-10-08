var container1 = document.querySelector('.container1')
var overlay1 = document.querySelector('.overlay1')
container1.addEventListener('mousemove', function(e){
    var x = e.offsetX
    var y = e.offsetY
    var rotateY = -1/5 * x + 20
    var rotateX = 4/30 * y - 20
    overlay1.style = `background-position : ${x/5 + y/5}%`
    container1.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

container1.addEventListener('mouseout', function(){
    overlay1.style = 'filter : opacity(0)'
    container1.style = 'transform : perspective(350px) rotateY(0deg) rotateX(0deg)'
})

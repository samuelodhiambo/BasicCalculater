var out = document.getElementById("out")

var num1 = document.getElementById('1')
var num2 = document.getElementById('2')
var num3 = document.getElementById('3')
var num4 = document.getElementById('4')
var num5 = document.getElementById('5')
var num6 = document.getElementById('6')
var num7 = document.getElementById('7')
var num8 = document.getElementById('8')
var num9 = document.getElementById('9')
var num0 = document.getElementById('0')
var output
var value1 = ''
var value2 = ''
var operator

num1.addEventListener('click', function(){
    out.innerText += num1.innerText
})
num2.addEventListener('click', function(){
    out.innerText += num2.innerText
})
num3.addEventListener('click', function(){
    out.innerText += num3.innerText
})
num4.addEventListener('click', function(){
    out.innerText += num4.innerText
})
num5.addEventListener('click', function(){
    out.innerText += num5.innerText
})
num6.addEventListener('click', function(){
    out.innerText += num6.innerText
})
num7.addEventListener('click', function(){
    out.innerText += num7.innerText
})
num8.addEventListener('click', function(){
    out.innerText += num8.innerText
})
num9.addEventListener('click', function(){
    out.innerText += num9.innerText
})
num0.addEventListener('click', function(){
    out.innerText += num0.innerText
})

var add = document.getElementById('+')
var subtract = document.getElementById('-')
var multiply = document.getElementById('*')
var div = document.getElementById('/')
var pow = document.getElementById('**')
var clear = document.getElementById('clear')

add.addEventListener('click', function(){
    out.innerHTML += '&nbsp;'
    out.innerText += add.innerText
    out.innerHTML += '&nbsp;'
})
subtract.addEventListener('click', function(){
    out.innerHTML += '&nbsp;'
    out.innerText += subtract.innerText
    out.innerHTML += '&nbsp;'
})
multiply.addEventListener('click', function(){
    out.innerHTML += '&nbsp;'
    out.innerText += multiply.innerText
    out.innerHTML += '&nbsp;'
})
div.addEventListener('click', function(){
    out.innerHTML += '&nbsp;'
    out.innerText += div.innerText
    out.innerHTML += '&nbsp;'
})
pow.addEventListener('click', function(){
    out.innerHTML += '&nbsp;'
    out.innerText += '^2'
    out.innerHTML += '&nbsp;'
})
clear.addEventListener('click', function(){
    out.innerText = ''
})

var compute = document.getElementById('=')
compute.addEventListener('click', function(){
    output = out.innerText.split(/(\s+)/)
    var filtered = output.filter(function(value, index, arr){ 
        return Number(value) != ' ';
    });

    output = filtered
    for (i=0; i<output.length; i++) {
        if (i == 0) {
            value1 = output[i]
        }
        if (i == 1) {
            if (output[1] == '+') {
                operator = '+'
            } else if (output[1] == '-') {
                operator = '-'
            } else if (output[1] == '*') {
                operator = '*'
            } else if (output[1] == '/') {
                operator = '/'
            } else if (output[1] == '^2') {
                operator = '**'
            }
        }
        if (i == 2) {
            value2 = output[i]
        }
    }

    if (operator == '+') {
        out.innerText = parseInt(value1) + parseInt(value2)
    } else if (operator == '-') {
        out.innerText = parseInt(value1) - parseInt(value2)
    } else if (operator == '*') {
        out.innerText = parseInt(value1) * parseInt(value2)
    } else if (operator == '/') {
        out.innerText = parseInt(value1) / parseInt(value2)
    } else if (operator == '**') {
        out.innerText = parseInt(value1) ** 2
    }

})

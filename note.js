const $ = document

let parent = $.getElementById('parents')

let my_input = $.getElementById('the-input')

let add_button = $.getElementById('add')
let delete_button = $.getElementById('delete')

let color = $.getElementById('color')
// let new_div = $.createElement('div')



function clean () {
    my_input.value = ''
    my_input.style.backgroundColor = 'rgb(255, 255, 255)'
}


function one () {
    my_input.style.backgroundColor = 'rgb(255 , 255 , 255)'
}

function two () {
    my_input.style.backgroundColor = 'rgb(242, 199, 114)'    
}
function three () {
    my_input.style.backgroundColor = 'rgb(233, 251, 94)'   
}
function four () {
    my_input.style.backgroundColor = 'rgb(147, 241, 110)'   
}
function five () {
    my_input.style.backgroundColor = 'rgb(43, 107, 47)'   
}
function six () {
    my_input.style.backgroundColor = 'rgb(103, 227, 246)'   
}
function seven () {
    my_input.style.backgroundColor = 'rgb(73 , 103 , 254)'   
}
function eight () {
    my_input.style.backgroundColor = 'rgb(18, 11, 165)'    
}
function nine () {
    my_input.style.backgroundColor = 'rgb(102, 21, 120)'  
}
function ten () {
    my_input.style.backgroundColor = 'rgb(245, 136, 230)'    
}
function eleven () {
    my_input.style.backgroundColor = 'rgb(244, 97, 97)'   
}

function add () {
    let new_div = $.createElement('div')
    new_div.innerHTML = my_input.value
    parent.appendChild(new_div)
    new_div.setAttribute('class' , 'change2')
    let inputbk = my_input.style.backgroundColor
    new_div.style.backgroundColor = inputbk
    my_input.style.backgroundColor = 'rgb(255 , 255 , 255)'
    my_input.value = ''
    new_div.addEventListener('click' , function () {
       new_div.remove()
   })
}

let body = $.body

body.addEventListener('keypress' , function (event) {
    if (event.key === 'Enter') {
        let new_div = $.createElement('div')
        new_div.innerHTML = my_input.value
        parent.appendChild(new_div)
        new_div.setAttribute('class' , 'change2')
        let inputbk = my_input.style.backgroundColor
        new_div.style.backgroundColor = inputbk
        my_input.style.backgroundColor = 'rgb(255 , 255 , 255)'
        my_input.value = ''
        new_div.addEventListener('click' , function () {
           new_div.remove()
       })
    }
})
function change_border () {
    // my_input.style.border = '1px solid #ff8652'
}
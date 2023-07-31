const MAX_NUMBER = 15
const MIN_NUMBER= -15

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler =() => {
    const newValue = parseInt(number.value) -1
    number.value= newValue
    console.log('Subtract was clicked')

    if(add.disabled === true){
        subtract.disabled = false
    }

    if(newValue <= MIN_NUMBER){
        subtract.disabled = true
    }
    
}

const addHandler =() => {
    const newValue = parseInt(number.value) +1
    number.value= newValue
    console.log('Add was clicked')

    if(subtract.disabled === true){
        add.disabled = false
    }

    if(newValue >= MAX_NUMBER){
        add.disabled = true
    }
    
}

subtract.addEventListener('click',subtractHandler)
add.addEventListener('click',addHandler)
var inputValue = document.getElementById("input-box")

function show(event){
    inputValue.value = inputValue.value + event.target.textContent
}

function result(){
    inputValue.value = eval(inputValue.value)
}

function clearValue(){
    inputValue.value = ""
}

function oneElementRemove(){
    var str = inputValue.value.length - 1
    inputValue.value = inputValue.value.slice(0,str)
}
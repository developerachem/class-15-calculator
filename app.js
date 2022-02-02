let calValue = [];

function btnClick(value) {
    calValue.push(value)
    document.querySelector('.monitor-top').innerHTML = calValue.join('')
}

function allClear() {
    calValue = []
    document.querySelector('.monitor-top').innerHTML = 0;
    document.querySelector('.monitor-down').innerHTML = 0;
}

function clearData() {
    calValue.pop()
    document.querySelector('.monitor-top').innerHTML = calValue.join('')
}


function eql() {
    if (calValue == "") {
        alert("Type Any Number")
    } else {
        
        let result = calValue.join('')
        document.querySelector('.monitor-down').innerHTML = eval(result)
        document.querySelector('.monitor-top').innerHTML = 0;
        calValue = [];
    }
}
function getValue(x){
    document.getElementById('inputwindow').value += x;
}

function clearData(y){
    document.getElementById('inputwindow').value = y;
}

function result(){
    var res = eval(document.getElementById('inputwindow').value);
    document.getElementById('inputwindow').value = res;
}
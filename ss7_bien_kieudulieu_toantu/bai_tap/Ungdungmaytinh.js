
function cong() {
    let sodautien = parseInt(document.getElementById("Calculator").value);
    let sothuhai = parseInt( document.getElementById("number1").value);
    let result = sodautien + sothuhai;
document.getElementById("result").innerHTML = result;
}
function tru() {
    let sodautien = parseInt(document.getElementById("Calculator").value);
    let sothuhai = parseInt(document.getElementById("number1").value);
    let result = sodautien - sothuhai;
    document.getElementById("result").innerHTML = result;

}
function nhan() {
    let sodautien = parseInt(document.getElementById("Calculator").value);
    let sothuhai = parseInt(document.getElementById("number1").value);
    let result = sodautien * sothuhai;
    document.getElementById("result").innerHTML = result;

}

function chia() {
    let sodautien = parseInt(document.getElementById("Calculator").value);
    let sothuhai = parseInt(document.getElementById("number1").value);
    let result = sodautien / sothuhai;
    document.getElementById("result").innerHTML = result;

}

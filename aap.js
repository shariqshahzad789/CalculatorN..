let a = document.getElementById("display")
function getval(e) {
    // console.log(e);
    a.value += e;
}

function cal() {
    let ans =  eval (a.value);
    // console.log(ans);
    a.value = ans;
}

function clearAll() {
    a.value = "";
}
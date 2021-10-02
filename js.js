var nodeHtml = {
    hour: document.getElementById("hour"),
    min: document.getElementById("min"),
    second: document.getElementById("second"),
    inputHour: document.getElementById("inputHour"),
    inputMin: document.getElementById("inputMin"),
    inputSecond: document.getElementById("inputSecond"),
    error: document.getElementById("error"),
    btnClock: document.getElementById("btnClock")
}
var state = {
    hour: "",
    min: "",
    second: "",
    setingInt:""
}

function combineFunc() {
    setClock()
    displayClock()
}

function displayClock() {
    handleHour()
    handleMin()
    handleSecond()
}

function handleError(item , maxItem , text){
    if (!item ) return emptyBox(text),true;
    if (item > maxItem || item < 0) return validateNumber(text),true;
    return false
}

function validateNumber(text) {
    nodeHtml.error.innerHTML += text + " " + "را درست وارد نمایید /"
}

function emptyBox(text) {
    nodeHtml.error.innerHTML += text + " " + "را وارد کنید /"
}

function handleHour() {
    var hourActive = state.hour > 12 ? state.hour - 12 : state.hour;
    handleTransform(nodeHtml.hour, 30 * hourActive)
}

function handleMin() {
    handleTransform(nodeHtml.min, 6 * state.min)
}

function handleSecond() {
    handleTransform(nodeHtml.second, 6 * state.second)
}

function handleTransform(tag, deg) {
    tag.style.transform = "rotate(" + deg + "deg)"
}

function init() {
    SetEvents()
}

function removingError() {
    nodeHtml.error.innerHTML = ""
}

function setClock() {
    state.second++;
    if (state.second == 60) {
        state.second = 0;
        state.min++;
    };
    if (state.min == 60) {
        state.min = 0;
        state.hour++;
    }
    console.log("second", state.second, "min", state.min, "hour", state.hour);
}


function SetEvents() {
    nodeHtml.btnClock.addEventListener("click", setState)
    nodeHtml.inputHour.addEventListener("focus", removingError)
    nodeHtml.inputMin.addEventListener("focus", removingError)
    nodeHtml.inputSecond.addEventListener("focus", removingError)

}

function setState(){
    removingError()
    clearInterval(state.setingInt);
    nodeHtml.btnClock.disabled = true;
    state.second = parseInt(nodeHtml.inputSecond.value);
    state.min = parseInt(nodeHtml.inputMin.value);
    state.hour = parseInt(nodeHtml.inputHour.value);
    setFuncs(state.hour, state.min, state.second)

}

function setFuncs(hour, min, second) {
    var errorHour = handleError(hour , 23 ,"ساعت");
    var errorMin = handleError(min ,59 ,"دقیقه");
    var errorSecond = handleError(second, 59 ,"ثانیه");

    nodeHtml.btnClock.disabled = false;

    if (!errorHour && !errorMin && !errorSecond) {
        state.setingInt= setInterval(combineFunc, 1000);
    }
}

init();
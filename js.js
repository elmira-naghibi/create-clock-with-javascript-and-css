var nodeHtml = {
    hour : document.getElementById("hour"),
    min : document.getElementById("min"),
    second : document.getElementById("second")
}


function handleHour(hour){
    var hourActive = hour > 12 ? hour - 12 : hour;
    nodeHtml.hour.style.transform ="rotate("+30*hourActive+"deg)";

}

function handleMin(min){
    nodeHtml.min.style.transform ="rotate("+6*min+"deg)" 
}

function handleSecond(second){
    nodeHtml.second.style.transform ="rotate("+6*second+"deg)"
}


function getClock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
    handleHour(hour)
    handleMin(min)
    handleSecond(second)
}


function init(){
    setInterval(getClock, 1000)
}

init()
var nodeHtml = {
    hour: document.getElementById("hour"),
    min: document.getElementById("min"),
    second: document.getElementById("second"),
}

setInterval(setClock, 1000)

function setClock(){
    const current = new Date();
    const secondsRatio = current.getSeconds() / 60
    const minutesRatio = (secondsRatio + current.getMinutes()) / 60
    const hoursRatio = (minutesRatio + current.getHours()) /12
    setRotation(nodeHtml.second, secondsRatio)
    setRotation(nodeHtml.min, minutesRatio)
    setRotation(nodeHtml.hour, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.transform = "rotate(" + rotationRatio*360 + "deg)"
}
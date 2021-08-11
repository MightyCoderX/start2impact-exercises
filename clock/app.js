const secondHand = document.getElementById('secondHand');
const minuteHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');

updateClock();
setInterval(updateClock, 1000);

function updateClock()
{
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setHandRotation(secondHand, secondsRatio);
    setHandRotation(minuteHand, minutesRatio);
    setHandRotation(hourHand, hoursRatio);
}

function setHandRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360);
}
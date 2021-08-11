const h2Elem = document.getElementById('number');

h2Elem.addEventListener('numberChanged', e =>
{
    h2Elem.textContent = e.detail.number;
    h2Elem.style.color = e.detail.textColor;
});


function changeNumber(number, textColor)
{
    const event = new CustomEvent('numberChanged', {
        detail: {
            number,
            textColor
        }
    });

    h2Elem.dispatchEvent(event);
}
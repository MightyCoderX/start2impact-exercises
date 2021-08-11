/*
const numOne = document.getElementById('numOne');
const numTwo = document.getElementById('numTwo');
const result = document.getElementById('result');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add()
{
    result.textContent = Number(numOne.value) + Number(numTwo.value);
}
*/

const people = ['simon', 'bruce', 'ben'];
const peoplePicsID = people.map(person => person+'Pic');

people.map(id => document.getElementById(id)).forEach(personLinkElem =>
{
    personLinkElem.addEventListener('click', e =>
    {
        e.preventDefault();
        peoplePicsID.forEach(picID =>
        {
            if(picID != personLinkElem.dataset.img)
            {
                document.getElementById(picID).classList.add('hide');
            }
            else
            {
                document.getElementById(picID).classList.toggle('hide');
            }
        });
    });
});

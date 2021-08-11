const editableList = document.getElementById('editableList');
const editableListItems = editableList.querySelectorAll('li');

editableListItems.forEach(li => li.addEventListener('click', editItem));

function editItem()
{
    const inputElem = this.querySelector('input');
    
    this.classList.add('editing');
    inputElem.select();

    const updateItem = () =>
    {
        this.classList.remove('editing');
        this.querySelector('span').textContent = inputElem.value;
    }


    inputElem.addEventListener('blur', updateItem);
    inputElem.addEventListener('keypress', e => 
    {
        if(e.key === 'Enter') updateItem();
    });
}
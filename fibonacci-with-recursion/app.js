const numFibIndex = document.getElementById('numFibIndex');
const outFib = document.getElementById('outFib');

updateOutput();

numFibIndex.addEventListener('input', updateOutput);

function updateOutput()
{
    outFib.style.color = null;
    // Added the plus before to convert the value into a number
    if(!numFibIndex.value || numFibIndex.value < numFibIndex.min)
    {
        outFib.innerText = '';
        return;
    }
    
    let fibNum;

    try
    {
        fibNum = fibonacci(+numFibIndex.value);
    }
    catch(err)
    {
        outFib.style.color = 'red';
        fibNum = 'Stack overflow: number too big!';
    }
    
    
    outFib.innerText = fibNum;
}

function fibonacci(index)
{
    if(index == 1) return 1;

    return fibonacci(index-1) + index;
}
            
                
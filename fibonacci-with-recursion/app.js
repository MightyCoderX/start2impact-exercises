function fibonacci(index)
{
    if(index == 1) return 1;

    return fibonacci(index-1) + index;
}

console.log(fibonacci(5));
            
                
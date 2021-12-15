export function increment(value)
{
    return {
        type: 'INCREMENT',
        payload: value
    }
}

export function decrement()
{
    return {
        type: 'DECREMENT'
    }
}
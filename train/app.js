class Train
{
    constructor(name)
    {
        this.name = name;
        this.isRunning = false;
    }

    depart()
    {
        this.isRunning = true;
    }

    stop()
    {
        this.isRunning = false;
    }

    toString()
    {
        return `${this.name} is ${this.isRunning ? '' : 'not'} running`;
    }
}

const train = new Train('Tom');
console.log({...train});

train.depart();
console.log({...train});

train.stop();
console.log({...train});

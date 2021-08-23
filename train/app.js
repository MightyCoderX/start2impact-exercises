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
}

const train = new Train('Tom');
console.log(train.isRunning);

train.depart();
console.log(train.isRunning);

train.stop();
console.log(train.isRunning);

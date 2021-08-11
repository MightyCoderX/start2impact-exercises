class Calculator
{
    constructor(prevOperandElem, currOperandElem)
    {
        this.prevOperandElem = prevOperandElem;
        this.currOperandElem = currOperandElem;
        this.clear();
    }

    clear()
    {
        this.prevOperand = '';
        this.currOperand = '';
        this.operation = undefined;
    }

    delete()
    {
        this.currOperand = this.currOperand.toString().slice(0, -1);
    }

    appendNumber(number)
    {
        if(number === '.' && this.currOperand.includes('.')) return;

        this.currOperand = this.currOperand.toString() + number.toString();
    }

    chooseOperation(operation)
    {
        if(this.currOperand === '') return;
        if(this.prevOperand !== '')
        {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = '';
    }

    compute()
    {
        let computation;
        const prev = Number(this.prevOperand);
        const curr = Number(this.currOperand);

        if(isNaN(prev) || isNaN(curr)) return;

        switch(this.operation)
        {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
            default:
                return
        }

        this.clear();
        this.currOperand = computation;
    }

    getDisplayNumber(number)
    {
        const stringNumber = number.toString();
        const integerDigits = Number(stringNumber.split('.')[0]);
        const decimanDigits = stringNumber.split('.')[1];
        
        const integerDisplay = isNaN(integerDigits) ? '' : integerDigits.toLocaleString('en');

        return decimanDigits == null ? integerDisplay : `${integerDisplay}.${decimanDigits}`;
    }

    updateDisplay()
    {
        if(this.operation != null)
        {
            this.prevOperandElem.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        }
        else
        {
            this.prevOperandElem.innerText = '';
        }
        this.currOperandElem.innerText = this.getDisplayNumber(this.currOperand);
    }
}
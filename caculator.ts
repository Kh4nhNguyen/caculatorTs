interface Operation {
    run(number1:number, number2:number) : number;
}

class Addition implements Operation {
    run(number1: number, number2: number): number {
        return number1 + number2
    }
}

class Subtraction implements Operation {
    run(number1: number, number2: number): number {
        return number1 - number2
    }
}

class Division implements Operation {
    run(number1: number, number2: number): number {
        if(number2 === 0){
            throw new Error("Number is equal 0")
        }
        return number1/number2;
    }
}

interface Calculation {

    register(operatorName: string, operator: Operation): this

    provide(operatorName: string): Operation

    result(operatorName: string, number1: number, number2: number): number;
}

class Caculator implements Calculation{

    private operator: Record<string, Operation>;

    constructor() {
        this.operator = {}
    }

    register(operatorName: string, operator: Operation): this {
        this.operator[operatorName] = operator
        return this
    }

    provide(operatorName: string): Operation {
        const operator = this.operator[operatorName]
        if (!operator) {
            throw new Error(`Operator with name: ${operatorName} is not support`)
        }

        return operator
    }

    result(operatorName: string, number1: number, number2: number): number {
        return this.provide(operatorName).run(number1, number2)
    }
}

const cal = new Caculator();

cal
    .register("+", new Addition())
    .register("-", new Subtraction())
    .register("/", new Division())

try{
    console.log(cal.result("/", 1, 1))
    console.log(cal.result("+", 1, 2))
    console.log(cal.result("-", 1, 2))
}
catch(e){
    console.log(e)
}



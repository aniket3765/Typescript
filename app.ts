const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement ;
const butttonElement = document.querySelector('button')!;

const numResults: number[] = [];
const textResults: string[] = [];

type numOrString = number | string;
type resultObj = { val: number; timestamp: Date };

interface obj  {
    val: number;
 timestamp: Date
}

function add(num1: numOrString, num2: numOrString){
    if(typeof num1 === 'number' && typeof num2 === 'number')
   { 
    return num1+num2;
}
else if(typeof num1 === 'string' && typeof num2 === 'string'){
    return num1+" "+num2;
}
else{
    return +num1 + +num2
}
}

function printResult(resultObj: obj){
    console.log(resultObj.val)
}

butttonElement.addEventListener('click',()=>{
const num1 = num1Element.value;
const num2 = num2Element.value;
const result = add(+num1, +num2);
const stringResult = add(num1, num2);
numResults.push(result as number);
textResults.push(stringResult as string)
printResult({val:result as number, timestamp:new Date() })
console.log(numResults, textResults)
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(()=>{
        resolve('Done!');
    },1000)
});

myPromise.then((result)=>{
    console.log(result.split('o'))
})
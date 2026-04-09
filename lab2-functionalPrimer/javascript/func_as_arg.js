//Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(){
    let arr = [];
    for (let i = 1; i<= end; i++) {
        arr.push(i);
    }
    return arr;    
}

function applicatorFunc(inpFunc, s, start, end){
    if(s=='s'){
        const arr = inpFunc();        
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }
    else{        
        const arr = inpFunc();
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum/arr.length;
    }
}

let x = applicatorFunc(arrFunc, 's');
console.log(x);

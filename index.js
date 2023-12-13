// code your solution here

// Creating a function using function declaration 
function saturdayFun (activity =`roller-skate` ){

    return `This Saturday, I want to ${activity}!`
}


// Assigning a function expression to a constant 
const mondayWork = function (activity = `go to the office`){

        return `This Monday, I will ${activity}.`;
}

// Closure in f(x)s
function wrapAdjective(decorativeSymbol){

    return function (opinion = `special`){

        return `You are ${decorativeSymbol+opinion+decorativeSymbol}!`
    };
};
// Declare your function here
function createGreeting (name , age){
    const yearsold = `${age} yearsold`
    return `Hello my name is ${name} and i am ${yearsold}` 
}
const greeting = createGreeting("Daniel", 30);

console.log(greeting);

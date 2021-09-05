const doSomethingAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve ('Do Something Async'), 3000)
            : reject(new Error('Test error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before 1');
doSomething();
console.log('After 1');

const function2 = async() => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error){
        console.log(error);
    }
}

console.log('Before 2');
function2();
console.log('After 2');
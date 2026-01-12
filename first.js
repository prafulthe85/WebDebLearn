console.log('first');

function importantAction(username){
    setTimeout(()=>{
        return `Hello ${username}`
    },1000)
}

const message = importantAction('YEhehehehe')
console.log(message)

console.log('second');

// ouput of above, first undefined second, as setimeout doesn't return spontaneously
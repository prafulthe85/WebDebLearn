////////  Promises ////////
// Promises are used to handle asynchronous operations in JavaScript using .then() and .catch() methods.


// console.log('first');

// const prom = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const result = false;
//         if(result) resolve('Subscribe to Roadside Coder');
//         else reject('Error Occurred while subscribing');
//     }, 1000)
// })

// prom.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// console.log('second');


// Now lets use the last code using promises to avoid callback hell



function importantAction(incoming){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Subscribe to ${incoming}`)
        },1000)
    })
}
function likeTheVideo(incoming){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Like the ${incoming} video`)
        },500)
    })
}

function shareTheVideo(incoming){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Share the ${incoming} video`)
        },500)
    })
}

// still the below is becoming nested, we will use async await to avoid this nesting
// importantAction('Roadside Coder')
//    .then((res)=>{
//         console.log(res);
//         likeTheVideo('JavaScript Interview Questions')
//             .then((res)=>{
//                 console.log(res);
//                 shareTheVideo('JavaScript Interview Questions')
//                     .then((res)=>{
//                         console.log(res);
//                     })
//                     .catch((err)=>{
//                         console.log(err);
//                     })
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })
//    })
//    .catch((err)=>{
//         console.log(err);
//    })


// WE can use the below code also in promises called Promise chaining to avoid nesting 

// importantAction('Roadside Coder')
//     .then((res)=>{
//         console.log(res);
//         return likeTheVideo('JavaScript Interview Questions')
//     })
//     .then((res)=>{
//         console.log(res);
//         return shareTheVideo('JavaScript Interview Questions')
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{ 
//         console.log(err);
//     })


// Promise.all is a combinator that takes an arr of promises and return an array of promises when all the promises are resolved, if one fails it returns the error of that promise

// Promise.all([
//     importantAction('Roadside Coder'),
//     likeTheVideo('JavaScript Interview Questions'),
//     shareTheVideo('JavaScript Interview Questions')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Promise.race is a combinator that takes an arr of promises and return the result of the first settled promise, whether it is resolved or rejected

// Promise.race([
//     importantAction('Roadside Coder'),
//     likeTheVideo('JavaScript Interview Questions'),
//     shareTheVideo('JavaScript Interview Questions')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Promise.allSettled is a combinator that takes an arr of promises and return an array of objects describing the outcome of each promise, whether it is resolved or rejected

// Promise.allSettled([
//     importantAction('Roadside Coder'),
//     likeTheVideo('JavaScript Interview Questions'),
//     shareTheVideo('JavaScript Interview Questions')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// Promise.any is a combinator that takes an arr of promises and return the result of the first fulfilled promise, if all promises are rejected it returns an AggregateError

// Promise.any([
//     importantAction('Roadside Coder'),
//     likeTheVideo('JavaScript Interview Questions'),
//     shareTheVideo('JavaScript Interview Questions')
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// Now lets use async await to avoid nesting and make the code look synchronous

const result =  async () =>{
    try{
        const message1 = await importantAction('Roadside Coder');
        console.log(message1);
        const message2 = await likeTheVideo('JavaScript Interview Questions');
        console.log(message2);
        const message3 = await shareTheVideo('JavaScript Interview Questions');
        console.log(message3);
    } catch(err){
        console.log(err);
    }
}
result();
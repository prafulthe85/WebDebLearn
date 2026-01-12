/////////.    CALLBACK HELL    ///////////
console.log('first');

function importantAction(incoming, cb){
    setTimeout(()=>{
        cb(`Subscribe to ${incoming}`)
    },1000)
}
function likeTheVideo(incoming, cb){
    setTimeout(()=>{
        cb(`Like the ${incoming} video`)
    },500)
}

function shareTheVideo(incoming, cb){
    setTimeout(()=>{
        cb(`Share the ${incoming} video`)
    },500)
}

// this is how we use callback functions, but below is the nested callback hell
// so now we will use promises to avoid callback hell
const message = importantAction('Roadside Coder', function(item){
    console.log(item);
    likeTheVideo('JavaScript Interview Questions',function(item) {
        console.log(item);
        shareTheVideo('JavaScript Interview Questions', function(item){
            console.log(item);
        })
    })
}) // using callback will print first second Hello YEhehehehe
// console.log(message)

console.log('second');

// ouput of above, first undefined second, as setimeout doesn't return spontaneously
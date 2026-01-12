// 1. What's the output
// console.log('start');

// const promise1 = new Promise((resolve, reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })
// promise1.then((res)=>{
//     console.log(res);
// })
// console.log('end');

// ouptut: start 1 3 end 2
// Note: supppose the resolve(2) is not there, then output will be start 1 3 end, as there is no resolve to trigger the then block

// //////////  2. What's the output.   ///////////

// const fun = () => {
//     return new Promise(function (resolve, reject){
//         reject('error occurred');
//     })
// };

// const output = fun();

// output
//    .then(function(){
//        console.log('Success 1');
//    })
//    .then(function(){
//         console.log('Success 2');
//    })
//    .catch(function(err){
//        console.log('Erorr: ', err);
//    })
//    .then(function(){
//         console.log('Success 3');
//    })

// output: Erorr: error occurred Success 3, as after catch block the chain continues to next then block

// ////////  3. What's the output.   ///////////

const job = (input) => {
    return new Promise(function (resolve, reject){
        if(input) resolve('success');
        else reject('error');
    })
};

const output = job(true);

output
   .then(function(data){
        console.log(data); // success
        return job(false);
   })
   .then(function(data){
        if(data !== 'victory'){
            throw 'Defeat';// ignoring return, as throw will give error
        }
        return job(true);
   })
   .then(function(data){
        console.log(data);
   })
   .catch(function(err){
        console.log(err); // come here directly, output: Defeat
        return job(false);
   })
   .then(function(data){
        console.log(data);
        return job(true);
   })
   .catch(function(err){
        console.log(err); // come here directly, output: error
        return 'Error caught';
   })
   .then(function(data){
        console.log(data); // output: Error caught
        return new Error('test'); // this will not go to catch block, as it is not thrown
   })
   .then(function(data){
        console.log('Success: ', data.message); // output: Success: test
   })
   .catch(function(err){
        console.log('Final Error: ', err.message); // will not come here
   })
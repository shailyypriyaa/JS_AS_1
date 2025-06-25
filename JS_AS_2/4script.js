// Promise API
// there are major 4 promise apis
// Promise.all() : Promise.all() is a utility method that runs multiple promises concurrently (in parallel) and waits for ALL of them to complete successfully. suppose we have 10 users and we want to make api calls for all of that, it takes array(iterable) of promises as input, lets say we have [p1, p2, p3], it will make 3 parallel api calls and get the result, suppose p1 takes 3s to get the result, p2 gets 1s, and p3 gets 2s,(3s, 1s, 2s) and all are success, output will be an array of result of all those promises, [val1, val2, val3], all are respective results of their promises, final promise api will take 3s, mtlb individually kitna bhi time lage, final result will be after 3s, "it will wait for all of them to finish".
// what if one gets rejected?, we have [p1, p2, p3], time taken(3s, 1s, 2s), now p2 gets rejected after 1s, as soon as any one of them gets rejected, promise.all() will throw an error(after 1s turant), aur p2 se jo error milega wahi final error me show hoga, turant se error ayega, kisi aur promise ka wait ny krega, now what happens to p1 and p3, they can't be cancelled in between, so they will execute but kya faida, promsie.all toh gya, error de dia, "it will not wait for other promises", 1s ki jagah 2s vala agar reject hua toh just 2s ke baad error will come.
// it is like "FAIL FAST", as soon as one fails it gives the result

// Promsie.allsettled([p1, p2, p3]) : after time (3s, 1s, 2s), [val1, val2, val3], yehi ayega same upar vale ki tarah, if p2 gets rejected in this, "it will wait for all promises to settle" and after 3s it gives [val1, err2, val3].

// Promise.race([p1, p2, p3]) : person who finishes first becomes the winner, time taken(3s, 1s, 2s), after 1s, it gives us (val2), "it gives the value of first settled promise", but what if the first settled promise gets rejected, if p2 fails, error comes from p2, (err2), it will just give the result of first settled promise chahe vo success ho ya failure.

// Promise.any([p1, p2, p3]) : "it will wait for first promsie to get successful", time takn(3s, 1s, 2s), it gives (val2) after 1s, what if p2 gets rejected after 1s, now nothing will happen and it will wait for a success, so after 2s, it gives result as (val3), and if p3 also fails then it again waits and gives val1 after 3s, now what if everything fails, now the result will be aggregate error, [err1, err2, err3], "seeking for first success". To get the errors array in console, you have to write 
// .catch((err) => {
//     console.log(err);
//     console.log(err.errors);
// })

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P2 Success"), 1000);
    setTimeout(() => reject("P2 Fail"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"), 2000);
})
// all these are dummy promises

Promise.all([p1, p2, p3]).then(res => {
    console.log(res); //['P1 Success', ..., ...]
})
.catch((err) => {
    console.error(err); // if we wont write the catch block, it will give uncaught error in console(bad prcatice)
})
// try others just replace promise.all with promise.allSettled and promise.race and promise.any
// settled -> got the result, it can either be resolve or reject, success or failure, fulfill or reject.
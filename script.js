let tableBody = document.getElementById('output');
tableBody.innerHTML = '<h2>Loading...</h2>';

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 1500);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3');
    }, 2000);
});

Promise.all([p1, p2, p3])
.then(data => {
    console.log(data);
    tableBody.innerHTML = data.join('<br>');
})
.catch(err => {
    console.log(err);
});
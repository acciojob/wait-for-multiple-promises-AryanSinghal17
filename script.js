let tableBody = document.getElementById("output");

tableBody.innerHTML = `
<tr>
    <td colspan="2">Loading...</td>
</tr>
`;

function createPromise() {
    let time = Math.random() * 2 + 1;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time);
        }, time * 1000);
    });
}

let p1 = createPromise();
let p2 = createPromise();
let p3 = createPromise();

Promise.all([p1, p2, p3]).then((times) => {
    tableBody.innerHTML = "";

    let total = Math.max(...times);

    times.forEach((time, index) => {
        tableBody.innerHTML += `
        <tr>
            <td>Promise ${index + 1}</td>
            <td>${time.toFixed(3)}</td>
        </tr>
        `;
    });

    tableBody.innerHTML += `
    <tr>
        <td>Total</td>
        <td>${total.toFixed(3)}</td>
    </tr>
    `;
});
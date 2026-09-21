let tableBody = document.getElementById("output");

tableBody.innerHTML = `
<tr>
    <td colspan="2">Loading...</td>
</tr>
`;

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1.5);
    }, 1500);
});

let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});

Promise.all([p1, p2, p3]).then((times) => {

    tableBody.innerHTML = "";

    let total = 0;

    times.forEach((time, index) => {
        total += time;

        tableBody.innerHTML += `
        <tr>
            <td>Promise ${index + 1}</td>
            <td>${time}</td>
        </tr>
        `;
    });

    tableBody.innerHTML += `
    <tr>
        <td>Total</td>
        <td>${total}</td>
    </tr>
    `;
});``
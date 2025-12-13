const submitBtn = document.getElementById("submitBtn");
const tableBody = document.querySelector("tbody");
let count = 0;


submitBtn.addEventListener("click", function () {
const math = Number(document.getElementById("math").value);
const english = Number(document.getElementById("english").value);


if (isNaN(math) || isNaN(english)) return;


count++;
const avg = ((math + english) / 2).toFixed(2);


const row = document.createElement("tr");
row.innerHTML = `
<td>${count}</td>
<td>${math}</td>
<td>${english}</td>
<td>${avg}</td>
`;


tableBody.appendChild(row);
updateColumnAverages();
});


function updateColumnAverages() {
const rows = tableBody.querySelectorAll("tr");
let mathSum = 0;
let engSum = 0;


rows.forEach(row => {
mathSum += Number(row.children[1].innerText);
engSum += Number(row.children[2].innerText);
});


const len = rows.length;
document.getElementById("mathAvg").innerText = (mathSum / len).toFixed(2);
document.getElementById("engAvg").innerText = (engSum / len).toFixed(2);
document.getElementById("overallAvg").innerText = ((mathSum + engSum) / (len * 2)).toFixed(2);
}
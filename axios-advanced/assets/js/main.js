import { deleteButton, getAllname } from "./API/requests/suplplier.js";
import API_URL from "./API/base_url.js";
const tbodyID = document.getElementById("tbodyID");

getAllname(API_URL).then((res) => {
  renderUI(res.name);
});
function renderUI(arr) {
  tbodyID.innerHTML = "";

  arr.forEach((trID) => {
    tbodyID.innerHTML += `
        <tr id="trId">
        <td>
        ${trID.id}</td>
        <td>${trID.companyName}</td>
        <td>${trID.contactName}</td>
        <td>${trID.contactTitle}</td>
        <td><button class="btn btn-primary btn-sm">Detail</button></td>
        <td><button class="btn btn-warning btn-sm">Update</button></td>
        <td><button onclick="deleteAt(${trID.id})" id='deleteBtn' class="btn btn-danger btn-sm">Delete</button></td>
        </tr>
        
        `;
  });
}

function deleteAt(e) {
  console.log(e);
}

// FUNKCJE STRONY
    const ele = document.getElementById("btn");
    const overlay = document.getElementById('overlay');
    const reset = document.getElementById('reset');
    const close_element = document.getElementById('x-icon');
    //endpoint
    const ep_url = "https://jsonplaceholder.typicode.com/users";

    let counter = localStorage.getItem("count") || 0;

    ele.addEventListener('click', CountAndShowResetButton());
    reset.addEventListener('click', ResetButton());
    overlay.addEventListener('click', CloseViaOverlay());
    close_element.addEventListener('click', CloseViaX());
function CountAndShowResetButton() {
    console.log(localStorage.getItem('count'))
    document.getElementById("alert-container").style.display = "block";
    counter++;
    document.getElementById('alert-text-2').innerHTML = `You have clicked <strong>${counter} times </strong> to related button.`;
    localStorage.setItem("count", counter);    
    if(counter >= 5) {
        document.getElementById('reset').style.visibility = "visible";
    } else {
        document.getElementById('reset').style.visibility = "hidden";
    }
}
function ResetButton() {
    counter = 0;
    localStorage.setItem("count", counter);
    document.getElementById('alert-text-2').innerHTML = `You have clicked <strong>${counter} times </strong> to related button.`;
}
function CloseViaOverlay() {
    document.getElementById("alert-container").style.display = "none";
}
function CloseViaX() {
    document.getElementById("alert-container").style.display = "none";
}
    // TABELKA
let cust = [];
async function LoadTable(url) {
    const response = await fetch(url);
    var data = await response.json();
    if (response) {
        hideloader();
    }
    show(data);
    
}
LoadTable(ep_url);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
function show(data) {
    let orginal = JSON.parse(JSON.stringify(data));
    cust = orginal;
    let tab = 
        `<tr id='table_header'>
          <th>Name</th>
          <th>Email</th>
          <th>Adress</th>
          <th>Phone</th>
          <th>Company name</th>
         </tr>`;
    
    for (let values of cust) {
        tab += `<tr> 
            <td>${values.name} </td>       
            <td>${values.email} </td>       
            <td>${values.address.city} ${values.address.street} ${values.address.suite} </td>       
            <td>${values.phone} </td>       
            <td>${values.company.name} </td>       
        </tr>`;
    }
    document.getElementById("customers").innerHTML = tab;
}



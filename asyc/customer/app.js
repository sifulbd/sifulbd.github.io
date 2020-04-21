document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>Id : ${customer.id}</li>
                    <li>Name: ${customer.name} </li>
                    <li>Email: ${customer.email}</li>
                    <li>Membership: ${customer.membership}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}

document.getElementById('btn2').addEventListener('click', loadAllCustomers);

function loadAllCustomers() {
    // instentiate
    const xhr = new XMLHttpRequest();

    // connection
    xhr.open('GET', 'customers.json', true);

    // after load
    xhr.onload = function() {
        if(xhr.status === 200) {
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customer){
                output += `
                <ul>
                    <li>Id : ${customer.id}</li>
                    <li>Name: ${customer.name} </li>
                    <li>Email: ${customer.email}</li>
                    <li>Membership: ${customer.membership}</li>
                </ul>               
                `;
                
            })
            document.getElementById('output').innerHTML = output;
        }
    }

    // send dom
    xhr.send();

}

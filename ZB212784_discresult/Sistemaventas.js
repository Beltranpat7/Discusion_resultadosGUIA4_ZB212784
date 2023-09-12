let totalSale = 0;

function addToSale() {
    const productName = document.getElementById("productName").value;
    const unitPrice = parseFloat(document.getElementById("unitPrice").value);
    const quantity = parseFloat(document.getElementById("quantity").value);

    const detail = unitPrice * quantity;
    totalSale += detail;

    const table = document.getElementById("productsTable").getElementsByTagName('tbody')[0];
    
    
    let newRow = table.insertRow();
    newRow.insertCell(0).innerText = productName;
    newRow.insertCell(1).innerText = unitPrice.toFixed(2);
    newRow.insertCell(2).innerText = quantity.toFixed(2);
    newRow.insertCell(3).innerText = detail.toFixed(2);

    
    document.getElementById("totalSale").innerText = totalSale.toFixed(2);
}

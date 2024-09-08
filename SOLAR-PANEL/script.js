document.getElementById('solarForm').addEventListener('submit', function (event) 
{
    event.preventDefault();

    const numPanels = parseFloat(document.getElementById('numPanels').value);
    const panelArea = parseFloat(document.getElementById('panelArea').value);
    const panelYield = parseFloat(document.getElementById('panelYield').value);

    // Assumed cost per KWp
    const costPerKWp = 300;
    

    if (isNaN(numPanels) || isNaN(panelArea) || isNaN(panelYield)) 
    {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const totalArea = numPanels * panelArea; 
    const yieldDecimal = panelYield / 100; // Convert percentage to decimal
    const kWp = totalArea * yieldDecimal;   

    const finalBill = kWp * costPerKWp;

    document.getElementById('result').innerText = `Estimated KWp: ${kWp.toFixed(2)} kWp`; //2 use decimal
    document.getElementById('finalBill').innerText = `Estimated Final Bill: Rs.${finalBill.toFixed(2)}`;
});



addEventListener("load", main)

function main() {
    btCalcSales.addEventListener("click", calculateSales) //main function
}

function calculateSales() {
    Price=parseFloat(txPrice.value) // Price formula
    TaxRate=parseFloat(txTaxRate.value)/100 //TaxRate formula
    Tax=Price*TaxRate // Tax formula
    Total=Price+Tax // Total formula
    spTotal.innerHTML=Total.toFixed(2)
}


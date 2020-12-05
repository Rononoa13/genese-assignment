function inputBill(){
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip').value
    console.log(bill)
    console.log(tip)
    // calculateTip(bill, tip)
    console.log(calculateTip(bill, tip));
    // onDisplayTotal();
    

}

function calculateTip(bill, tip) {
    let total =  (tip / 100) + bill;
    document.getElementById('total').innerHTML = "Total: " + total;
    return total;
}

// function onDisplayTotal() {
//     document.getElementById('total').value = calculateTip(bill, tip);
// }
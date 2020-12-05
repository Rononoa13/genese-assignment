function inputBill(){
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip').value
    console.log(bill)
    console.log(tip)
    console.log(calculateTip(bill, tip));

}

function calculateTip(bill, tip) {
    return (tip / 100) + bill;
    

}
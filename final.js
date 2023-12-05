function placeOrder() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    var nameOnCard = document.getElementById("nameOnCard").value;
    var address = document.getElementById("address").value;
    if(!cardNumber||!expiryDate||!cvv||!nameOnCard||!address){
        alert("Please fill the required information");
        return;
    }
    alert("Payment Successful!");
}
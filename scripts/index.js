// Store the wallet amount to your local storage with key "amount"

let amnt = localStorage.getItem("wallet") || 0;
amnt = Number(amnt);

function addToWallet() {
    let amvalue = document.querySelector("#amount").value;
    amvalue = Number(amvalue);

    amnt = amnt + amvalue;
    amnt = Number(amnt);
    console.log(amnt);

    localStorage.setItem("wallet", amnt);
}

function movi()
{
    window.location.href = "movies.html"
}

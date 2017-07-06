/// <reference path="coin.ts" />


class VendingMachine {
    private paid = 0
    acceptCoin = (coin: Quarter): void => {
        this.paid += coin.Value
        var element = document.getElementById("total")
        element.innerHTML = this.paid.toString()
    }
}

//acceptCoin(new Quarter())


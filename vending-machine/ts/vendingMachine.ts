/// <reference path="./coin.ts" />


class vendingMachine {
    private paid = ko.observable(0)
    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid()
        this.paid(oldTotal + coin.Value)
    }
}

//acceptCoin(new Quarter())


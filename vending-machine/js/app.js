var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/Quater.png";
    };
    return Quarter;
}());
/// <reference path="./coin.ts" />
var vendingMachine = (function () {
    function vendingMachine() {
        var _this = this;
        this.paid = 0;
        this.acceptCoin = function (coin) {
            _this.paid += coin.Value;
            var element = document.getElementById("total");
            element.innerHTML = _this.paid.toString();
        };
    }
    return vendingMachine;
}());
//acceptCoin(new Quarter())
/// <reference path="vendingMachine.ts" />
var machine = new vendingMachine();
//# sourceMappingURL=app.js.map
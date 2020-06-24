var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OldJeep = /** @class */ (function () {
    function OldJeep() {
        this.price = 100000;
    }
    OldJeep.prototype.cost = function () {
        return this.price;
    };
    OldJeep.prototype["break"] = function () {
        console.log('You break your car!');
    };
    return OldJeep;
}());
var NewJeep = /** @class */ (function (_super) {
    __extends(NewJeep, _super);
    function NewJeep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 180000;
        _this.autopilot = false;
        return _this;
    }
    NewJeep.prototype.cost = function () {
        return this.price;
    };
    NewJeep.prototype.handleAutoPilot = function () {
        if (!this.autopilot) {
            console.log('Autopilot on!');
            this.autopilot = true;
        }
        else {
            console.log('Autopilot off!');
            this.autopilot = false;
        }
    };
    return NewJeep;
}(OldJeep));
var oldJeep = new OldJeep();
var newJeep = new NewJeep();
newJeep["break"]();
newJeep.handleAutoPilot();
newJeep.handleAutoPilot();

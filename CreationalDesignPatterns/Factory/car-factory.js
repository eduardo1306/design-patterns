"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FordFactory = void 0;
var FordFactory = /** @class */ (function () {
    function FordFactory() {
    }
    FordFactory.getFusion = function () {
        var fusion;
        fusion = {
            power: 207,
            hybrid: true,
            automatic: true,
            airBag: true,
            price: 180000,
        };
        return fusion;
    };
    FordFactory.getFiesta = function () {
        var fiesta;
        fiesta = {
            power: 155,
            hybrid: false,
            automatic: true,
            airBag: true,
            price: 88000,
        };
        return fiesta;
    };
    return FordFactory;
}());
exports.FordFactory = FordFactory;

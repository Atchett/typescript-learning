"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ['cooking', 'sport']
};
myself.bankAccount.deposit(3000);
console.log(myself);

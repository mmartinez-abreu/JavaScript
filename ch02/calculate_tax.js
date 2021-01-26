"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var calculateTax = function(income)
{
    var tax = income;
    if (income >= 0 && income <= 9275)
        {
            tax = income * .10;
        }
    if (income > 9275 && income <= 37650)
        {
            income = income - 9275;
            tax = income * .15 + 927.50;
        }
    if (income > 37650 && income <= 91150)
        {
            income = income - 37650;
            tax = income * .25 + 5183.75;
        }
    if (income > 91150 && income <= 190150)
        {
            income = income - 91150;
            tax = income * .28 + 18558.75;
        }
    if (income > 190150 && income <= 413350)
        {
            income = income - 190150;
            tax = income * .33 + 46278.75;
        }
    if (income > 413350 && income <= 415050)
        {
            income = income - 413350;
            tax = income * .35 + 119934.75;
        }
    if (income > 415050)
        {
            income = income - 415050;
            tax = income * .396 + 120529.75;
        }
    tax = tax.toFixed(2);
    return tax;
};

var processEntry = function()
{
    var income = parseInt ($("income").value);
    var error = "";
    
    if (isNaN(income) || income <= 0)
        {
            error = "Invalid entry. Enter a number greater than zero.";
            $("income").focus();
        }
    if (error == "")
        {
            $("tax").value = calculateTax(income);
        }
    else{
        alert(error);
    }
};

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("income").focus();
};
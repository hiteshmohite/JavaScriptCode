console.log("Hello World!!!");

var first = "Hitesh";
console.log(first);

var last = "Mohite";
console.log(last);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Software Developer";
console.log(job);

// Function Code Challenge

console.log("Functions code challenge!");

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var totalBillArray = new Array();
var billTipArray = new Array();

billTipArray[0] = totalAmount(bill1)[0].toFixed(2);
billTipArray[1] = totalAmount(bill2)[0].toFixed(2);
billTipArray[2] = totalAmount(bill3)[0].toFixed(2);


totalBillArray[0] = totalAmount(bill1)[1].toFixed(2);
totalBillArray[1] = totalAmount(bill2)[1].toFixed(2);
totalBillArray[2] = totalAmount(bill3)[1].toFixed(2);

console.log("Tips for each bill: " + billTipArray);
console.log("Total bills after tips : " + totalBillArray);

function totalAmount(billAmount)
{
    var tipAndTotal = new Array();
    if(billAmount < 50)
    {
        tipAndTotal.push(billAmount * 0.2);
        tipAndTotal.push(billAmount * 1.2);
    }
    else if(billAmount >= 50 && billAmount <= 200)
    {
        tipAndTotal.push(billAmount * 0.15);
        tipAndTotal.push(billAmount * 1.15);
    }
    else
    {
        tipAndTotal.push(billAmount * 0.1);
        tipAndTotal.push(billAmount * 1.1);
    }

    return tipAndTotal
}


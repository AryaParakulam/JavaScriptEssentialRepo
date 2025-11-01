function calculateAmount () {
let i1 = parseFloat(document.getElementById('item1').value);
let i2 = parseFloat(document.getElementById('item2').value);
let i3 = parseFloat(document.getElementById('item3').value);
 let Amount = i1 + i2 + i3;
 console.log(Amount);
 document.getElementById('result').innerText = `Total amount is : ${Amount}`; 
}
var taxRate = 0.09;
var itemsList = [
  {headphones: 20},
  {tv: 300},
  {cellphone: 500}
  ];

function totalCostWithTax(tR, items){
  var valArray = [];
  console.log(items);
  items.forEach(function(item){
    for(var key in item){
      val = item[key];
      valArray.push(val);
    }
    console.log(valArray);
    return valArray;
  });
  var totalCost = valArray.reduce(function(a, b){
    var initial = a+b;
    return initial + initial*tR;
  });
  return totalCost.toFixed(2);
}

console.log(totalCostWithTax(taxRate, itemsList));

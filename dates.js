var today = new Date(2015, 3, 2);

function age(year, month, day) {
  var results = {};
  results.days = Math.abs(day - today.getDate());
  var monthsDiff = Math.abs(month - today.getMonth());
  var yearsDiff = Math.abs(year - today.getFullYear());
  results.months = monthsDiff === 0 ? undefined : monthsDiff;
  results.years = yearsDiff === 0 ? undefined : yearsDiff;
  return results;

}

// ^^^ don't use this! just an example! ^^^ //

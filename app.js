// https://calculator.swiftutors.com/accounts-payable-turnover-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const accountsPayableTurnoverRatioRadio = document.getElementById('accountsPayableTurnoverRatioRadio');
const totalCreditPurchaseRadio = document.getElementById('totalCreditPurchaseRadio');
const averageAccountsPayableRadio = document.getElementById('averageAccountsPayableRadio');

let accountsPayableTurnoverRatio;
let totalCreditPurchase = v1;
let averageAccountsPayable = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

accountsPayableTurnoverRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Credit Purchase';
  variable2.textContent = 'Average Accounts Payable';
  totalCreditPurchase = v1;
  averageAccountsPayable = v2;
  result.textContent = '';
});

totalCreditPurchaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Accounts Payable Turnover Ratio';
  variable2.textContent = 'Average Accounts Payable';
  accountsPayableTurnoverRatio = v1;
  averageAccountsPayable = v2;
  result.textContent = '';
});

averageAccountsPayableRadio.addEventListener('click', function() {
  variable1.textContent = 'Accounts Payable Turnover Ratio';
  variable2.textContent = 'Total Credit Purchase';
  accountsPayableTurnoverRatio = v1;
  totalCreditPurchase = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(accountsPayableTurnoverRatioRadio.checked)
    result.textContent = `Accounts Payable Turnover Ratio = ${computeAccountsPayableTurnoverRatio().toFixed(2)}`;

  else if(totalCreditPurchaseRadio.checked)
    result.textContent = `Total Credit Purchase = ${computeTotalCreditPurchase().toFixed(2)}`;

  else if(averageAccountsPayableRadio.checked)
    result.textContent = `Average Accounts Payable = ${computeAverageAccountsPayable().toFixed(2)}`;
})

// calculation

function computeAccountsPayableTurnoverRatio() {
  return Number(totalCreditPurchase.value) / Number(averageAccountsPayable.value);
}

function computeTotalCreditPurchase() {
  return Number(accountsPayableTurnoverRatio.value) * Number(averageAccountsPayable.value);
}

function computeAverageAccountsPayable() {
  return Number(totalCreditPurchase.value) / Number(accountsPayableTurnoverRatio.value);
}
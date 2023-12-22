//deposit + total : 
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-feild');
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})
//withdraw + total :
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('Withdraw-field');
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You don't have sufficient balance");
        return;
    }
    else {
        const previousWithdrawTotal = getTextElementValueById('withdraw-total');
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        setTextElementValueById('withdraw-total', newWithdrawTotal);
    }
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})

document.getElementById('btn-logout').addEventListener('click', function () {
    window.location.href = 'login.html';
})
document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawFieldString);

    withdrawField.value = '';

    if (isNaN(newWithdraw)) {
        alert('please provide valid number');
        return;
    }


    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const preWithdrawTotalAmountString = withdrawTotalAmount.innerText;
    const preWithdrawTotalAmount = parseFloat(preWithdrawTotalAmountString);

    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceString = totalBalance.innerText;
    const preTotalBalance = parseFloat(preTotalBalanceString);

    if (newWithdraw > preTotalBalance) {
        alert("You don't have sufficient balance");
        return;
    }

    const newWithdrawAmount = preWithdrawTotalAmount + newWithdraw;
    withdrawTotalAmount.innerText = newWithdrawAmount;

    const balanceTotal = preTotalBalance - newWithdrawAmount;
    totalBalance.innerText = balanceTotal;

})
document.getElementById('btn-logout').addEventListener('click', function () {
    window.location.href = 'login.html';
})
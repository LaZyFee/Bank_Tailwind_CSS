document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-feild');
    const newDepositAmmountString = depositField.value;
    const newdepositAmmount = parseFloat(newDepositAmmountString);

    depositField.value = '';

    if (isNaN(newdepositAmmount)) {
        alert('please provide valid number');
        return;
    }

    const depositTotalAmmount = document.getElementById('deposit-total');
    const preDepositTotalString = depositTotalAmmount.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);

    const currentDepositeTotal = preDepositTotal + newdepositAmmount;

    depositTotalAmmount.innerText = currentDepositeTotal;

    const totalBalance = document.getElementById('balance-total');
    const preTotalBalanceString = totalBalance.innerText;
    const preTotalBalance = parseFloat(preTotalBalanceString);

    const balanceTotal = preTotalBalance + newdepositAmmount;
    totalBalance.innerText = balanceTotal;

})
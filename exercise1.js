
const totalPayment = (totalMoney, totalTransaction) => {
    const total = (totalMoney + (3 * totalTransaction)) + (totalMoney * 0.01);
    return total;
};


console.log("total payment: " + totalPayment(200, 5));



// totalMoney + ((3 * totalTransaction) + (totalMoney * 0.01))
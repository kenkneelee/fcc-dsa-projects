function checkCashRegister(price, cash, cid) {
    // declare final change object to be returned
    let change = {
        status: null,
        change: [],
    };

    // reference for values of each currency type
    let currencyTypes = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100,
    };

    // calculate initial change due and 
    let due = cash - price;
    let totalCid = 0;

    // calculate total amount of cash in drawer
    for (let i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
    }
    totalCid = totalCid.toFixed(2);

    // cases for cash in drawer vs change due comparison
    if (totalCid < due) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
    } else if (totalCid == due) {
        change.status = "CLOSED";
        change.change = cid;
    } else {
        change.status = "OPEN";
        let efficient = cid.reverse();
        let give = [];
        // for each denomination in cash drawer
        for (let i = 0; i < efficient.length; i++) {
            // declare temporary array ["currencytype", amount of type tendered] 
            let changes = [efficient[i][0], 0];

            // remove single unit of denomination until either  
            // -cash drawer runs out of that denomination
            // -current denomination exceeds change still due
            while (due >= currencyTypes[efficient[i][0]] && efficient[i][1] > 0){
                efficient[i][1] -= currencyTypes[efficient[i][0]];
                due -= currencyTypes[efficient[i][0]];
                due = due.toFixed(2);
                changes[1] += currencyTypes[efficient[i][0]]
            }
            
            // if any units of the denomination are used, push it to the final change array
            if (changes[1] > 0) {
                give.push(changes);
            }
        }
        // check if debt is cleared after clearing all denominations
        if (due == 0) {
        change.change = give;
        }
        else {
            change.status = "INSUFFICIENT_FUNDS";
        }
    }
    console.log(change);
    return change;
}

/* Sample cid input
[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
  */

  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
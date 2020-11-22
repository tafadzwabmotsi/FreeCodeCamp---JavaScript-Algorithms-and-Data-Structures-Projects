// current units and their prices
const CURRENT_UNITS_AMOUNTS = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1.0],
    ['FIVE', 5.0],
    ['TEN', 10.0],
    ['TWENTY', 20.0],
    ['ONE HUNDRED', 100.0]
  ];
  
  
  function checkCashRegister(price, cash, cid) {
    // get the change
    let change = cash - price;
    const toTotalCashInDrawer = cid.reduce((sum, element) => sum + element[1], 0);
  
    const STATUS_CHANGE = {
      'status': 'INSUFFICIENT_FUNDS',
      'change': []
    };
  
    console.log("Original change is: ", change);
  
    let amountValue;
    // lookup
    if (toTotalCashInDrawer > change){
      for (let index  = CURRENT_UNITS_AMOUNTS.length - 1; index >= 0; index--){
          if (cid[index][1] === 0){
            break;
          }
          else if (change >= cid[index][1]){
            amountValue = 0;
  
            while (change >= cid[index][1]){
              amountValue += cid[index][1];
              change -= cid[index][1];    
            }
  
            STATUS_CHANGE['status'] = 'OPEN';
            STATUS_CHANGE['change'].push([CURRENT_UNITS_AMOUNTS[index][0], amountValue]);
          }
          
          else if (change >= CURRENT_UNITS_AMOUNTS[index][1]){
            amountValue = 0;
  
            while (change >= CURRENT_UNITS_AMOUNTS[index][1]){
              amountValue += CURRENT_UNITS_AMOUNTS[index][1];
              change -= CURRENT_UNITS_AMOUNTS[index][1];
              
              change = Math.round(change * 100) / 100;   
            }
  
            STATUS_CHANGE['status'] = 'OPEN';
            STATUS_CHANGE['change'].push([CURRENT_UNITS_AMOUNTS[index][0], amountValue]);
          }
  
        }
    }
  
    else if (toTotalCashInDrawer === change){
      STATUS_CHANGE['status'] = 'CLOSED';
      STATUS_CHANGE['change'] = cid;
    }
   
    return STATUS_CHANGE;
  }
  
// test
  checkCashRegister(3.26, 100, 
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
    ]);
const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

// Code your solution here

const totalBatteries = batteryBatches.reduce((number, batch) => {
    return number + batch;
  }, 0);
  console.log(totalBatteries)
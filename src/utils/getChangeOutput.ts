export const getChangeOutput = (insertedMoney: number, price: number) => {
  const changeOutput = {
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };

  let money = insertedMoney - price;

  changeOutput[10] = Number(money.toString().slice(0, money.toString().length - 1));
  money -= changeOutput[10] * 10;

  changeOutput[5] = money - 5 >= 0 ? 1 : 0;
  money -= 5;

  let twoCount = 1;
  for (let i = 0; i < twoCount; i++) {
    if (money - 2 > 0) {
      twoCount++;
      money -= 2;
    }
  }

  changeOutput[2] = twoCount - 1;
  changeOutput[1] = money > 0 ? 1 : 0;

  return changeOutput;
};

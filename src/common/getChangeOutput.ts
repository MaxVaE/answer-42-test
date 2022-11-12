export default function getChangeOutput(insertedMoney: number, price: number) {
  const canhgeOutpt = {
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  };

  let money = insertedMoney - price;

  canhgeOutpt[10] = Number(money.toString().slice(0, money.toString().length - 1));
  money -= canhgeOutpt[10] * 10;

  canhgeOutpt[5] = money - 5 >= 0 ? 1 : 0;
  money -= 5;

  let twoCount = 1;
  for (let i = 0; i < twoCount; i++) {
    if (money - 2 > 0) {
      twoCount++;
      money -= 2;
    }
  }

  canhgeOutpt[2] = twoCount - 1;
  canhgeOutpt[1] = money > 0 ? 1 : 0;

  return canhgeOutpt;
}

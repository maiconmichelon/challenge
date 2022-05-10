const getMinimumAmountOfChange = (coins: number[]): number => {
  const sortedCoins = coins.sort((first, second) => first - second);
  let currentMaximumChange = 0;

  for (const coin of sortedCoins) {
    if (coin <= currentMaximumChange + 1) {
      currentMaximumChange += coin;
      continue;
    }

    return currentMaximumChange + 1;
  }

  return currentMaximumChange + 1;
}

export default getMinimumAmountOfChange;

const convertToSquareArray = (numbers: number[]) => {
  const { positiveSquareNumbers, negativeSquareNumbers } = separateSquareNumbers(numbers);
  let positiveIdx = 0;
  let negativeIdx = negativeSquareNumbers.length;
  const result = [];

  while (positiveIdx <= positiveSquareNumbers.length && negativeIdx >= 0) {
    const positiveSquareNumber = positiveSquareNumbers[positiveIdx];
    const negativeSquareNumber = negativeSquareNumbers[negativeIdx - 1];

    if (negativeSquareNumber == null || (positiveSquareNumber != null && positiveSquareNumber <= negativeSquareNumber)) {
      result.push(positiveSquareNumber);
      positiveIdx++;
    } else {
      result.push(negativeSquareNumber);
      negativeIdx--;
    }
  }

  return result;
}

const separateSquareNumbers = (numbers: number[]) => {
  const positiveSquareNumbers = [];
  const negativeSquareNumbers = [];
  for (const number of numbers) {
    const squareNumber = number * number;
    number >= 0 ? positiveSquareNumbers.push(squareNumber) : negativeSquareNumbers.push(squareNumber);
  }

  return { positiveSquareNumbers, negativeSquareNumbers };
}

export default convertToSquareArray;

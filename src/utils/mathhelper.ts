export const lerp = (value1: number, value2: number, amount: number) => {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
};

export const clamp = (n: number, min: number, max: number) => {
  if (n > max) {
    return max;
  } else if (n < min) {
    return min;
  } else {
    return n;
  }
};

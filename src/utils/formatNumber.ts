export const formatNumber = (num: number): string => {
  const str = String(num);
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (i > 0 && (str.length - i) % 3 === 0) res += ",";
    res += str[i];
  }

  return res;
};

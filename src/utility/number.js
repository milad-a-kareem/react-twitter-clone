export const customNum = (x) => {
  x = Number(x);
  switch (true) {
    case x < 0:
      return 0;

    case x >= 0 && x < 10 ** 4:
      return new Intl.NumberFormat().format(x);

    case x >= 10 ** 4 && x < 10 ** 6:
      return `${(x / 1000).toFixed(1)}K`;

    case x >= 10 ** 6 && x < 10 ** 9:
      return `${(x / 10 ** 6).toFixed(1)}M`;

    case x >= 10 ** 9 && x < 10 ** 12:
      return `${(x / 10 ** 9).toFixed(1)}B`;

    case x >= 10 ** 12 && x < 10 ** 15:
      return `${(x / 10 ** 12).toFixed(1)}T`;

    case x >= 10 ** 15 && x < 10 ** 18:
      return `${(x / 10 ** 15).toFixed(1)}Q`;

    default:
      return x;
  }
};

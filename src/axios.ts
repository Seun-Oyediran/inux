import axios from 'axios';

export const fetchTableCoins = async (number: number) => {
  const data = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${number}&page=1&sparkline=false`,
  );

  return data.data;
};

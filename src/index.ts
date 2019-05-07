import Coins from './coins'

const test = (
  address: string,
  name?: string,
  network?: string
): boolean => {
  const coin = Coins(name || 'btc')
  if (coin && coin.validator) return coin.validator.test(address, coin, network)
  return false
}

export default {
  test
}

import Coins from './coins'

const test = (address, coin, network) => {
  coin = Coins(coin || 'btc')
  if (coin.validator) return coin.validator.test(address, coin, network)
  throw new Error('Missing validator for coin: ' + coin)
}

export default {
  test
}

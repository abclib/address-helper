import BTCValidator from './validator/btc'
import ETHValidator from './validator/eth'
import NANOValidator from './validator/nano'
import XRPValidator from './validator/xrp'
import XMRValidator from './validator/xmr'

// defines P2PKH and P2SH address network for standard mainnet and testnet networks
const COINS = [
  {
    name: 'bitcoin',
    symbol: 'btc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'bitcoincash',
    symbol: 'bch',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'litecoin',
    symbol: 'ltc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['30', '05', '32'], testnet: ['6f', 'c4', '3a'] },
    validator: BTCValidator
  },
  {
    name: 'peercoin',
    symbol: 'ppc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['37', '75'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'dogecoin',
    symbol: 'doge',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['1e', '16'], testnet: ['71', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'beavercoin',
    symbol: 'bvc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['19', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'freicoin',
    symbol: 'frc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'protoshares',
    symbol: 'pts',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['38', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'megacoin',
    symbol: 'mec',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['32', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'primecoin',
    symbol: 'xpm',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['17', '53'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'auroracoin',
    symbol: 'aur',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['17', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'namecoin',
    symbol: 'nmc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['34'], testnet: [] },
    validator: BTCValidator
  },
  {
    name: 'biocoin',
    symbol: 'bio',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['19', '14'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'garlicoin',
    symbol: 'grlc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['26', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'vertcoin',
    symbol: 'vtc',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['0x', '47', '05'], testnet: ['6f', 'c4'] },
    segwitHrp: 'vtc',
    validator: BTCValidator
  },
  {
    name: 'bitcoingold',
    symbol: 'btg',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['26', '17'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'komodo',
    symbol: 'kmd',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['3c', '55'], testnet: ['0', '5'] },
    validator: BTCValidator
  },
  {
    name: 'bitcoinz',
    symbol: 'btcz',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1cb8', '1cbd'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'bitcoinprivate',
    symbol: 'btcp',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1325', '13af'], testnet: ['1957', '19e0'] },
    validator: BTCValidator
  },
  {
    name: 'hush',
    symbol: 'hush',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1cb8', '1cbd'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'snowgem',
    symbol: 'sng',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1c28', '1c2d'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'zcash',
    symbol: 'zec',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1cb8', '1cbd'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'zclassic',
    symbol: 'zcl',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1cb8', '1cbd'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'zencash',
    symbol: 'zen',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['2089', '2096'], testnet: ['2092', '2098'] },
    validator: BTCValidator
  },
  {
    name: 'votecoin',
    symbol: 'vot',
    size: 26,
    hash: 'sha256',
    network: { mainnet: ['1cb8', '1cbd'], testnet: ['1d50', '1cba'] },
    validator: BTCValidator
  },
  {
    name: 'decred',
    symbol: 'dcr',
    size: 26,
    hash: 'blake256',
    network: { mainnet: ['073f', '071a'], testnet: ['0f21', '0efc'] },
    validator: BTCValidator
  },
  {
    name: 'digibyte',
    symbol: 'dgb',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['1e'], testnet: [] },
    validator: BTCValidator
  },
  {
    name: 'dash',
    symbol: 'dash',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['4c', '10'], testnet: ['8c', '13'] },
    validator: BTCValidator
  },
  {
    name: 'neo',
    symbol: 'neo',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['17'], testnet: [] },
    validator: BTCValidator
  },
  {
    name: 'neogas',
    symbol: 'gas',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['17'], testnet: [] },
    validator: BTCValidator
  },
  {
    name: 'qtum',
    symbol: 'qtum',
    size: 25,
    hash: 'sha256',
    network: { mainnet: ['3a', '32'], testnet: ['78', '6e'] },
    validator: BTCValidator
  },
  {
    name: 'monero',
    symbol: 'xmr',
    network: { mainnet: ['18'], testnet: ['53'] },
    network2: { mainnet: ['19'], testnet: ['54'] },
    validator: XMRValidator
  },
  {
    name: 'ethereum',
    symbol: 'eth',
    validator: ETHValidator
  },
  {
    name: 'etherzero',
    symbol: 'etz',
    validator: ETHValidator
  },
  {
    name: 'ethereumclassic',
    symbol: 'etc',
    validator: ETHValidator
  },
  {
    name: 'callisto',
    symbol: 'clo',
    validator: ETHValidator
  },
  {
    name: 'nano',
    symbol: 'nano',
    validator: NANOValidator
  },
  {
    name: 'raiblocks',
    symbol: 'xrb',
    validator: NANOValidator
  },
  {
    name: 'ripple',
    symbol: 'xrp',
    validator: XRPValidator
  },
  {
    name: 'bankex',
    symbol: 'bkx',
    validator: ETHValidator
  }
]

const Coins = (name: string) => {
  name = name.toLowerCase()
  for (let i = 0; i < COINS.length; i++) {
    if (COINS[i].name === name || COINS[i].symbol === name) return COINS[i]
  }
  return null
}

export default Coins

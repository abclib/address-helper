import BTCValidator from './validator/btc'
import ETHValidator from './validator/eth'
import NANOValidator from './validator/nano'
import XMRValidator from './validator/xmr'
import XRPValidator from './validator/xrp'

// defines P2PKH and P2SH address types for standard mainnet and testnet networks
const COINS = [{
  name: 'bitcoin',
  symbol: 'btc',
  addressTypes: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'bitcoincash',
  symbol: 'bch',
  addressTypes: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'litecoin',
  symbol: 'ltc',
  addressTypes: { mainnet: ['30', '05', '32'], testnet: ['6f', 'c4', '3a'] },
  validator: BTCValidator
},
{
  name: 'peercoin',
  symbol: 'ppc',
  addressTypes: { mainnet: ['37', '75'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'dogecoin',
  symbol: 'doge',
  addressTypes: { mainnet: ['1e', '16'], testnet: ['71', 'c4'] },
  validator: BTCValidator
},
{
  name: 'beavercoin',
  symbol: 'bvc',
  addressTypes: { mainnet: ['19', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'freicoin',
  symbol: 'frc',
  addressTypes: { mainnet: ['00', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'protoshares',
  symbol: 'pts',
  addressTypes: { mainnet: ['38', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'megacoin',
  symbol: 'mec',
  addressTypes: { mainnet: ['32', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'primecoin',
  symbol: 'xpm',
  addressTypes: { mainnet: ['17', '53'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'auroracoin',
  symbol: 'aur',
  addressTypes: { mainnet: ['17', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'namecoin',
  symbol: 'nmc',
  addressTypes: { mainnet: ['34'], testnet: [] },
  validator: BTCValidator
},
{
  name: 'biocoin',
  symbol: 'bio',
  addressTypes: { mainnet: ['19', '14'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'garlicoin',
  symbol: 'grlc',
  addressTypes: { mainnet: ['26', '05'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'vertcoin',
  symbol: 'vtc',
  addressTypes: { mainnet: ['0x', '47'], testnet: ['6f', 'c4'] },
  segwitHrp: 'vtc',
  validator: BTCValidator
},
{
  name: 'bitcoingold',
  symbol: 'btg',
  addressTypes: { mainnet: ['26', '17'], testnet: ['6f', 'c4'] },
  validator: BTCValidator
},
{
  name: 'komodo',
  symbol: 'kmd',
  addressTypes: { mainnet: ['3c', '55'], testnet: ['0', '5'] },
  validator: BTCValidator
},
{
  name: 'bitcoinz',
  symbol: 'btcz',
  expectedLength: 26,
  addressTypes: { mainnet: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'bitcoinprivate',
  symbol: 'btcp',
  expectedLength: 26,
  addressTypes: { mainnet: ['1325', '13af'], testnet: ['1957', '19e0'] },
  validator: BTCValidator
},
{
  name: 'hush',
  symbol: 'hush',
  expectedLength: 26,
  addressTypes: { mainnet: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'snowgem',
  symbol: 'sng',
  expectedLength: 26,
  addressTypes: { mainnet: ['1c28', '1c2d'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'zcash',
  symbol: 'zec',
  expectedLength: 26,
  addressTypes: { mainnet: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'zclassic',
  symbol: 'zcl',
  expectedLength: 26,
  addressTypes: { mainnet: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'zencash',
  symbol: 'zen',
  expectedLength: 26,
  addressTypes: { mainnet: ['2089', '2096'], testnet: ['2092', '2098'] },
  validator: BTCValidator
},
{
  name: 'votecoin',
  symbol: 'vot',
  expectedLength: 26,
  addressTypes: { mainnet: ['1cb8', '1cbd'], testnet: ['1d25', '1cba'] },
  validator: BTCValidator
},
{
  name: 'decred',
  symbol: 'dcr',
  addressTypes: { mainnet: ['073f', '071a'], testnet: ['0f21', '0efc'] },
  hashFunction: 'blake256',
  expectedLength: 26,
  validator: BTCValidator
},
{
  name: 'digibyte',
  symbol: 'dgb',
  addressTypes: { mainnet: ['1e'], testnet: [] },
  validator: BTCValidator
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
  name: 'ripple',
  symbol: 'xrp',
  validator: XRPValidator
},
{
  name: 'dash',
  symbol: 'dash',
  addressTypes: { mainnet: ['4c', '10'], testnet: ['8c', '13'] },
  validator: BTCValidator
},
{
  name: 'neo',
  symbol: 'neo',
  addressTypes: { mainnet: ['17'], testnet: [] },
  validator: BTCValidator
},
{
  name: 'neogas',
  symbol: 'gas',
  addressTypes: { mainnet: ['17'], testnet: [] },
  validator: BTCValidator
},
{
  name: 'qtum',
  symbol: 'qtum',
  addressTypes: { mainnet: ['3a', '32'], testnet: ['78', '6e'] },
  validator: BTCValidator
},
{
  name: 'bankex',
  symbol: 'bkx',
  validator: ETHValidator
},
{
  name: 'monero',
  symbol: 'xmr',
  addressTypes: { mainnet: ['18'], testnet: ['53'] },
  iAddressTypes: { mainnet: ['19'], testnet: ['54'] },
  validator: XMRValidator
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
}
]

const Coins = type => {
  type = type.toLowerCase()
  for (let i = 0; i < COINS.length; i++) {
    if (COINS[i].name === type || COINS[i].symbol === type) return COINS[i]
  }
  return null
}

export default Coins

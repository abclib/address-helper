import Utils from './crypto/utils'
import XMRB58 from './crypto/xmrb58'

const addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$')
const integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$')

const _base58decode = address => {
  try {
    return XMRB58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

const validateNetwork = (decoded, coin, networkType, addressType) => {
  let network = addressType === 'standard' ? coin.addressTypes : coin.iAddressTypes
  switch (networkType) {
    case 'mainnet':
      return parseInt(decoded.substr(0, 2), 16).toString() === network.mainnet[0]
    case 'testnet':
      return parseInt(decoded.substr(0, 2), 16).toString() === network.testnet[0]
    case 'both':
      return parseInt(decoded.substr(0, 2), 16).toString() === network.mainnet[0] || parseInt(decoded.substr(0, 2), 16) === network.testnet[0]
    default:
      return false
  }
}

const hex2bin = hex => {
  if (hex.length % 2 !== 0) return null
  let res = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return res
}

const test = (address, coin, network) => {
  network = network || 'mainnet'
  let addressType = 'standard'
  if (!addressRegTest.test(address)) {
    if (integratedAddressRegTest.test(address)) addressType = 'integrated'
    else return false
  }
  let decodedAddrStr = _base58decode(address)
  if (!decodedAddrStr) return false
  if (!validateNetwork(decodedAddrStr, coin, network, addressType)) return false
  let addrChecksum = decodedAddrStr.slice(-8)
  let hashChecksum = Utils.keccak256Checksum(hex2bin(decodedAddrStr.slice(0, -8)))
  return addrChecksum === hashChecksum
}

export default {
  test
}

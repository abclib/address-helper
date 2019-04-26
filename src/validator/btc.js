import BaseX from 'base-x'
import Segwit from './crypto/Segwit'
import Utils from './crypto/utils'

const B58 = BaseX('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz')

const _base58decode = address => {
  try {
    return B58.decode(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }
}

const _checksum = (hashFunction, payload) => {
  // Each currency may implement different hashing algorithm
  switch (hashFunction) {
    case 'blake256':
      return Utils.blake256Checksum(payload)
    default:
      return Utils.sha256Checksum(payload)
  }
}

const _addressType = (address, coin) => {
  coin = coin || {}
  // should be 25 bytes per btc address spec and 26 decred
  let expectedLength = coin.expectedLength || 25
  let hashFunction = coin.hashFunction || 'sha256'
  let decoded = _base58decode(address)
  if (!decoded) return null
  let length = decoded.length
  if (length !== expectedLength) return null
  let checksum = Utils.toHex(decoded.slice(length - 4, length))
  let body = Utils.toHex(decoded.slice(0, length - 4))
  let goodChecksum = _checksum(hashFunction, body)
  return checksum === goodChecksum ? Utils.toHex(decoded.slice(0, expectedLength - 24)) : null
}

const isValidP2PKHandP2SHAddress = (address, coin, network) => {
  network = network || 'mainnet'
  let correctAddressTypes = null
  let addressType = _addressType(address, coin)
  if (!addressType) return false
  if (network === 'mainnet' || network === 'testnet') correctAddressTypes = coin.addressTypes[network]
  else correctAddressTypes = coin.addressTypes.mainnet.concat(coin.addressTypes.testnet)
  return correctAddressTypes.indexOf(addressType) >= 0
}

const test = (address, coin, networkType) => {
  return isValidP2PKHandP2SHAddress(address, coin, networkType) || Segwit.isValidAddress(address, coin.segwitHrp)
}

export default {
  test
}

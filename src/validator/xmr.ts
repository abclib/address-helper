import CryptoHelper from '@abckey/crypto-helper'

const addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$')
const integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$')

const validateNetwork = (
  decoded: string,
  coin: { network: any; network2: any; },
  network: string,
  addressType: string
) => {
  let cNetwork = addressType === 'standard' ? coin.network : coin.network2
  switch (network) {
    case 'mainnet':
      return parseInt(decoded.substr(0, 2), 16).toString() === cNetwork.mainnet[0]
    case 'testnet':
      return parseInt(decoded.substr(0, 2), 16).toString() === cNetwork.testnet[0]
    case 'both':
      return parseInt(decoded.substr(0, 2), 16).toString() === cNetwork.mainnet[0] || parseInt(decoded.substr(0, 2), 16) === cNetwork.testnet[0]
    default:
      return false
  }
}

const test = (
  address: string,
  coin: any,
  network: string = 'mainnet'
): boolean => {
  network = network || 'mainnet'
  let addressType = 'standard'
  if (!addressRegTest.test(address)) {
    if (integratedAddressRegTest.test(address)) addressType = 'integrated'
    else return false
  }
  let cBytes = CryptoHelper.base58(address).decode('xmr')
  if (!cBytes) return false
  if (!validateNetwork(cBytes, coin, network, addressType)) return false
  let addrChecksum = cBytes.slice(-8)
  let hashChecksum = CryptoHelper.checksum(cBytes.slice(0, -8), 'keccak256')
  return addrChecksum === hashChecksum
}

export default {
  test
}

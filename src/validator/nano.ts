import CryptoHelper from '@abckey/crypto-helper'

const nanoBasex = CryptoHelper.baseX('13456789abcdefghijkmnopqrstuwxyz')

// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
const regexp = new RegExp('^(xrb|nano)_([13456789abcdefghijkmnopqrstuwxyz]{60})$')

const _checksum = (address: string) => {
  address = address.replace('xrb_', '')
  address = address.replace('nano_', '')
  let cBytes = nanoBasex.decode(address)
  if (!cBytes) return false
  cBytes = cBytes.slice(-37)
  const addrChecksum = cBytes.slice(-5).reverse().toString('hex')
  const hashChecksum = CryptoHelper.blake2b(cBytes.slice(0, -5).toString('hex'), 5, 'hex')
  return addrChecksum === hashChecksum
}

const test = (address: string): boolean => {
  if (regexp.test(address)) return _checksum(address)
  return false
}

export default {
  test
}

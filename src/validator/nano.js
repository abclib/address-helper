import BaseX from 'base-x'
import Utils from './crypto/utils'

const codec = BaseX('13456789abcdefghijkmnopqrstuwxyz')

// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
const regexp = new RegExp('^(xrb|nano)_([13456789abcdefghijkmnopqrstuwxyz]{60})$')

const _checksum = address => {
  let bytes = codec.decode(regexp.exec(address)[2]).slice(-37)
  // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
  let computedChecksum = Utils.blake2b(Utils.toHex(bytes.slice(0, -5)), 5)
  let checksum = Utils.toHex(bytes.slice(-5).reverse())
  return computedChecksum === checksum
}

const test = address => {
  if (regexp.test(address)) return _checksum(address)
  return false
}

export default {
  test
}

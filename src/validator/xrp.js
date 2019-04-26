import Utils from './crypto/utils'
import BaseX from 'base-x'

const codec = BaseX('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz')
const regexp = new RegExp('^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$')

const _checksum = address => {
  let bytes = codec.decode(address)
  let computedChecksum = Utils.sha256Checksum(Utils.toHex(bytes.slice(0, -4)))
  let checksum = Utils.toHex(bytes.slice(-4))
  return computedChecksum === checksum
}
const test = address => {
  if (regexp.test(address)) return _checksum(address)
  return false
}

export default {
  test
}

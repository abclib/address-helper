import CryptoHelper from '@abckey/crypto-helper'

const xrpBasex = CryptoHelper.baseX('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz')
const regexp = new RegExp('^r[rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz]{27,35}$')

const _checksum = (address: string) => {
  const cBytes = xrpBasex.decode(address)
  if (!cBytes) return false
  const addrChecksum = cBytes.slice(-4).toString('hex')
  const hashChecksum = CryptoHelper.checksum(cBytes.slice(0, -4).toString('hex'), 'sha256')
  return addrChecksum === hashChecksum
}
const test = (address: string): boolean => {
  if (regexp.test(address)) return _checksum(address)
  return false
}

export default {
  test
}

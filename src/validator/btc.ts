import CryptoHelper from '@abckey/crypto-helper'
import Utils from '../utils'

const _addressType = (
  address: string,
  coin: any
): string | null => {
  // should be 25 bytes per btc address spec and 26 decred
  const cSize = coin.size
  const cHash = coin.hash
  const cBytes = CryptoHelper.base58(address).decode()
  if (!cBytes || cBytes.length !== cSize) return null
  const payload = cBytes.slice(0, cBytes.length - 4).toString('hex')
  const addrChecksum = cBytes.slice(cBytes.length - 4, cBytes.length).toString('hex')
  const hashChecksum = CryptoHelper.checksum(payload, cHash)
  return addrChecksum === hashChecksum ? cBytes.slice(0, cSize - 24).toString('hex') : null
}

const isP2PKHandP2SHAddress = (
  address: string,
  coin: any,
  network: string = 'mainnet'
): boolean => {
  let networks = null
  const addressType = _addressType(address, coin)
  if (!addressType) return false
  if (network === 'mainnet' || network === 'testnet') networks = coin.network[network]
  else networks = coin.network.mainnet.concat(coin.network.testnet)
  return networks.indexOf(addressType) >= 0
}

const test = (
  address: string,
  coin: any,
  network?: string
): boolean => isP2PKHandP2SHAddress(address, coin, network) || Utils.isSegwit(address, coin.segwitHrp)

export default {
  test
}

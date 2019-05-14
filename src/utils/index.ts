import CryptoHelper from '@abckey/crypto-helper'

const isSegwit = (
  address: string,
  hrp?: string
): boolean => {
  hrp = hrp || 'bc'
  let _decode = CryptoHelper.segwit(hrp, address).decode()
  if (_decode === null) {
    hrp = 'tb'
    _decode = CryptoHelper.segwit(hrp, address).decode()
  }
  if (_decode === null) return false
  const _encode = CryptoHelper.segwit(hrp, _decode.ver, _decode.pro).encode()
  return _encode === address.toLowerCase()
}

export default {
  isSegwit
}

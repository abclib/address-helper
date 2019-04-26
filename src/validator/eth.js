import Utils from './crypto/utils'

const _checksum = address => {
  // Check each case
  address = address.replace('0x', '')
  let addressHash = Utils.keccak256(address.toLowerCase())
  for (let i = 0; i < 40; i++) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    let upperCase = parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]
    let lowerCase = parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]
    if (upperCase || lowerCase) return false
  }
  return true
}

const test = address => {
  // Check if it has the basic requirements of an address
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) return false
  // If it's all small caps or all all caps, return true
  if (/^0x[0-9a-f]{40}$/.test(address) || /^0x?[0-9A-F]{40}$/.test(address)) return true
  // Otherwise check each case
  return _checksum(address)
}

export default {
  test
}

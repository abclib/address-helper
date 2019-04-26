import BN from 'bignumber.js'

let b58 = {}
let alphabet_str = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
let alphabet = []
for (let i = 0; i < alphabet_str.length; i++) {
  alphabet.push(alphabet_str.charCodeAt(i))
}
let encoded_block_sizes = [0, 2, 3, 5, 6, 7, 9, 10, 11]

let alphabet_size = alphabet.length
let full_block_size = 8
let full_encoded_block_size = 11

let UINT64_MAX = BN(2).pow(64)

function bintohex(bin) {
  let out = []
  for (let i = 0; i < bin.length; ++i) {
    out.push(('0' + bin[i].toString(16)).slice(-2))
  }
  return out.join('')
}

function strtobin(str) {
  let res = new Uint8Array(str.length)
  for (let i = 0; i < str.length; i++) {
    res[i] = str.charCodeAt(i)
  }
  return res
}

function uint64_to_8be(num, size) {
  let res = new Uint8Array(size)
  if (size < 1 || size > 8) {
    throw Error('Invalid input length')
  }
  let twopow8 = BN(2).pow(8)
  for (let i = size - 1; i >= 0; i--) {
    res[i] = num.mod(twopow8).toNumber()
    num = num.idiv(twopow8)
  }
  return res
}

b58.decode_block = function (data, buf, index) {
  if (data.length < 1 || data.length > full_encoded_block_size) {
    throw Error('Invalid block length: ' + data.length)
  }

  let res_size = encoded_block_sizes.indexOf(data.length)
  if (res_size <= 0) {
    throw Error('Invalid block size')
  }
  let res_num = BN(0)
  let order = BN(1)
  for (let i = data.length - 1; i >= 0; i--) {
    let digit = alphabet.indexOf(data[i])
    if (digit < 0) {
      throw Error('Invalid symbol')
    }
    let product = order.times(digit).plus(res_num)
    // if product > UINT64_MAX
    if (product.comparedTo(UINT64_MAX) === 1) {
      throw Error('Overflow')
    }
    res_num = product
    order = order.times(alphabet_size)
  }
  if (
    res_size < full_block_size &&
    BN(2).pow(8 * res_size).comparedTo(res_num) <= 0
  ) {
    throw Error('Overflow 2')
  }
  buf.set(uint64_to_8be(res_num, res_size), index)
  return buf
}

b58.decode = function (enc) {
  enc = strtobin(enc)
  if (enc.length === 0) {
    return ''
  }
  let full_block_count = Math.floor(enc.length / full_encoded_block_size)
  let last_block_size = enc.length % full_encoded_block_size
  let last_block_decoded_size = encoded_block_sizes.indexOf(
    last_block_size
  )
  if (last_block_decoded_size < 0) {
    throw Error('Invalid encoded length')
  }
  let data_size =
    full_block_count * full_block_size + last_block_decoded_size
  let data = new Uint8Array(data_size)
  for (let i = 0; i < full_block_count; i++) {
    data = b58.decode_block(
      enc.subarray(
        i * full_encoded_block_size,
        i * full_encoded_block_size + full_encoded_block_size
      ),
      data,
      i * full_block_size
    )
  }
  if (last_block_size > 0) {
    data = b58.decode_block(
      enc.subarray(
        full_block_count * full_encoded_block_size,
        full_block_count * full_encoded_block_size +
        last_block_size
      ),
      data,
      full_block_count * full_block_size
    )
  }
  return bintohex(data)
}

export default b58

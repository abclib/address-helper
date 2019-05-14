## address-helper
[![NPM version](https://img.shields.io/npm/v/@abckey/address-helper.svg)](https://www.npmjs.com/package/@abckey/address-helper)

A Blockchain Encrypted Digital Currency Address Validator.

## Install

```
npm i @abckey/address-helper
```

## Usage

```js
import AddressHelper from '@abckey/address-helper'

AddressHelper.test('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'mainnet') // true
AddressHelper.test('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'eth')    // true
AddressHelper.isSegwit('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bc')    // true
AddressHelper.isSegwit('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bc')    // false
```

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper?ref=badge_large)

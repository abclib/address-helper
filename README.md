# address-helper
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper?ref=badge_shield)


<div>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/address-helper">
    <img src="https://david-dm.org/abcKeyCOM/address-helper.svg"
    alt="Dependency Status" />
  </a>

  <!-- devDependency Status -->
  <a href="https://david-dm.org/abcKeyCOM/address-helper#info=devDependencies">
    <img src="https://david-dm.org/abcKeyCOM/address-helper/dev-status.svg" alt="devDependency Status" />
  </a>

  <!-- Build Status -->
  <a href="https://travis-ci.org/abcKeyCOM/address-helper">
    <img src="https://travis-ci.org/abcKeyCOM/address-helper.svg"
    alt="Build Status" />
  </a>

  <!-- NPM Version -->
  <a href="https://www.npmjs.com/package/@abckey/address-helper">
    <img src="https://img.shields.io/npm/v/@abckey/address-helper.svg"
    alt="NPM version" />
  </a>

  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/@abckey/address-helper">
    <img src="https://coveralls.io/repos/github/@abckey/address-helper/badge.svg" alt="Test Coverage" />
  </a>

</div>

<br />

A Blockchain Encrypted Digital Address Validator.

## Install

```
npm i @abckey/address-helper
```

## Usage

```js
import AddressHelper from '@abckey/address-helper'

AddressHelper.test('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'mainnet') // true
AddressHelper.test('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'eth')    // true
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FabcKeyCOM%2Faddress-helper?ref=badge_large)
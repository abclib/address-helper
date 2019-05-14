import test, { ExecutionContext } from 'ava'
import AddressHelper from '../dist/index'

const valid = (
  t: ExecutionContext,
  address: string,
  name?: string,
  network?: string
) => t.is(AddressHelper.test(address, name, network), true)

const invalid = (
  t: ExecutionContext,
  address: string,
  name?: string,
  network?: string
) => t.is(AddressHelper.test(address, name, network), false)

const invalidTest = (t: ExecutionContext, name: string) => {
  invalid(t, '', name) // reject blank
  invalid(t, '%%@', name) // reject invalid base58 string
  invalid(t, '1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', name) // reject invalid address
  invalid(t, 'bd839e4f6fadb293ba580df5dea7814399989983', name) // reject transaction id's
  // testnet
  invalid(t, '', name, 'testnet') // reject blank
  invalid(t, '%%@', name, 'testnet') // reject invalid base58 string
  invalid(t, '1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', name, 'testnet') // reject invalid address
  invalid(t, 'bd839e4f6fadb293ba580df5dea7814399989983', name, 'testnet') // reject transaction id's
}

test('should return true for correct bitcoin addresses', t => {
  valid(t, '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'mainnet')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'both')
  valid(t, '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'testnet')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'both')

  valid(t, '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')
  valid(t, '116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', 'testnet')

  // segwit addresses
  valid(t, 'BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin')
  valid(t, 'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin')
  valid(t, 'bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin')
  valid(t, 'BC1SW50QA3JX3S', 'bitcoin')
  valid(t, 'bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin')
  valid(t, 'tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin')

  invalid(t, 'tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'bitcoin')
  invalid(t, 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5', 'bitcoin')
  invalid(t, 'BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2', 'bitcoin')
  invalid(t, 'bc1rw5uspcuh', 'bitcoin')
  invalid(t, 'bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90', 'bitcoin')
  invalid(t, 'BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P', 'bitcoin')
  invalid(t, 'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7', 'bitcoin')
  invalid(t, 'bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du', 'bitcoin')
  invalid(t, 'tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv', 'bitcoin')
  invalid(t, 'bc1gmk9yu', 'bitcoin')
})

test('should return true for correct bitcoincash addresses', t => {
  valid(t, '12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'mainnet')
  valid(t, '12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both')
  valid(t, '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'testnet')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'both')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoincash', 'testnet')
})

test('should return true for correct litecoin addresses', t => {
  valid(t, 'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin')
  valid(t, 'LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC')
  valid(t, 'LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin')
  valid(t, 'Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', 'testnet')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', 'testnet')
  valid(t, 'QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy', 'litecoin', 'testnet')
  valid(t, 'QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY', 'litecoin', 'testnet')
})

test('should return true for correct peercoin addresses', t => {
  valid(t, 'PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin')
  valid(t, 'PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin')
  valid(t, 'PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin')
  valid(t, 'PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'PPC')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoin', 'testnet')

  // p2sh addresses
  valid(t, 'pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoin', 'testnet')
})

test('should return true for correct dogecoin addresses', t => {
  valid(t, 'DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin')
  valid(t, 'DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin')
  valid(t, 'DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin')
  valid(t, 'DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE')
  // TODO: NEED A DOGECOIN TESTNET ADDRESS

  // p2sh addresses
  valid(t, 'A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', 'testnet')
})

test('should return true for correct beavercoin addresses', t => {
  valid(t, 'BPPtB4EpPi5wCaGXZuNyKQgng8ya579qUh', 'beavercoin')
  valid(t, 'BC1LLYoE4mTCHTJhVYvLGxhRTwAHyWTQ49', 'beavercoin')
  valid(t, 'BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'beavercoin')
  valid(t, 'BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'BVC')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'beavercoin', 'testnet')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'beavercoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'beavercoin', 'testnet')
})

test('should return true for correct freicoin addresses', t => {
  valid(t, '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin')
  valid(t, '1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin')
  valid(t, '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin')
  valid(t, '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'FRC')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoin', 'testnet')

  // p2sh addresse
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoin', 'testnet')
})

test('should return true for correct protoshares addresses', t => {
  valid(t, 'PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares')
  valid(t, 'Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares')
  valid(t, 'PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares')
  valid(t, 'PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'PTS')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protoshares', 'testnet')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protoshares', 'testnet')
})

test('should return true for correct megacoin addresses', t => {
  valid(t, 'MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin')
  valid(t, 'MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin')
  valid(t, 'MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin')
  valid(t, 'MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'MEC')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoin', 'testnet')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoin', 'testnet')
})

test('should return true for correct primecoin addresses', t => {
  valid(t, 'AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin')
  valid(t, 'AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin')
  valid(t, 'ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin')
  valid(t, 'AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin')
  valid(t, 'AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'XPM')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoin', 'testnet')

  // p2sh addresses
  valid(t, 'af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoin', 'testnet')
})

test('should return true for correct auroracoin addresses', t => {
  valid(t, 'ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin')
  valid(t, 'AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin')
  valid(t, 'AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin')
  valid(t, 'AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin')
  valid(t, 'AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'AUR')
  valid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoin', 'testnet')

  // p2sh addresses
  valid(t, '3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin')
  valid(t, '2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoin', 'testnet')
})

test('should return true for correct namecoin addresses', t => {
  valid(t, 'NEpeRmS775fnti8TDgJA28m8KLEfNNRZvT', 'namecoin')
  valid(t, 'MyJ691bGJ48RBK2LS8n1U57wcFLFScFXxi', 'namecoin')
  valid(t, 'NFY9aw1RXLGtWpeqgNQXprnUcZXyKNinTh', 'namecoin')
  valid(t, 'NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'namecoin')
  valid(t, 'NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'NMC')
})

test('should return true for correct BioCoin addresses', t => {
  valid(t, 'B7xseoLGk7hEpMDDeSvZDKmmiAMHWiccok', 'biocoin')
  valid(t, 'B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'biocoin')
  valid(t, 'muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'biocoin', 'testnet')
  valid(t, 'muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'BIO', 'testnet')
  valid(t, 'B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'BIO')
})

test('should return true for correct Garlicoin addresses', t => {
  valid(t, 'GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'garlicoin')
  valid(t, 'GNWeWaoQ6rv21ZFjJWT9vb91hXUzFTLkru', 'garlicoin')
  valid(t, 'mjKbQTkgwzmsL3J86tdVzhyW9pc4NePqTb', 'garlicoin', 'testnet')
  valid(t, 'mnYp36NuyRavMKQ9Q9Q6oGqoorAs9p3zYn', 'GRLC', 'testnet')
  valid(t, 'GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'GRLC')
})

test('should return true for correct Vertcoin addresses', t => {
  valid(t, 'VmoMjGf3zgZLy8sk3PMKd3xikZHXWvnYi7', 'vertcoin')
  valid(t, 'VmhHwXr3J8xMZpy62WuBGpu3xVvThWzcTQ', 'vertcoin')
  valid(t, 'mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'vertcoin', 'testnet')
  valid(t, 'mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'VTC', 'testnet')
  valid(t, 'Vri6Q4GgNFfdtcpxD961TotJwaSaYQCaL5', 'VTC')
  valid('3AXJr29rY9LYC2owNjJLv4xEPftnQTNffD', 'VTC')
  valid(t, 'vtc1qmzq3erafwvz23yfeu9tu45uz2kx3d7esk0rayg', 'VTC')
  valid(t, 'vtc1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvtc', 'VTC')
  valid(t, 'vtc1qh9y09s2crkp63mk26u3vrq9q4w3h8ee8gepjgw', 'VTC')
})

test('should return true for correct BitcoinGold addresses', t => {
  valid(t, 'GW3JrQyHtoVfEFES3Y9JagiX3VSKQStLwj', 'bitcoingold')
  valid(t, 'GUDWdeMyAXQbrNFFivAhkJQ1GfBCFdc7JF', 'bitcoingold')
  valid(t, 'mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'bitcoingold', 'testnet')
  valid(t, 'mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'BTG', 'testnet')
  valid(t, 'GSNFPRsdaM3MXrU5HW1AxgFwmUQC8HXK9F', 'BTG')
})

test('should return true for correct Decred addresses', t => {
  valid(t, 'Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85', 'DCR')
  valid(t, 'DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA', 'decred')
  valid(t, 'DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV', 'decred')
  valid(t, 'TsijUgejaRnLKF5WAbpUxNtwKGUiKVeXLr7', 'decred', 'testnet')
  valid(t, 'TsZ9QmAoadF12hGvyALp6qvaF4be3BmLqG9', 'dcr', 'testnet')
})

test('should return true for correct Digibyte addresses', t => {
  valid(t, 'DG2rM2orU2JH5i4ACh3AKNpRTNESdv5xf8', 'DGB')
  valid(t, 'DBR2Lj1F17eHGHXgbpae2Wb4m39bDyA1qo', 'DGB')
  valid(t, 'D9TDZTR9Z9Mx2NoDJnhqhnYhDLKRAmsL9n', 'digibyte')
  valid(t, 'DHRzA1YHA1kFWpz2apRckZJy6KZRyGq4EV', 'digibyte')
  valid(t, 'DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'digibyte')
})

test('should return true for correct Ethereum addresses', t => {
  valid(t, '0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum')
  valid(t, '0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum')
  valid(t, '0xAff4d6793F584a473348EbA058deb8caad77a288', 'eth')
  valid(t, '0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH')
  valid(t, '0x52908400098527886E0F7030069857D2E4169EE7', 'ETH')
  valid(t, '0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH')
  valid(t, '0xde709f2102306220921060314715629080e2fb77', 'ETH')
  valid(t, '0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH')
  valid(t, '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH')
  valid(t, '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH')
  valid(t, '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH')

  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ethereumclassic')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETC')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'etherzero')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETZ')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'callisto')
  valid(t, '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'CLO')
})

test('should return true for correct Ripple addresses', t => {
  valid(t, 'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'ripple')
  valid(t, 'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'XRP')
  valid(t, 'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'XRP')
  valid(t, 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'XRP')
  valid(t, 'rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'XRP')
})

test('should return true for correct dash addresses', t => {
  valid(t, 'Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b', 'dash')
  valid(t, 'XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1', 'DASH')
  valid(t, 'XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4', 'dash')
  valid(t, 'yPv7h2i8v3dJjfSH4L3x91JSJszjdbsJJA', 'dash', 'testnet')
})

test('should return true for correct neo addresses', t => {
  valid(t, 'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neo')
  valid(t, 'AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ1X', 'NEO')
})

test('should return true for correct neo gas addresses', t => {
  valid(t, 'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neogas')
})

test('should return true for correct qtum addresses', t => {
  valid(t, 'QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe', 'qtum')
  valid(t, 'QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu', 'QTUM')
  valid(t, 'qcSLSxN1sngCWSrKFZ6UC7ri4hhVSdq9SU', 'qtum', 'testnet')
  valid(t, 'qbgHcqxXYHVJZXHheGpHwLJsB5epDUtWxe', 'qtum', 'testnet')
  valid(t, 'qZqqcqCsVtP2U38WWaUnwshHRpefvCa8hX', 'qtum', 'testnet')
})

test('should return true for correct votecoin addresses', t => {
  valid(t, 't1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin')
  valid(t, 't3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet')
})

test('should return true for correct bitcoinz addresses', t => {
  valid(t, 't1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz')
  valid(t, 't3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet')
})

test('should return true for correct zclassic addresses', t => {
  valid(t, 't1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic')
  valid(t, 't3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet')
})

test('should return true for correct hush addresses', t => {
  valid(t, 't1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush')
  valid(t, 't3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet')
})

test('should return true for correct zcash addresses', t => {
  valid(t, 't1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash')
  valid(t, 't3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet')
})

test('should return true for correct bitcoinprivate addresses', t => {
  valid(t, 'b1M4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate')
  // valid(t, 'bx....', 'btcp')
  // valid(t, 'nx....', 'bitcoinprivate', 'testnet')
})

test('should return true for correct snowgem addresses', t => {
  valid(t, 's1fx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem')
  valid(t, 's3d27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG')
  valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet')
})

test('should return true for correct zencash addresses', t => {
  valid(t, 'znhiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash')
  valid(t, 'zssEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN')
  valid(t, 'ztmWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet')
})

test('should return true for correct komodo addresses', t => {
  valid(t, 'R9R5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo')
  valid(t, 'RAvj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD')
  // valid(t, 't2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet')
})

test('should return true for correct Bankex addresses', t => {
  valid(t, '0xeac39e1bc802baae3d4b9cb518f3f60374bbad6c', 'bankex')
  valid(t, '0x45245bc59219eeaaf6cd3f382e078a461ff9de7b', 'BKX')
  valid(t, '0xf40d80FCfa5cdEa0bB1E570c2D52132ac9bC6aEC', 'bankex', 'testnet')
  valid(t, '0x8A7395f281EeCf2B471B689E87Cf4C7fa8bb957d', 'BKX', 'testnet')
})

test('should return true for correct monero addresses', t => {
  valid(t, '41ez4ahijjAJrAXpJERmGaCXvBKmdFPs5N9aqeMaZVvKKkU41Sp21GMjPHwntt97ca3zToDFXRykpYT6nCSV5gTgNafYPsf', 'monero')
  valid(t, '48bWuoDG75CXMDHbmPEvUF2hm1vLDic7ZJ7hqRkL65QR9p13AQAX4eEACXNk4YP115Q4KRVZnAvmMBHrcGfv9FvKPZnH6vH', 'XMR')
  valid(t, 'A2be3UvzMtkJtxRYgcCbQt2y7Rp2eLVGqNTWfZeankrWimSMM4y7uMP6B9oAZaHsXTj8KFSerkSkkVRuEuEca9QM8VhxCNU', 'monero', 'testnet')

  // integrated addresses
  valid(t, '4Gd4DLiXzBmbVX2FZZ3Cvu6fUaWACup1qDowprUCje1kSP4FmbftiJMSfV8kWZXNqmVwj4m52xqtgFNUudVmsmGkGvkLcCibWfVUfUFVB7', 'monero')
  valid(t, '4J5sF94AzXgFgx8LuWc9dcWkJkGkD3cL3L2AuhX6QA9jFvSxxj6QhHqHXqM2b2Go7G8RyDzEbHxYd9G26XUUbuJChipEyBz9fENMU2Ua9b', 'XMR')
})

test('should return true for correct nano addresses', t => {
  valid(t, 'xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3', 'nano')
  valid(t, 'xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo', 'nano')
  valid(t, 'xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9', 'nano')
  valid(t, 'xrb_1111111111111111111111111111111111111111111111111111hifc8npp', 'nano')
  valid(t, 'xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est', 'nano')
  valid(t, 'xrb_3wm37qz19zhei7nzscjcopbrbnnachs4p1gnwo5oroi3qonw6inwgoeuufdp', 'nano')
  valid(t, 'xrb_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4', 'nano')
  valid(t, 'xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjmgu', 'nano')
  valid(t, 'xrb_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano')
  valid(t, 'nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano')
})

test('should return false for incorrect bitcoin addresses', t => {
  invalidTest(t, 'bitcoin')
})

test('should return false for incorrect bitcoincash addresses', t => {
  invalidTest(t, 'bitcoincash')
})

test('should return false for incorrect litecoin addresses', t => {
  invalidTest(t, 'litecoin')
})

test('should return false for incorrect peercoin addresses', t => {
  invalidTest(t, 'peercoin')
})

test('should return false for incorrect dogecoin addresses', t => {
  invalidTest(t, 'dogecoin')
})

test('should return false for incorrect beavercoin addresses', t => {
  invalidTest(t, 'beavercoin')
})

test('should return false for incorrect freicoin addresses', t => {
  invalidTest(t, 'freicoin')
})

test('should return false for incorrect protoshares addresses', t => {
  invalidTest(t, 'protoshares')
})

test('should return false for incorrect megacoin addresses', t => {
  invalidTest(t, 'megacoin')
})

test('should return false for incorrect primecoin addresses', t => {
  invalidTest(t, 'primecoin')
})

test('should return false for incorrect auroracoin addresses', t => {
  invalidTest(t, 'auroracoin')
})

test('should return false for incorrect namecoin addresses', t => {
  invalidTest(t, 'namecoin')
})

test('should return false for incorrect biocoin addresses', t => {
  invalidTest(t, 'biocoin')
})

test('should return false for incorrect garlicoin addresses', t => {
  invalidTest(t, 'garlicoin')
})

test('should return false for incorrect vertcoin addresses', t => {
  invalidTest(t, 'vertcoin')
  invalid(t, 'vtc1qmzq3erafwvz23yabc9tu45uz2kx3d7esk0rayg', 'vertcoin')
  invalid(t, 'vtc1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvt', 'vertcoin')
  invalid(t, 'vtd1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvtc', 'vertcoin')
})

test('should return false for incorrect bitcoingold addresses', t => {
  invalidTest(t, 'bitcoingold')
})

test('should return false for incorrect decred addresses', t => {
  invalidTest(t, 'decred')
})

test('should return false for incorrect bankex addresses', t => {
  invalid(t, '1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bankex')
  invalid(t, '116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'BKX')
  invalid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bankex', 'testnet')
  invalid(t, 'mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'BKX', 'testnet')
})

test('should return false for incorrect digibyte addresses', t => {
  invalidTest(t, 'digibyte')
})

test('should return false for incorrect eip55 addresses', t => {
  invalid(t, '6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum')
  invalid(t, '0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum')
  invalid(t, '0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum')
  invalid(t, 'aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum')
  invalid(t, '0xff4d6793F584a473', 'ethereum')

  invalid(t, '0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic')
  invalid(t, '0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero')
  invalid(t, '0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto')
})

test('should return false for incorrect ripple addresses', t => {
  invalid(t, 'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple')
  invalid(t, 'rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP')
  invalid(t, '6xAff4d6793F584a473348EbA058deb8ca', 'ripple')
  invalid(t, 'DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple')
})

test('should return false for incorrect dash addresses', t => {
  invalidTest(t, 'dash')
})

test('should return false for incorrect neo addresses', t => {
  invalidTest(t, 'neo')
  invalid(t, 'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo')
  invalid(t, 'AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO')
})

test('should return false for incorrect qtum addresses', t => {
  invalidTest(t, 'qtum')
  invalid(t, 'QNPhBbVhDghASxcUh2vHotQUgNeLRFTcfb', 'qtum')
  invalid(t, 'QOPhBbVhDghASxcUh2vHotQUgNeLRFTcfa', 'QTUM')
  invalid(t, 'qZqqcqCsVtP2U38ABCUnwshHRpefvCa8hX', 'QTUM', 'testnet')
})

test('should return false for incorrect votecoin addresses', t => {
  invalidTest(t, 'votecoin')
  invalid(t, 't1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin')
  invalid(t, 't3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet')
})

test('should return false for incorrect bitcoinz addresses', t => {
  invalidTest(t, 'bitcoinz')
  invalid(t, 't1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz')
  invalid(t, 't3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet')
})

test('should return false for incorrect zclassic addresses', t => {
  invalidTest(t, 'zclassic')
  invalid(t, 't1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic')
  invalid(t, 't3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet')
})

test('should return false for incorrect hush addresses', t => {
  invalid(t, 't1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush')
  invalid(t, 't3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet')
})

test('should return false for incorrect zcash addresses', t => {
  invalidTest(t, 'zcash')
  invalid(t, 't1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash')
  invalid(t, 't3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet')
})

test('should return false for incorrect bitcoinprivate addresses', t => {
  invalidTest(t, 'bitcoinprivate')
  invalid(t, 'b1Y4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate')
  invalid(t, 'bx....', 'BTCP')
  invalid(t, 'nx....', 'bitcoinprivate', 'testnet')
})

test('should return false for incorrect snowgem addresses', t => {
  invalidTest(t, 'snowgem')
  invalid(t, 's1Yx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem')
  invalid(t, 's3Y27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG')
  invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet')
})

test('should return false for incorrect zencash addresses', t => {
  invalidTest(t, 'zencash')
  invalid(t, 'znYiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash')
  invalid(t, 'zsYEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN')
  invalid(t, 'ztYWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet')
})

test('should return false for incorrect komodo addresses', t => {
  invalidTest(t, 'komodo')
  invalid(t, 'R9Y5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo')
  invalid(t, 'RAYj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD')
  // invalid(t, 't2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet')
})

test('should return false for incorrect monero addresses', t => {
  invalidTest(t, 'monero')
  invalid(t, '4AWygwA3hHNE4e4Yr9PtRWJiorXTjZkCi57g4ExYzfXDFFQ8DRFEFyui1dLqVknpqQjGUBdTMbgaFAZaDbrVHdk3GAKBZ3E', 'monero')
  invalid(t, '44643dtxcxjgMWEQLo6mh1c4d9Zxx9GbgK9hEj9iGSiFEryCkbwHyJ3JqxZJRqeC3Hb7ZBLKq5NkaJwR1x95EYnR1bTgN6d', 'xmr')
  invalid(t, 'A17N9ztrxjQD3v3JJtHGvHVnq6BAbujDNEuensB6PFwBYFpkjAicih8hDtX76HBuEag5NeaCuMZmRMe6eE5NMRGxFTQn8nJ', 'monero', 'testnet')

  // integrated
  invalid(t, '4LNSCKNSTPNbJYkyAEgL966eHJHLDHiq1PpwKoiFBybcSqNGYfLBJApC62uQEeGAFxfYEd29uXBBrJFo7DhKqFVNi3GhmN79EtD5dgycYz', 'monero')
  invalid(t, '4JpzTwf3i1GeCV76beVr19179oa8j1L8xNSC1bXMtAxxdf4aTTLqubL8EvXfQmUGKt9MMigFtKy91VtoTTSfg1LU7LocPruT6KcGC9RKJV', 'xmr')
})

test('should return false for incorrect nano addresses', t => {
  invalidTest(t, 'nano')
  invalid(t, 'xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano')
  invalid(t, 'nano_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano')
  invalid(t, 'xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nano')
  invalid(t, 'nano_111111111111111111111111111111111111111111111111111hifc8npp', 'nano')
})

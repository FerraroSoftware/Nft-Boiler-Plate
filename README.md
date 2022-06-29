# NFT ERC721 Collection

An all-in-one solution for `ERC721` collections. Build, test and deploy your smart contract, together with a totally
integrated DAPP.

### Current rinkeby deployment
https://rinkeby.etherscan.io/address/0xFCaE0e3362F8EC6C55C07592FeAf905a1Bc5dA53#code
### Address
0xFCaE0e3362F8EC6C55C07592FeAf905a1Bc5dA53

## Main features
- extremely high gas efficiency (users are going to pay lower gas fees compared to traditional collections)
- whitelist support with customizable list size (using a Merkle Tree for verification)
- automated contract verification through block explorers (e.g. Etherscan)
- simple CLI commands that guide you through all the sale steps (whitelist, pre-sale, public sale)
- built as a Hardhat project with TypeScript support for a better development experience
- includes a fully-featured minting DAPP (React + TypeScript + SCSS + Webpack)
- full support for contract interaction through block explorers (e.g. Etherscan), for all the users that do not trust custom DAPPs (including the `whitelistMint(...)` function)
- customizable minting DAPP (from basic branding to complete customization)

### Services
- Etherscan free API key _(optional: used for the automated contract verificiation, as well as retrieving the current values for gas cost estimation)_
- Infura free basic plan or higher _(optional: used by the CLI commands in order to perform operations on real blockchains, you can skip this if you deploy and manage your contract manually)_
- Coin Market Cap free API key _(optional: used for retrieving the current token price for gas cost estimation in USD)_

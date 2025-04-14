<h2 align="center" id="introduction">Gasp SDK</h2>

<p align="center">
    Gasp SDK is comprehensive toolset designed for facilitating seamless communication with the Gasp node.
</p>

![npm](https://img.shields.io/npm/v/gasp-sdk)
![Issues](https://img.shields.io/github/issues/mangata-finance/gasp-dev-kit)
![Pull Request](https://img.shields.io/github/issues-pr/mangata-finance/gasp-dev-kit)
![GitHub last commit](https://img.shields.io/github/last-commit/mangata-finance/gasp-dev-kit)

## Table of Contents

-   [Introduction](#introduction)
-   [Table of Contents](#table-of-contents)
-   [Installation & Setup](#installation--setup)
-   [Quick Start / Getting Started](#quick-start--getting-started)
-   [Usage & Examples](#usage--examples)
-   [Core SDK Components & Available Features](#core-sdk-components--available-features)

## Installation & Setup

### Supported Languages & Frameworks

The Gasp SDK is built for **TypeScript/JavaScript** and is designed to work seamlessly in both Node.js and browser environments. All examples are provided in TypeScript, but you can easily use them in JavaScript as well.

### Prerequisites

Before installing the SDK, ensure you have the following:

-   A supported version of [Node.js](https://nodejs.org/) (v20 or above) installed.
-   A package manager such as [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

### Installation

You can install the SDK via npm or yarn:

```bash
## Using npm
npm install gasp-sdk

## Using yarn
yarn add gasp-sdk
```

### Setup

After installation, import and initialize the SDK in your project:

```ts
import { Gasp } from 'gasp-sdk';

const sdk = await Gasp.create('wss://rollup-prod-rpc.gasp.xyz/', {
    debug: true,
    // Optionally, pass a custom logger instance if needed
    logger,
}).catch((e) => {
    console.error('Error creating Gasp SDK instance:', e);
});
```

### Additional Configuration

#### Signer

The SDK allows you to pass a signer instance after the initialization. This is useful if you want to avoid passing the signer for every call. The signer should implement the necessary methods for signing transactions.

To use signer provided by the SDK, you can initialize it as follows:

```ts
import { Gasp } from 'gasp-sdk';

const pk = '...';
const sdk = await Gasp.create('wss://rollup-prod-rpc.gasp.xyz/');
sdk.setSigner(sdk.signers.ethers.create(pk));
```

In case you want to use your own signer, you can implement the `Signer` interface and pass it to the SDK. Example implementation can be found [here](./src/modules/signer/EthersSigner.ts).

#### Logger

The SDK uses a logger to output debug and error messages. When you enable debug mode (by setting `debug: true`), the SDK will output detailed logs. By default, if you don't provide a custom logger, the SDK uses its built-in logger.

If you prefer to integrate with your own logging system, you can supply a custom logger by implementing the necessary logging methods (e.g., `debug`, `error`) and passing it via the `logger` property.

Example with a custom logger:

```javascript
const customLogger = {
    debug: (...args) => console.log('[Custom Debug]', ...args),
    error: (...args) => console.error('[Custom Error]', ...args),
    // Implement other logging methods as needed.
};

const config = {
    debug: true,
    logger: customLogger,
};

const sdk = await Gasp.create('...', config);
```

## Usage & Examples

Once you have successfully created an instance of the Gasp SDK, you can access its different modules to interact with the Gasp node. Below are some example use cases to help you get started.

### Accessing the Account Module

The Account module allows you to manage and retrieve account-related information.

```ts
// Retrieve account balances
import { Gasp } from 'gasp-sdk';

const sdk = await Gasp.create('wss://rollup-prod-rpc.gasp.xyz/');

const account = '0x...';
const balances = await sdk.account.getBalances({ account });

console.log('balances', balances);
```

### Working with the Pool Module

The Pool module enables operations related to liquidity pools

```ts
import { Gasp, PoolType } from 'gasp-sdk';

const sdk = await Gasp.create('wss://rollup-prod-rpc.gasp.xyz/');

sdk.setSigner(sdk.signers.ethers.create('...'));

// Retrieve pools information
const pools = await sdk.pool.getPools();

console.log('pools', pools);

// Create a new pool
const tx = sdk.pool.createPool({
    type: PoolType.Xyk,
    firstAssetId: '0',
    firstAssetAmount: '1000000000000000000',
    secondAssetId: '1',
    secondAssetAmount: '100000000000000',
    account: '0x...',
});

// Before submitting the transaction, it is possible to check the fee information
const feeInfo = await tx.paymentInfo();
console.log('feeInfo', feeInfo);

const result = await tx.execute();
console.log('result', result);
```

### Using the Rewards Module

The Rewards module allows you to manage and retrieve information about rewards.

```ts
import { Gasp, PoolType } from 'gasp-sdk';

const sdk = await Gasp.create('wss://rollup-prod-rpc.gasp.xyz/');

const signer = sdk.signers.ethers.create('...');

// Create a new pool
const result = await sdk.rewards
    .claimNativeRewardsForPool(
        {
            pool: '160',
            account: '0x...',
        },
        { signer } // You can always pass the signer to every call as a second parameter
    )
    .execute();

console.log('result', result);
```

---

### Core SDK Components & Available Features

The SDK is built around several core components that offer a comprehensive toolset for interacting with the Gasp node:

-   [**Account Module:**](./src/modules/account/Account.ts)
    Manage account details, retrieve balances, and obtain nonce values.

-   [**Pool Module:**](./src/modules/pool/Pool.ts)
    Query and manage liquidity pool information.

-   [**Asset Module:**](./src/modules/asset/Asset.ts)
    Access and manage asset-related data.

-   [**Market Module:**](./src/modules/market/Market.ts)
    Retrieve market data and execute trading operations.

-   [**Rewards Module:**](./src/modules/rewards/Rewards.ts)
    Claim rewards for your account.

-   [**Rolldown Module:**](./src/modules/rolldown/Rolldown.ts)
    Withdraw your assets from Gasp chain.

---

### Error Handling

The Gasp SDK implements robust error handling to ensure developers can effectively manage exceptions and edge cases. Key points include:

-   **Custom Error Class:**  
    The SDK utilizes custom error class (`GaspError`) to provide meaningful error messages and error codes.

-   **Error Types:**

    -   **Initialization Errors:** Thrown when the SDK fails to initialize (e.g., network issues or invalid configuration).
    -   **Validation Errors:** Raised when required parameters are missing or invalid.
    -   **Transaction Errors:** Detailed errors related to transaction submission failures.
    -   **Argument Errors:** Raised when the arguments passed to a function are invalid or not as expected.
    -   **Parsing Errors:** Raised when the SDK fails to parse a response from the Gasp node.

```typescript
try {
    const result = await sdk.account.getAssetBalance({
        account: '0x123',
        asset: '0',
    });
    console.log(result);
} catch (error) {
    if (error instanceof GaspError) {
        console.error(`SDK Error [${error.code}]: ${error.message}`);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}
```

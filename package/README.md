# token-icons (beta)

This package includes helper functions for interacting with [tokenicons.org](https://tokenicons.org) assets.

### What is TokenIcons?

Token Icons is a comprehensive, up-to-date collection of ERC20 icons across Ethereum and other EVMs. Currently, it supports assets on Ethereum, Arbitrum and Polygon.

### Installation

```bash
yarn add token-icons

```

### Usage

```Typescript
import { image } from 'token-icons'

const Example = () => {

    return (
        <img src={image('0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9')} />
    );
  }
}


```

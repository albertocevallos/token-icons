
<p align="center">
  <img align="center" height="370" src="https://user-images.githubusercontent.com/27132021/197075903-b574f122-a700-4ef8-8bfc-4f25bd0ab95f.png">
</p>

# Token Icons

Token Icons is a community-led initiative to source and maintain ERC20 icons in a transparent and highly-accessible way.
The project is structured as follows:

* `/assets`: Repository containing metadata and PNG images for ERC20 icons.
* `/frontend`: [Next.js](https://nextjs.org/) website to discover and get info about popular ERC20 icons.
* `/package`: Node package with helper functions for interacting with [assets](https://github.com/albertocevallos/token-icons/tree/main/assets).

### NPM Package

To install:
```
npm i token-icons 
```

```
import { image } from 'token-icons'

const Example = () => {

    return (
        <img src={image('0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9')} />
    );
  }
}
```
Source: https://www.npmjs.com/package/token-icons

import { getAddress} from '@ethersproject/address'
import data from './map.json';

export const image = (address: string) => {
  try {
    const addy = getAddress(address);
    const found = data.find((x: any) => x.id === addy || x.id === address.toLowerCase());
    if (!found) return;
    return `https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/${found.chain}/assets/${found.id}/logo.png`;
  } catch (e) {
    throw e;
  }
};

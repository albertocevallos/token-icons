import { ethers } from "ethers";

export class tokenIcons {
  public baseUrl: string =
    "https://github.com/albertocevallos/token-icons/blob/main/assets/data/metadata.json";

  image = async (address: string) => {
    const format = ethers.utils.getAddress(address);
  };
}

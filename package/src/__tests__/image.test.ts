import { image } from '../index';

test('Return image URL', () => {
  expect(image('0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9')).toBe(
    'https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png',
  );
});

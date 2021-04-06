let Moralis;
export function useMoralis() {
  if (Moralis) return { Moralis };
  // Moralis Initialization
  if (typeof window !== `undefined`) {
    Moralis = require('moralis');
    Moralis.initialize(process.env.GATSBY_MORALIS_APPLICATION_ID);
    Moralis.serverURL = process.env.GATSBY_MORALIS_SERVER_ID;
  }
  return { Moralis };
}

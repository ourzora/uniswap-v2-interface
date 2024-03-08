
const parsed = '1.0.0'.split(".");

export default {
    name: "ZORA Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["uniswap", "default"],
    tokens: [
        {
            "chainId": 7777777,
            "address": "0xccCCCCC697b5Bf1536966ccB51a6AcbAd5A964f2",
            "name": "USDC Bridged (ZORA)",
            "symbol": "USDzC",
            "decimals": 6,
            "logoURI": "https://static.optimism.io/data/USDC/logo.png"
        }
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
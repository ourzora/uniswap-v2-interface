import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ZORA]: '0x06280E82047e94E33E90Eb145F2aF01eAc37E062'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

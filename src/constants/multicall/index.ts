import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ZORA]: '0xcA11bde05977b3631167028862bE2a173976CA11'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

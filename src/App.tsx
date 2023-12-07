import React from 'react'
import logo from './logo.svg'
import './App.css'

import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import { hooks as metaMaskHooks, metaMask } from './connectors/metaMask'
import MetaMaskCard from './components/connectorCards/MetaMaskCard'
import { getName } from './utils'

const connectors: [MetaMask, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks]
]

function Child() {
  const { 
    connector,
    account,
    chainId,
    accounts,
    provider,
    isActive,
    ENSNames,
    hooks
   } = useWeb3React()
  console.log(`Priority Connector is: ${getName(connector)}`)
  // connector: Connector;

  // accounts: ReturnType<Web3ReactPriorityHooks['useSelectedAccounts']>;
  // isActivating: ReturnType<Web3ReactPriorityHooks['useSelectedIsActivating']>;
  // isActive: ReturnType<Web3ReactPriorityHooks['useSelectedIsActive']>;
  // provider: T | undefined;
  // ENSNames: ReturnType<Web3ReactPriorityHooks['useSelectedENSNames']>;
  // ENSName: ReturnType<Web3ReactPriorityHooks['useSelectedENSName']>;
  // hooks: ReturnType<typeof getPriorityConnector>;
  // console.log(accounts,account,chainId)
  console.log(provider,isActive,ENSNames,hooks)
  return null
}

export default function APP() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
      <MetaMaskCard />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Web3ReactProvider>
  )
}




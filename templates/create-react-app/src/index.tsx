import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { client } from './wagmi'
import { Buffer } from 'buffer'

// polyfill Buffer for client
if (!window.Buffer) {
  window.Buffer = Buffer
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
)

reportWebVitals()

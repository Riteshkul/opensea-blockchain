import {ChainId,ThirdwebProvider}  from '@thirdweb-dev/react'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
function MyApp({ Component, pageProps }) {
  return(
     <ThirdwebProvider
    desiredChainId={ChainId.Rinkeby}
       chainRpc={{
[ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/67b29b947a364b2ab8a6e9baa9612662'
       }}
    >
       <ThemeProvider>
       <Component {...pageProps} />
       </ThemeProvider>
  
  </ThirdwebProvider>
  ) 
  
}

export default MyApp

import {useAddress,useMetamask} from '@thirdweb-dev/react'
import Main from '../components/Home'
const style={
  wrapper:'flex h-screen items-center justify-center ',
  connectwalletbutton:'rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white dark:hover:bg-white'
}
export default function Home() {
    const connectwithmetamask=useMetamask()
  const userAddress=useAddress()
const Auth=()=>{
  return(
   <div className={style.wrapper}>
      <button onClick={connectwithmetamask}
        className={style.connectwalletbutton}
        >Connect MetaMask</button>
    </div>
    )
}
  return <>{userAddress?<Main/>:Auth()}</>
}

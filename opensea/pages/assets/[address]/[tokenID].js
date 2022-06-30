import {useState,useEffect}from 'react'
import {useRouter} from 'next/router'
import {useAddress,useMarketplace }from '@thirdweb-dev/react'
import {BigNumber} from 'ethers'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'
import NFTDetails from '../../../components/NFTDetails/NFTDetails'
import NFTBasicInfo from '../../../components/NFTDetails/NFTBasicInfo'

const style={
  wrapper:`h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
  nftContainer:`flex flex-col lg:flex-row lg:space-x-4 `,
  leftContainer: `flex flex-col space-y-4`,
  leftElement: `hidden lg:block`,
  rightContainer:`flex flex-1 flex-col space-y-4`,
  buyContainer:`flex-1`
}

const NFT=()=>{
  const [listing,setListing]=useState();
  const [loading,setLoading]=useState(false);
  const router=useRouter()
  const {tokenID}=router.query
  console.log(tokenID)
const marketplace=useMarketplace("0xeF2884ECdb66ad46D04c19A7007c6a32faE96fa3")
const address=useAddress()
  useEffect(()=>{
    getListings()
  },[])
  useEffect(()=>{
    if(!address)router.replace('/')
  },[address])
const getListings=async()=>{
  try{
    setLoading(true);
    const listings=await marketplace.getListing(BigNumber.from(tokenID))
    setListing(listings)
    console.log(listing)
    setLoading(false)
  }
  catch(error){
    console.log(error)
  }
}

const buyNFT=async()=>{
  try{
    await marketplace.buyoutListing(tokenID,1)
  }
  catch(error){
    console.log(error)
  }
}
  return (
    <TopNavbarLayout>
       <div className={style.wrapper}>
         {
           loading?(
             <div>Loading...</div>
           ):(
             <div className={style.nftContainer}>
              <div className={style.leftContainer}>
                <div className={style.leftElement}>
                <NFTImage image={listing?.asset?.image}/>
                </div>
                <div className={style.leftElement}>
                      <NFTDetails/>
                </div>
              </div>
                <div className={style.rightContainer}>
                  <NFTBasicInfo name={listing?.asset?.name}/>
                  <div className={style.buyContainer}>
                      <NFTSalesInfo price={listing?.buyoutCurrencyValuePerToken.displayValue} buyNFT={buyNFT}/>
                </div>
                  </div>
               
             </div>
           )
         }
       </div>
    </TopNavbarLayout>
   
  )
}
export default NFT;
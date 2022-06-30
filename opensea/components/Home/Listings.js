import {useEffect,useState} from 'react'
import Link from 'next/link'
import {useMarketplace} from '@thirdweb-dev/react'
import NFTCard from './NFTCard'
const style={
  wrapper:`mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`
}
const Listings=()=>{
  const [listings,setListings]=useState([])
  const marketplace=useMarketplace("0xeF2884ECdb66ad46D04c19A7007c6a32faE96fa3")

  useEffect(()=>{
    getListings()
  },[])
 const getListings=async()=>{
   try {
     const list=await marketplace.getActiveListings()
    setListings(list)
   } catch (error) {
     console.log(error);
   }
 }
  console.log(listings)
  return (
    <div className={style.wrapper}>
    
      {listings.length>0?(
         <>
      {listings?.map((listings,index)=>(
     <Link
       href={`../assets/${listings.assetContractAddress}/${listings.id}`}
       key={index}
       >
     <a>
       <NFTCard listings={listings}/>
     </a>
     </Link>
     
        
     ))
     }
            </>
    
      ):(
      <div>
        Loading..
      </div>)}
          
    </div>
  )
}
export default Listings
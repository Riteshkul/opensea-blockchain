import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style={
wrapper:` flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imageContainer:`h-3/4 overflow-hidden`,
  nftImage:`rounded-t-lg object-cover w-full`,
  nftLowerContainer:`flex h-1/4 flex-col justify-between   p-4`,
  nftInfoContainer:`flex justify-between`,
  collectionTitle:`text-sm text-gray-500 dark:text-gray-400`,
  nftTitle:`text-sm font-bold`,
  priceContainer:`flex flex-col items-end justify-center space-y-1`,
  priceTitle:`text-xs font-light`,
  wethImageContainer:`flex items-center justify-end space-x-2`,
  likesContainer:`flex items-center justify-end space-x-2`,
  heartIcon:`h-3 w-3 text-gray-500 dark:text-gray-400`,
  likesCounter:`text-xs text-gray-500 dark:text-gray-400`
  
}
const NFTCard=({listings})=>{

  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image
          className={style.nftImage}
          src={listings.asset.image}
          height="340"
          width="340"
          alt="nft"
        />
      </div>

      
      <div className={style.nftLowerContainer}>
      <div className={style.nftInfoContainer}>
        <div>
          {listings.asset.collection && (
            <div className={style.collectionTitle}>
              {listings.asset?.collection?.name}
            </div>
          )}
          <div className={style.nftTitle}>
            {listings.asset.name}
          </div>
          </div>
        
          <div className={style.priceContainer}>
          <div className={style.priceTitle}>
            Buy At
          </div>
            <div className={style.wethImageContainer}>
              <Image
                width={16}
                height={16}
                src='/weth-logo.svg'
                alt='weth'
                />
              <div className={style.pricValue}>
                {listings.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>

        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon}/>
          <div className={style.likeCounter}>

            {listings.asset?.stats?.favorites??0}
          </div>
        </div>
      </div>
      </div>
    
  )
}
export default NFTCard
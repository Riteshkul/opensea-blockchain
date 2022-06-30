import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style={
  wrapper:`rounded -lg border dark:border-transparant dark:bg-[#313339]`,
  nftHeader:`flex items-center justify-between p-4`,
  likesContainer:`flex  items-center justify-end space-x-2`,
  heartIcon:`h-5 w-5 text-gray-500 dark:text-gray-400`,
  likesCount:`text-sm font-semibold text-gray-500 dark:text-gray-400`,
  nftImage:`rounded-b-lg object-cover`
}
const NFTImage=({image})=>{
  console.log(image)
  return (
    <div className={style.wrapper}>
    <div className={style.ngtHeader}>
    <Image height={20} width={20} src='/eth-logo.svg' alt="eth"/>
      <div className={style.likesContainer}>
      <AiOutlineHeart className={style.heartIcon}/>
        <div className={style.likesCount}>200</div>
      </div>
    </div>
      <div >
        {
          image &&<Image
            src={image}
                    height={338}
                    width={338}
                    alt="nft"
                    />
        }
      </div>
    </div>
  )
}
export default NFTImage
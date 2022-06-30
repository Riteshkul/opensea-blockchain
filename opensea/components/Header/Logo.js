import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: `h-14 w-24  pt-5  dark:text-white-400 font-bold text-dark-400 lg:block`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.svg' width={40} height={40} />
      <div className={style.svgText}>Opensea</div>
    </div>
  )
}

export default Logo

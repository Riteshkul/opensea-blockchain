import Header from '../components/Header/Header'
const TopNavbarLayout=({children})=>{
  return (
    <div>
      <Header/>
      <main>{children}</main>
    </div>
  )
}
export default TopNavbarLayout
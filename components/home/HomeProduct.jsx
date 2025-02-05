import allProduct from '@/utils/allProduct'
import DynamicText from '../header/DynamicText'

const HomeProduct = async () => {

  const products = await allProduct()
  console.log(products);

  return (
    <div className='w-11/12 mx-auto'>
      <DynamicText linkText={"New Arrivals"} subText={"New Arrivals"}></DynamicText>

    </div>
  )
}

export default HomeProduct
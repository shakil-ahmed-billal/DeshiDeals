import DynamicText from '../header/DynamicText';
import TopSelling from '../topSelling/TopSelling';

const HomeProduct = async () => {



  return (
    <div className='w-10/12 mx-auto'>
      <DynamicText linkText={"New Arrivals"} subText={"New Arrivals"}></DynamicText>
      <TopSelling />
    </div>
  )
}

export default HomeProduct
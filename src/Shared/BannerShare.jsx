import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const BannerShare = () => {
    return (
        <div>
      <div  className="mb-20 mt-10">
        
          <Swiper 
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
           >
          {/* {banner.length > 0 && banner?.map((banners) => ( */}
          
             <SwiperSlide className='w-full h-full md:w-[100%] md:h-[620px]' >
              <div className='md:h-[620px] h-[400px]' >


<div className='text center flex flex-col justify-center md:pt-9 items-center text-center h-full pt-16  '>
<h2 className='lg:text-8xl  md:text-4xl text-3xl font-bold'>a</h2>
<p className='md:text-4xl  texl-lg font semibold text-black'>f</p>
<p className='md:text-3xl texl-lg font semibold text-black'>f</p>
<button className='btn-grad btn mx-auto'>Shop Now</button>
</div>


              </div>
             </SwiperSlide>
             
             
          
    
        

 </Swiper>
          </div>
        </div>
    );
};

export default BannerShare;



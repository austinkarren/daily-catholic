import { useState, useEffect, useRef, act } from 'react'
import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import fetchTodaysMysteries from './functions/fetchTodaysMysteries'
import MysteryCard from './components/MysteryCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const App = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    fetchTodaysMysteries(setActiveMysteries);
    fetchTodaysMysteries(setInitalMysteries);
  }, []);


  const [activeMysteries, setActiveMysteries] = useState(null);
  const [initalMysteries, setInitalMysteries] = useState(null);
  

  const handleSlideChange = (swiper) => {
    setActiveMysteries(mysteryData[swiper.activeIndex].category)
  }

  const resetSwiper = () => {
    fetchTodaysMysteries(setActiveMysteries);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(0);
    }
  }


  return (
    <div className='w-[60%] py-9 mx-auto'>
      <div className='flex flex-col items-center w-full pb-10'>
        <h1 className='text-3xl capitalize underline underline-offset-4 text-white pb-5'>Today's mysteries are the <span className="text-red-600">{initalMysteries}</span> mysteries.</h1>
        <h2 className='text-xl capitalize underline underline-offset-4 text-white pb-5'>You are viewing the <span className="text-red-600">{activeMysteries}</span> mysteries.</h2>
        <button
          onClick={() => resetSwiper()}
          className='bg-slate-500 py-2 px-4 rounded-md text-white'
        >
          Return to Today's Mystery
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
        className='pb-10'
      >
        {
          mysteryData.map((item, index) => (
            <SwiperSlide key={index} className='max-h-[500px]'>
              <CategoryCard
                title={item.category}
                image={item.image}
                active={activeMysteries === item.category ? true : false}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* TODO:  */}
      <div className='flex gap-4 pt-2'>
        {
          mysteryData
            .filter(item => item.category === activeMysteries)
            .flatMap(item =>
              item.mysteries.map((mystery, index) => (
                <MysteryCard
                  key={index}
                  title={mystery.name}
                  image={item.image}
                />
              ))
            )
        }

      </div>

    </div>
  )
}

export default App

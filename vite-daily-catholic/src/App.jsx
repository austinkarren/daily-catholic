import { useState, useEffect, useRef } from 'react'
import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import fetchTodaysMysteries from './functions/fetchTodaysMysteries'
import MysteryCard from './components/MysteryCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const App = () => {

  const swiperRef = useRef(null);

  useEffect(() => {
    fetchTodaysMysteries(setActiveMysteries);
  }, []);


  const [activeMysteries, setActiveMysteries] = useState(null);

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
      <div className='flex justify-between w-full pb-10'>
        <h1 className='text-2xl capitalize underline underline-offset-4 text-white'>Today's mysteries are the <span className="text-red-600">{activeMysteries}</span> mysteries.</h1>
        <button
          onClick={() => resetSwiper()}
          className='bg-slate-500 py-2 px-4 rounded-md text-white'
        >
          Return to Today's Mystery
        </button>
      </div>

      <Swiper        
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        ref={swiperRef}
        className='w-1/3'
      >
        {
          mysteryData.map((item, index) => (
            <SwiperSlide key={index}>
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
      <div className='flex gap-4 pt-2 h-[250px]'>
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

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
import AnnouncementBar from './components/AnnouncementBar';

const App = () => {

  const swiperRef = useRef(null);

  const mysteryIndexMap = {
    joyful: 0,
    luminous: 1,
    sorrowful: 2,
    glorious: 3
  }

  useEffect(() => {
    fetchTodaysMysteries((mysteryCategory) => {
      setInitialMysteries(mysteryCategory);
      setActiveMysteries(mysteryCategory);
      setActiveMysteryIndex(mysteryIndexMap[mysteryCategory]);
    });
  }, []);

  const [activeMysteries, setActiveMysteries] = useState(null);
  const [initialMysteries, setInitialMysteries] = useState(null);
  const [activeMysteryIndex, setActiveMysteryIndex] = useState(null);

  const handleSlideChange = (swiper) => {
    setActiveMysteries(mysteryData[swiper.activeIndex].category)
  }

  const resetSwiper = () => {
    fetchTodaysMysteries(setActiveMysteries);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeMysteryIndex);
    }
  }


  return (

    <div className='mx-auto'>
      <AnnouncementBar
        mysteries={initialMysteries}
        resetSwiper={resetSwiper}
        activeMysteries={activeMysteries} 
      />

      {activeMysteryIndex !== null && (
        <Swiper
          style={{ '--swiper-navigation-size': '25px' }}
          modules={[Navigation]}
          navigation={true}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          ref={swiperRef}
          initialSlide={activeMysteryIndex}
          className='pb-10'
        >
          {
            mysteryData.map((item, index) => (
              <SwiperSlide key={index} className='max-h-[500px]'>
                <CategoryCard
                  title={item.category}
                  image={item.image}
                  //false
                  active={activeMysteries === item.category ? true : false}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      )}

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
                  image={mystery.image}
                />
              ))
            )
        }

      </div>

    </div>
  )
}

export default App

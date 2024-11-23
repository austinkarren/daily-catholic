import { Swiper } from 'swiper/react'

export const useSwiper = () => {
  const swiperRef = React.useRef(null)
  
  React.useEffect(() => {
    return () => {
      if (swiperRef.current) {
        swiperRef.current.on('slideChange', () => {
          const activeSlide = swiperRef.current.slides[swiperRef.current.activeIndex]
          const activeCategory = activeSlide.querySelector('[title]').getAttribute('title')
          setActiveMysteries(activeCategory)
        })
      }
    }
  }, [])

  return swiperRef
}
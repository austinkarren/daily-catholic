import { useState, useEffect } from 'react'
import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import fetchTodaysMysteries from './functions/fetchTodaysMysteries'
import MysteryCard from './components/MysteryCard'

const App = () => {

  useEffect(() => {
    const todaysMysteries = fetchTodaysMysteries(setActiveMysteries);
  }, []);

  const [activeMysteries, setActiveMysteries] = useState(null);

  return (
    <div className='w-[60%] py-9 mx-auto '>
      <button
        onClick={() => fetchTodaysMysteries(setActiveMysteries)}
        className='bg-slate-500 py-2 px-4 rounded-md text-white'
      >
        Return to Today's Mystery
      </button>

      <div className='flex gap-4 pt-9 h-[400px]'>
        {
          mysteryData.map((item, index) => (
            <CategoryCard
              key={index}
              title={item.category}
              image={item.image}
              onClick={() => setActiveMysteries(item.category)}
            />
          ))
        }
      </div>

      {/* TODO:  */}
      <div className='flex gap-4 pt-9 h-[250px]'>
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

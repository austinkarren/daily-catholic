import { useState, useEffect } from 'react'
import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import fetchTodaysMysteries from './functions/fetchTodaysMysteries'
// import MysteryCard from './components/MysteryCard'

const App = () => {

  useEffect(() => {
    const todaysMysteries = fetchTodaysMysteries(setActiveMysteries);  
    console.log("TM", todaysMysteries);    
  }, []);

  const [activeMysteries, setActiveMysteries] = useState(null);


  return (
    <>
      <h1 className='text-blue-500'>{`${activeMysteries}`}</h1>
      <div className='flex p-9 gap-4'>
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
      {/* <div className='flex p-9 gap-4'>
        {
          mysteryData.map(() => (
            item.category === activeMysteries ?
            item.mysteries.map((mystery, index) => (
              <MysteryCard
                key={index}
                title={mystery.name}
                image={item.image}
              />
            ))
            :
            ""
          ))
        }
      </div> */}

    </>
  )
}

export default App

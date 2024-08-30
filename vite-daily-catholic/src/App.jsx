import { useState } from 'react'
import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import MysteryCard from './components/MysteryCard'

const App = () => {

  const todaysMysteries = "sorrowful"
  const [activeMysteries, setActiveMysteries] = useState(todaysMysteries)


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
      <div className='flex p-9 gap-4'>
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
      </div>

    </>
  )
}

export default App

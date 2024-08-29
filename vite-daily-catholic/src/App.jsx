import './App.css'
import mysteryData from './data/mysteryData'
import CategoryCard from './components/CategoryCard'
import MysteryCard from './components/MysteryCard'

const App = () => {

  return (
    <>
      <h1 className='text-blue-500'>Daily Catholic</h1>
      <div className='flex'>
        {
          mysteryData.map((item, index) => (
            <CategoryCard
              key={index}
              title={item.category}
              image={item.image}
            />

          ))
        }

      </div>
      {
        mysteryData.map(item => (
          item.mysteries.map((mystery, index) => (
            <p key={index}>{mystery.name}</p>
          ))
        ))
      }
    </>
  )
}

export default App

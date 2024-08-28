import './App.css'
import mysteryData from './data/mysteryData'

const App = () => {

  return (
    <>
      <h1 className='text-blue-500'>Daily Catholic</h1>
      {
        mysteryData.map((item, index) => (
          <p key={index}>{item.category}</p>
        ))
      }
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

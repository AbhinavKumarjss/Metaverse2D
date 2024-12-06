import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import store from './store/store'
import Screen from './components/screen/Screen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Screen />
      </Provider>
    </>
  )
}

export default App

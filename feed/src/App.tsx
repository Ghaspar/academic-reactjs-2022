import { useState } from 'react'
import { Post } from '../src/Post'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className='text-center'>hello word</h1>
      <Post author="Lucas" coments="lorem testestsedf w sdf"/>
    </>
  )
}

export default App

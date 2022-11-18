import { useState } from 'react'
import { Post } from '../src/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello word</h1>
      <Post author="Lucas" coments="lorem testestsedf w sdf"/>
    </>
  )
}

export default App

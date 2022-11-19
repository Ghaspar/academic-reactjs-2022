import { useState } from 'react'
import { Post } from '../src/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <Post author="Lucas" coments="lorem testestsedf w sdf"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

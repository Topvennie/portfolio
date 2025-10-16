import { About } from './components/About'
import { Landing } from './components/Landing'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
      <Landing />
      <div className="container mx-auto">
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App

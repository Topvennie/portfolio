import { About } from './components/About'
import { Landing } from './components/Landing'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className="w-screen bg-[#191919]">
      <Landing />
      <div className="container mx-auto px-8">
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App

// TODO: Add cv
// TODO: Fix contact
// TODO: Add analytics
// TODO: Add router for 404
// TODO: Check light mode

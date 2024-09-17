import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import AvatarApp from "./sections/AvatarApp"

const App = () => {
  return (
    <div className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <AvatarApp />
    </div>
  )
}

export default App
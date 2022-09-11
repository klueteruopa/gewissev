import type { NextPage } from 'next'
import { Nav } from '../components/Nav'
import { Welcome } from '../components/Welcome'
import { Leitsatz } from '../components/Leitsatz'
import { Video } from '../components/Video'
import { Opener } from '../components/Opener'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
    <Nav/>
    <Welcome/>
    <Opener/>
    <Video/>
    <Leitsatz/>
    <Footer/>
    </>
  )
}

export default Home

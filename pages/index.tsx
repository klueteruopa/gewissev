import type { NextPage } from 'next'
import { Welcome } from '../components/Welcome'
import { Leitsatz } from '../components/Leitsatz'
import { Video } from '../components/Video'
import { Opener } from '../components/Opener'

const Home: NextPage = () => {
  return (
    <>
    <Welcome/>
    <Opener/>
    <Video/>
    <Leitsatz/>
    </>
  )
}

export default Home

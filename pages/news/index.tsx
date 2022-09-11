import type { NextPage } from 'next'
import { Blog } from '../../components/Blog';
import { BlogItem } from '../../components/BlogItem';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Nav';

const News: NextPage = () => {

  return (
    <>
      <Nav/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default News

import { useState, useEffect } from 'react'
import 'twin.macro'
import { Layout } from '../layout'
import { LoadingScreen } from '../components'
import HomePage from './home'

const Home = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => { setTimeout(() => setLoading(false), 2000) })

  return (
    <Layout>
      {loading && <LoadingScreen />}
      {!loading && <HomePage />}
    </Layout>
  )
}
export default Home

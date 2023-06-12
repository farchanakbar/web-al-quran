import React, { useState } from 'react'
import Header from '../components/Header'
import Surah from '../components/Surah'
import Layout from '../ui/Layout'

function HomePage() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Header />
      <Layout>
        <Surah />
      </Layout>
    </div>
  )
}

export default HomePage
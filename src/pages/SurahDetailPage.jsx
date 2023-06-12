import React from 'react'
import Header from '../components/Header'
import Layout from '../ui/Layout'
import SurahDetail from '../components/SurahDetail'

function SurahDetailPage() {
  return (
    <div>
      <Header />
      <Layout>
        <SurahDetail />
      </Layout>
    </div>
  )
}

export default SurahDetailPage
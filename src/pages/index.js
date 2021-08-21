import React from 'react'
import Layout from '../components/layout'
import Header from '../components/index/Header'
import Overviews from '../components/index/Overviews'
import Opportunities from '../components/index/Opportunities'
import Technologies from '../components/index/Technologies'
import Teams from '../components/index/Teams'
import Faqs from '../components/index/Faqs'
import Location from '../components/index/Location'
import Workshops from '../components/index/Workshops';
import './styles.scss'

const Index = () => (
  <Layout>
    <Header />
    <Overviews />
    <Opportunities />
    <Technologies />
    <Workshops />
    <Teams />
    <Faqs />
    <Location />
  </Layout>
)

export default Index

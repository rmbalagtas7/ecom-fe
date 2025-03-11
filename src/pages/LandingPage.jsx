import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Products from '../components/Products.jsx'
import ProductsFeatures from '../components/ProductsFeatures.jsx'

const LandingPage = () => {
  return (
    <>
        <HeroSection />
        <Products />
        <ProductsFeatures />
    </>
  )
}

export default LandingPage
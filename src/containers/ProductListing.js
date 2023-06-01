import React from 'react'
import { useSelector } from 'react-redux'

const ProductListing = () => {
  const products = useSelector((state) => state);
  return (
    <div>ProductListing</div>
  )
}

export default ProductListing
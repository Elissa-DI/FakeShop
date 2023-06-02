import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);
  return (
    <div className='ui grid container'>
       <ProductComponent />
    </div>
  )
}

export default ProductListing
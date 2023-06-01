import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state);
  return (
    <div>
      <h1>ProductComponent</h1>
    </div>
  )
}

export default ProductComponent
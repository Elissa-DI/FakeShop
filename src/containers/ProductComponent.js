import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state);
  return (
    <div className='four column wide'>
      <div className="iu link cards">
        <div className="card">
          <div className="image">

          </div>
          <div className="content">
            <div className="header">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
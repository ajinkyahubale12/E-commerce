import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdispaly-img">
            <img className='productdispaly-main-img' src={product.image} alt="" />
          </div>
      </div>
      <div className="productdispaly-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
            A lightweeight, usually knitted, pullover shirts,close-fitting and short sleeves, worn as an understand outer garment
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdispaly-right-sizs">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
          <p className='productdisplay-right-category'>Category :<span></span>Women,T-Shirts, Crop Top </p>
          <p className='productdisplay-right-category'>Tags :<span></span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
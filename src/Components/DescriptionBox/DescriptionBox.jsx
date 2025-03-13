import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis similique et fuga modi cumque mollitia aspernatur asperiores ut error dignissimos officia facere eligendi, voluptas a? Saepe ab laborum magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quisquam quae quo officiis? Inventore sunt minima expedita, minus id molestiae suscipit voluptate dolorem deserunt quae est. Alias consectetur doloremque officia.</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis similique et fuga modi cumque mollitia aspernatur asperiores ut error dignissimos officia facere eligendi, voluptas a? Saepe ab laborum magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Nulla quisquam quae quo officiis? Inventore sunt minima expedita, minus id molestiae suscipit voluptate dolorem deserunt quae est. Alias consectetur doloremque officia.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
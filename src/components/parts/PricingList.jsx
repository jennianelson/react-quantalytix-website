import React from 'react';
import {Image} from '../primitives';

const PricingList = ({list}) => {
  return (
    <ul className="pricing-fetures">
      {list.map((item, index) => {
        return (
          <li key={index}>
            <span className="checked-icon"><Image imageName="checked-price.svg"/></span>
            <span>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default PricingList;
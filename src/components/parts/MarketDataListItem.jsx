import React from 'react';
import {Image} from '../primitives';

const MarketDataListItem = ({image, heading, description}) => {
  return (
    <li>
      <Image imageName={image}/>
      <div>
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default MarketDataListItem;
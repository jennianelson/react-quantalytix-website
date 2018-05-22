import React from 'react';
import FeaturesListItem from './FeaturesListItem';

const FeaturesList = ({className, featuresArray}) => {
  return (
    <ul className={className}>
      {featuresArray.map((featureObj, i) => {
        return (
        <FeaturesListItem
          key={i}
          image={featureObj.image}
          heading={featureObj.heading}
          description={featureObj.description}
        /> )
      })}
    </ul>
  )
}

export default FeaturesList;
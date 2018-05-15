import React from 'react';
import FeaturesListItem from './FeaturesListItem';

const FeaturesList = ({className, featuresArray}) => {
  return (
    <ul className={className}>
      {featuresArray.map(featureObj => {
        return (
        <FeaturesListItem
          image={featureObj.image}
          heading={featureObj.heading}
          description={featureObj.description}
        /> )
      })}
    </ul>
  )
}

export default FeaturesList;
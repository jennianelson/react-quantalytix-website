import React from 'react';
import {Image, Button} from '../../primitives';
import PricingList from './PricingList';
import {freeFeatures, oneMonthFeatures, annualFeatures} from './datasets'

oneMonthFeatures.splice(0, 1, "2013 to Current Data")

const chooseList = (title) => {
  if (title === "Free") {
    return freeFeatures;
  } else if (title === "1-Month Subscription") {
    return oneMonthFeatures;
  } else {
    return annualFeatures;
  }
}

const PricingCard = ({title, imageName, description, price, className}) => {
  return (
    <div className={className}>
      <span className="pricing-card-icon"><Image imageName={imageName}/></span>
      {title === "Annual Subscription" ? <span className="btn btn-rounded btn-neutral best-value-label">BEST VALUE</span> : <span></span>}
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      <Button kind="neutral" margins="md mt-3">{title === "Free" ? "Download" : "Contact Us Now"}</Button>
      <PricingList list={chooseList(title)} />
    </div>
  )
}

PricingCard.defaultProps = {
  className: "pricing-card"
}

export default PricingCard;
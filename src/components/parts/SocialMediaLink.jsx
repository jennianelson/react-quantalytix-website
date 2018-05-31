import React from 'react';

const SocialMediaLink = ({company}) => {
  let url
  let iconName
  switch(company) {
    case "twitter":
      url = "https://twitter.com/quantalytix"
      iconName="icon-tw"
      break;
    case "instagram":
      url = "https://www.instagram.com/quantalytix/"
      iconName="icon-ig"
      break;
    case "facebook":
      url = ""
      iconName="icon-fb"
      break;
    default:
      url = "https://www.linkedin.com/company/quantalytix/"
      iconName="icon-ln";
  }

  return (
    <li className="socials-item"><a href={url} target="blank"><i className={iconName}></i></a></li>
  )
}

export default SocialMediaLink;
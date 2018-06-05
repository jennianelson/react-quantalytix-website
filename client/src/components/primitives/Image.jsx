import React from 'react';

function importAll(r) {
  debugger
  let images = {};
  r.keys().forEach((item, index) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

const Image = ({className, imageName}) => {
  return (
    <img src={images[imageName]} alt="" className={className}/>
  )
}

Image.defaultProps = {
  className: "img-fluid"
}

export default Image;
import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

const Image = props => {
  return (
    <div className={props.className}>
      <img src={images[props.imageName]} alt="" className="img-fluid"/>
    </div>
  )
}

export default Image;
import React from 'react';

const ImageWrapper = props => {
  debugger
  const path = '../../assets/images/' + props.imagePath
  return (
    <div className={props.className}>
      <img src={require(path)} alt="" class="img-fluid"/>
      {/* <img src={require("../../assets/images/svg/logo icons/about-logo.svg")} alt="" class="img-fluid"/> */}
    </div>
  )
}

export default ImageWrapper;
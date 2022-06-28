import React from "react";

function DarkThemeSlider(props) {


  return (
    <>
    <div className="darkSlider">
      <i class="far fa-moon"></i>
      <span className="dark-theme-text"> Dark Theme </span>   
    </div>

      <label className="dark-slider-toggle-wrapper">

       <input type="checkbox" className="dark-checkbox" />
        <span className="dark-slider"></span>
      </label>
    </>
  )
}
  
  export default DarkThemeSlider
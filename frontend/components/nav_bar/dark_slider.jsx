import React from "react";



function DarkThemeSlider(props) {

  
  return (
    <>
    <div className="darkSlider">
      <i class="far fa-moon"></i>
      <span className="dark-theme-text nav"> Dark Theme </span>   
    </div>

      <label className="dark-slider-toggle-wrapper">
        <label className="dark-slider-toggle-container">
          <input type="checkbox" className="dark-checkbox" onClick={ () => props.toggleDark()}/>
          <span className="dark-slider round"></span>
        </label>
      </label>
    </>
  )
}
  
  export default DarkThemeSlider
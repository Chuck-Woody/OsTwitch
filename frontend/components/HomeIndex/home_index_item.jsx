import React from "react";
import {Link} from 'react-router-dom'

class HomeIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  
  
  
  render() {
    let {darkTheme} = this.props
    return (
        
      <div className="home-index-item-container">

        
         <div className="home-index-stream-hidden">
            <div className="home-index-stream-preview">
            </div>
        </div>
        <div className="home-index-under-item-container">
          <div className="home-index-logo">
            <img className="home-index-channel-logo" src={`https://robohash.org/${this.props.channel.channel_name}.png`}></img>
            
          </div>
          <div className="home-index-channel-info-container">
            <div className={`home-index-stream-title ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
                Stream Title
            </div>
            <div className={`home-index-channel-name ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
                {this.props.channel.channel_name}
            </div>
          </div>

        </div>
        </div>
        
      )
    }
}

export default HomeIndexItem
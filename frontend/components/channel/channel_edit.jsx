import React from 'react'
import UnderStreamComponent from './under_stream'

class ChannelEdit extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchChannels()
  }
  render() {
    console.log(this.props)
    let {darkTheme} = this.props;
    let number = this.props.currentChannel
    return (

        <div className="channel-about-composition">
          <div className={` ${darkTheme ? 'dark-theme' : 'light-theme'} channel-about-background`}>
            <div className="about-streamer">
              About {Object.values(this.props.allChannels)}
            </div>
            <div className="streamer-follows-number">
              {Object.values(this.props.allChannels)} followers
            </div>
            <div className="channel-description">
            </div>
          </div>
      </div>
    )
  }

  
}




export default ChannelEdit;
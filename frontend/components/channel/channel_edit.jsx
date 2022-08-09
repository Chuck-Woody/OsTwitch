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
    console.log(Object.values(this.props.allChannels))
    return (

        <div className="channel-about-composition">
          <div className={` ${darkTheme ? 'dark-theme' : 'light-theme'} channel-about-background`}>
            <button className="preview-toggle" >
              Show Preview
            </button>
            <div className="about-streamer">
              { `About ${this.props.allChannels[this.props.currentChannel].channel_name}` }
            </div>
            <div className="streamer-follows-number">
              followers
            </div>
            <div className="channel-description">
            { `${this.props.allChannels[this.props.currentChannel].channel_description}` }
            </div>
          </div>
      </div>
    )
  }

  
}




export default ChannelEdit;
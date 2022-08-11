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
      <div className={ `${darkTheme ? 'dark-theme': 'light-theme'} channel-edit-background`}>
        <div className='preview-toggle-button-container'>
          <button className={`${darkTheme ? 'dark-theme': 'light-theme'} preview-toggle`} >
            Show Preview
          </button>
        </div>
        <div className="understream-about-preview">
          <div className={` ${darkTheme ? 'dark-theme' : 'light-theme'} channel-about-background`}>
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
      </div>
    )
  }

  
}




export default ChannelEdit;
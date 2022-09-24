import React from 'react'
import UnderStreamComponent from './under_stream'

class ChannelEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayPreview: true
    }
  }

  displayPreview() {
    this.setState({displayPreview: !this.state.displayPreview},() => (this.state.displayPreview))
  }

  componentDidMount(){
    this.props.fetchChannels()
  }
  render() {
    console.log(this.props)
    let {darkTheme} = this.props;
    let preview
    
    if (this.state.displayPreview) {
      console.log(`If this value is true then the preview should show: ${this.state.displayPreview}`);
      preview = (<div className="understream-about-preview">
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
        </div>)
    } 
    return (
      <div className={ `${darkTheme ? 'dark-theme': 'light-theme'} channel-edit-background`}>
        <div className='preview-toggle-button-container'>
          <button onClick={()=>this.displayPreview()} className={`${darkTheme ? 'dark-theme': 'light-theme'} preview-toggle`} >
            Show Preview
          </button>
        </div>
        {preview}

        <div className="profile-settings-header-container">
          <h3 className="profile-settings-header">Profile Settings</h3>
          <div className="profile-settings-underheader">Change identifying details for your account</div>
        </div>

        <div className="profile-form-container">
          <div className="form-container">
            <form action="">
              <div className="channel-edit-username-container">
                Username
                <input className='channel-edit-username' type="text" placeholder='Change your Username' /> 
                <div className="username-update-instructions">
                  You may update your username 
                </div>
              </div>
              <div className="channel-edit-channel-description-container">
                Channel Description
                <input className='channel-edit-channel-description' type="text" placeholder='Change your Channel Description' />
                <div className="channel-description-update-instructions">
                  You may update your Channel Description
                </div>
              </div>
              <div className="channel-edit-stream-title-container">
                Stream Title
                <input className='channel-edit-stream-title' type="text" placeholder='Change your Stream Title' />
                <div className="stream-title-update-instructions">
                  You may update your Stream Title
                </div>
              </div>
              <div className="channel-edit-save-changes-container">
                <input className='channel-edit-username' type="submit" value='Save Changes' />  
              </div>
            </form>
          </div>
        </div> 


      </div>
    )
  }

  
}




export default ChannelEdit;
import React from "react";
import UnderStream from "./under_stream";
import StreamChat from './stream_chat'

class ChannelShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchChannels()
    // console.log("ComponentShow has", this.props.allChannels)
  }

  render() {
    let {darkTheme} = this.props
    console.log("Props in ChannelShow", this.props)
    let understream = null
    let chat = null;
    if (this.props.currentUser) {
      if (Object.keys(this.props.allChannels).includes(this.props.currentChannel)) {
        understream = <UnderStream darkTheme={this.props.darkTheme} follow={this.props.follow} followedChannels={this.props.followedChannels} unFollow={this.props.unFollow} addFollow={this.props.addFollow} currentChannel= {this.props.currentChannel} channels={this.props.allChannels} current_user={this.props.currentUser} />
      }} else {
        understream = <UnderStream darkTheme={this.props.darkTheme} openModal={this.props.openModal} current_user={this.props.currentUser} currentChannel= {this.props.currentChannel} channels={this.props.allChannels}/>
      }
    
      if (this.props.currentUser) {
        chat = <StreamChat darkTheme={this.props.darkTheme} username={this.props.username} subNum={this.props.subNum} location={this.props.location} messages={this.props.messages} createMessage={this.props.createMessage} currentUser={this.props.currentUser} currentChannel={this.props.currentChannel} cable={this.props.cable} receiveMessage={this.props.receiveMessage}/>
      } else {
        chat = <StreamChat darkTheme={this.props.darkTheme} props={this.props} openModal={this.props.openModal} subNum={this.props.subNum} location={this.props.location} messages={this.props.messages} createMessage={this.props.createMessage} currentUser={this.props.currentUser} currentChannel={this.props.currentChannel} cable={this.props.cable} />
      }

    return (
      <div className="mid-right-container">
        <div className={` ${darkTheme ? 'dark-theme' : 'light-theme'} mid-container`}>
          <iframe className='stream-container' 
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          {understream}
          
        </div>
        <div className={`${darkTheme ? 'dark-theme': 'light-theme'} right-container`}>
          {chat}
        </div>
      </div>
    )
  }
}

export default ChannelShow;
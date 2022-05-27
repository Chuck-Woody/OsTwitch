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
    
    // console.log("Props in ChannelShow", this.props)
    let understream = null
    let chat = null;
    if (this.props.currentUser) {
      if (Object.keys(this.props.allChannels).includes(this.props.currentChannel)) {
        understream = <UnderStream follow={this.props.follow} followedChannels={this.props.followedChannels} unFollow={this.props.unFollow} addFollow={this.props.addFollow} currentChannel= {this.props.currentChannel} channels={this.props.allChannels} current_user={this.props.currentUser} />
      }} else {
        understream = <UnderStream openModal={this.props.openModal} current_user={this.props.currentUser} currentChannel= {this.props.currentChannel} channels={this.props.allChannels}/>
      }
    
      if (this.props.currentUser) {
        chat = <StreamChat username={this.props.username} subNum={this.props.subNum} location={this.props.location} messages={this.props.messages} createMessage={this.props.createMessage} currentUser={this.props.currentUser} currentChannel={this.props.currentChannel} cable={this.props.cable} receiveMessage={this.props.receiveMessage}/>
      } else {
        chat = <StreamChat props={this.props} openModal={this.props.openModal} subNum={this.props.subNum} location={this.props.location} messages={this.props.messages} createMessage={this.props.createMessage} currentUser={this.props.currentUser} currentChannel={this.props.currentChannel} cable={this.prop} />
      }

    return (
      <div className="mid-right-container">
        <div className="mid-container">
          <iframe className='stream-container' 
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          {understream}
          
        </div>
        <div className="right-container">
          {chat}
        </div>
      </div>
    )
  }
}

export default ChannelShow;
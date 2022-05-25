import React from "react";
import UnderStream from "./under_stream";


class ChannelShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchChannels()
    console.log("ComponentShow has", this.props.allChannels)
  }

  render() {
    
    console.log("Props in ChannelShow", this.props)
    let understream = null
    if (this.props.currentUser) {
      if (Object.keys(this.props.allChannels).includes(this.props.currentChannel)) {
        understream = <UnderStream follow={this.props.follow} followedChannels={this.props.followedChannels} unFollow={this.props.unFollow} addFollow={this.props.addFollow} currentChannel= {this.props.currentChannel} channels={this.props.allChannels} current_user={this.props.currentUser} />
      }} else {
        understream = <UnderStream openModal={this.props.openModal} current_user={this.props.currentUser} currentChannel= {this.props.currentChannel} channels={this.props.allChannels}/>
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
          <div className="chat-container">
            <div className="chat-header-container">
              Stream Chat
            </div>
            <div className="chat-body-container"></div>
            <div className="chat-submit-container">
              <input className='chat-message-input' type="text" value="Send a message"/>
              <button className='chat-submit-btn'>Chat</button>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}

export default ChannelShow;
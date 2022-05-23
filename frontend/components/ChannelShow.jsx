import React from "react";



class ChannelShow extends React.Component{
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div className="mid-right-container">
        <div className="mid-container">
          <iframe className='stream-container' 
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          <div className="understream-container">
            <div className="understream-channel-logo-container">
              <img className="understream-channel-logo" src="https://robohash.org/placeholder2.png"></img>
            </div>
            <div className="understream-channel-info-container">
              <div className='understream-channel-name'>Channel Name Placeholder</div>
              <button className='follow-btn'>
              <i class="far fa-heart"></i>
              Follow
              </button>
              {/* <i class="fas fa-heart"></i> if the channel is followed use this heart instead*/}
            </div>
          </div>
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
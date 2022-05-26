import React from "react";


class StreamChat extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  render() {
    return (
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
    )
  }
}

export default StreamChat
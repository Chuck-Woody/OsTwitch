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
            Understream Component Here
          </div>
        </div>
        <div className="right-container">
          <div className="chat-container">
            <div className="chat-header-container">Stream Chat</div>
            <div className="chat-body-container"></div>
          </div> 
        </div>
      </div>
    )
  }
}

export default ChannelShow;
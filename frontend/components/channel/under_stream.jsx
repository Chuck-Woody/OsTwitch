import React from "react";

class UnderStream extends React.Component{
  constructor(props){
    super(props)

  }
 
  render() {
    if (Object.values(this.props.channels).length === 0 ) {
      return null;
    }
    console.log("Props in understream", this.props)
    console.log(this.props.addFollow)
    let number;

    let follow;
    number = parseInt(this.props.currentChannel)
    
    console.log(number)
    if (this.props.current_user !== null) {
      if ( this.props.followedChannels.includes(number) && this.props.current_user !==null) {
        follow = <button className='follow-btn' onClick={() => this.props.unFollow(this.props.follow[0].id)}> <i class="fas fa-heart"></i> Unfollow </button>
      } else {
        follow = <button className='follow-btn' onClick={() => this.props.addFollow(number)}> <i className="far fa-heart"></i>
        Follow </button>
      }} 
    else {
      
        follow = <button className='follow-btn' onClick={() => this.props.openModal('login')}> <i className="far fa-heart"></i>
        Follow </button>

      }

    return(
      <div className="understream-about">

      
      <div className="understream-container">
        
            <div className="understream-channel-logo-container">
            <img className="understream-channel-logo" src={`https://robohash.org/${this.props.channels[number].channel_name}.png`}></img>

            </div>
            <div className="understream-info-composition">

              <div className="understream-channel-info-container">
                <div className='understream-channel-name'>{this.props.channels[number].channel_name}</div> 
                {follow}
              </div>

              <div className="understream-stream-title">
                Stream title placeholder
              </div>
            </div>

      </div>
            <div className="channel-about-composition">
              <div className="channel-about-background">

                <div className="about-streamer">
                    About {this.props.channels[number].channel_name}
                </div>

                <div className="streamer-follows-number">
                {this.props.channels[number].followerCount} followers
                </div>

                <div className="channel-description">
                {this.props.channels[number].channel_description}
                </div>
              </div>


            </div>
    </div>
    )
  }
}

export default UnderStream
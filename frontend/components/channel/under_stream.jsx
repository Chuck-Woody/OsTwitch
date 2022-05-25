import React from "react";

class UnderStream extends React.Component{
  constructor(props){
    super(props)

  }
 
  render() {
    console.log("Props in understream", this.props)
    console.log(this.props.addFollow)
    let number;
    let follow;
    

    if (this.props.current_user !== null) {
      number = parseInt(this.props.currentChannel)
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
      <div className="understream-container">
        
            <div className="understream-channel-logo-container">
              <img className="understream-channel-logo" src="https://robohash.org/placeholder2.png"></img>
            </div>
            <div className="understream-channel-info-container">
              <div className='understream-channel-name'>{this.props.channels[number].channel_name}</div> 
              
              {follow}
              
              
            </div>
          </div>
    )
  }
}

export default UnderStream
import React from "react";


class SideBarIndexItem extends React.Component{
  constructor(props){
    super(props)
  }


  render() {
    // console.log('SidebarIndexItem has the channel name',this.props.follow.channel_name)
    return (
      <div className="channel-item-container"> {/* These will eventually be replaced with a React Component called SideBarItem*/}
          <div className="avatar-container">
          <img className="home-index-channel-logo" src={`https://robohash.org/${this.props.follow.channel_name}.png`}></img>
          </div>
          <div className="channel-info-container">
            <div className='channel-name'>{this.props.follow.channel_name}</div>
            <div className="channel-category">Category</div>
          </div>
        </div>
    )
  }
}

export default SideBarIndexItem
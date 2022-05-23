import React from "react";

//convert to a class component once the container has been completed.


class SideBar extends React.Component {
  constructor(props){
    super(props)

  }
  render() {

    return (
      <div className='channel-container' >
        <div className='channel-header-container'>
          <h2 className='channel-header-text'>Followed Channels</h2>
        </div>
        <div className="channel-item-container"> {/* These will eventually be replaced with a React Component called SideBarItem*/}
          <div className="avatar-container">
            <img className="channel-logo" src="https://robohash.org/placeholder1.png"></img>
          </div>
          <div className="channel-info-container">
            <div className='channel-name'>Channel-Name</div>
            <div className="channel-category">Category</div>
          </div>
        </div>

        <div className='channel-header-container'>
          <h2 className='channel-header-text'>Recommended Channels</h2>
        </div>
        <div className="channel-item-container"> {/* These will eventually be replaced with a React Component called SideBarItem*/}
          <div className="avatar-container">
            <img className="channel-logo" src="https://robohash.org/placeholder2.png"></img>
          </div>
          <div className="channel-info-container">
            <div className='channel-name'>Channel-Name</div>
            <div className="channel-category">Category</div>
          </div>
        </div>
        
      </div>
      

    )
  }
}

export default SideBar
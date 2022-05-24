import React from "react";


class HomeIndexItem extends React.Component {
  constructor(props){
    super(props)
  }
  
  
  
  render() {
    console.log(this.props)
    
      return (
      <div className="home-index-item-container">
        <Link to={`/channel/${this.props.channel.id}`}>
        <div className="home-index-stream-preview">
          
        </div>
        <div className="home-index-under-item-container">
          <div className="home-index-logo">
            <img className="home-index-channel-logo" src={`https://robohash.org/${this.props.channel.channel_name}.png`}></img>
            
          </div>
          <div className="home-index-channel-info-container">
            <div className="home-index-channel-name">
                {this.props.channel.channel_name}
            </div>
            <div className="home-index-stream-title">
                Stream Title
            </div>
          </div>

        </div>
        </Link>     </div>
      )
    }
}

export default HomeIndexItem
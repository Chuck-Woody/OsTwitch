import React from "react";
import HomeIndexItem from './home_index_item'
import {Link} from 'react-router-dom'

class HomeIndex extends  React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    
    this.props.fetchChannels()
  }
  
  render() {
    console.log(this.props)
    return (
      <div className='home-index-container'>
        {this.props.channels.map(channel => {
            console.log(channel);
            return (
              <Link className="home-index-stream-link" to={`/channel/${channel.id}`}>
                <HomeIndexItem key={channel.owner_id} channel={channel}/>
              </Link>
            )
          })}
      </div>
    )
  }
}


export default HomeIndex
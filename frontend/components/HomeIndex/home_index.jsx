import React from "react";
import HomeIndexItem from './home_index_item'

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
            return <HomeIndexItem key={channel.owner_id} channel={channel}/>
          })}
      </div>
    )
  }
}


export default HomeIndex
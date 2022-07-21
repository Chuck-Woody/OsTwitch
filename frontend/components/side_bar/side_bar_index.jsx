import React from "react";
import SideBarIndexItem from './side_bar_index_item'
import {Link} from 'react-router-dom'
//convert to a class component once the container has been completed.


class SideBarIndex extends React.Component {
  constructor(props){
    super(props)
    console.log('The sidebar index component has', this.props)
  }

  componentDidMount(){
    // this.props.fetchFollows()
    // console.log('After mounting, the sidebar has', this.props)
  }
  render() {
    let {darkTheme} = this.props
    let normalSidebar = ( 
      <div className='channel-header-container'>
          <h2 className='channel-header-text'>Followed Channels</h2>
        

        {Object.values(this.props.follows).map(follow => (
          <Link to={`/channel/${follow.id}`}>
            <SideBarIndexItem follow={follow}/>
          </Link>
        ))}
         

        <div className='channel-header-container'>
          <h2 className='channel-header-text'>Recommended Channels</h2>
        </div>
        <div className={`channel-item-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}> {/* These will eventually be replaced with a React Component called SideBarItem*/}
          <div className="avatar-container">
            <img className="channel-logo" src="https://robohash.org/placeholder2.png"></img>
          </div>
          <div className="channel-info-container">
            <div className={`channel-name ${darkTheme ? 'dark-theme' : 'light-theme'}`}>Channel-Name</div>
            <div className={`channel-category ${darkTheme ? 'dark-theme' : 'light-theme'}`}>Category</div>
          </div>
        </div>
        </div>
    )

    return (
      <div className={`left-container channel-container ${darkTheme ? 'dark-theme': 'light-theme'}`} >
          {/* {normalSidebar} */}
        
      </div>
      

    )
  }
}

export default SideBarIndex
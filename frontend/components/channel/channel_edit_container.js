import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelEdit from './channel_edit'
import {fetchChannels} from '../../actions/channel_actions'




const mSTP = (state,ownProps) => {
  // console.log('the channel edit container is passing down own props' , JSON.stringify(ownProps))
  // console.log('the channel edit container is passing down state' , JSON.stringify(state))

  return {
    currentUser: state.session.currentUserId,
    currentChannel: ownProps.match.params.id,
    allChannels: state.entities.channels,
    location: ownProps.match.params.id,
    username: state.entities.users.username,
    darkTheme: state.ui.ui_state.dark_theme
  }

}

const mDTP = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  }
}

export default withRouter(connect(mSTP,mDTP)(ChannelEdit))
import { connect } from "react-redux";
import ChannelShow from "./channel_show";
import {fetchChannels} from '../../actions/channel_actions'
import { addFollow,unFollow } from "../../actions/follow_actions";
import { openModal } from '../../actions/modal_actions';
import { withRouter } from "react-router-dom";
const selectFollow= (state,channel_id) => {
 return  Object.values(state.entities.follows).filter(follow => follow.channel_id == channel_id)
}
const mSTP = (state,ownProps) => {
  
  console.log("The container hands down:", state.entities.channels)
  if (state.session.currentUserId) {
    return {
      currentUser: state.session.currentUserId,
      currentChannel: ownProps.match.params.id,
      allChannels: state.entities.channels,
      followedChannels: state.entities.users[state.session.currentUserId].follows,
      follow:  selectFollow(state,ownProps.match.params.id),
      cable: ownProps.cable
    }
  } else {
    return {
      currentUser: null,
      currentChannel: ownProps.match.params.id,
      allChannels: state.entities.channels,
      followedChannels: null,
      cable: ownProps.cable

  }

}}


const mDTP = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  addFollow: (channelId) => dispatch(addFollow(channelId)),
  unFollow: (followId) => dispatch(unFollow(followId)),
  openModal: modal => dispatch(openModal(modal)),
  
})


export default withRouter(connect(mSTP,mDTP)(ChannelShow))
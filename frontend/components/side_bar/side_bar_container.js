import { connect } from "react-redux";
import { fetchFollows } from "../../actions/follow_actions"
import SideBarIndex from "./side_bar_index";
import {withRouter} from 'react-router-dom'
const selectFollowedChannels = (state) => {

  if ( Object.values(state.entities.users).length > 0) {
    return state.entities.users[state.session.currentUserId].follows.map(channelId => (state.entities.channels[channelId]))
  } else {
    return []
  }
}
const mSTP = (state,ownProps) => {
  // console.log(state)
  return {
  ownProps: ownProps,
  follows: selectFollowedChannels(state),
  darkTheme: state.ui.ui_state.dark_theme,


}}

// const mDTP = dispatch => ({
//   fetchFollows: (user_id) => dispatch(fetchFollows(user_id))
// })


export default withRouter(connect(mSTP,null)(SideBarIndex))

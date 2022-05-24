import { connect } from "react-redux";
import NavBar from './nav_bar'
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'

const mSTP = (state,ownProps) => {
  if (state.currentUser) {console.log("User State Slice" , state.entities.users[state.session.id].username)}
  // console.log("User State Slice" , state.session.id)
  // console.log('OwnProps',ownProps)
return ({
  currentUser: state.session.currentUserId,
  userInfo: state.entities.users[state.session.currentUserId]
})}



const mDTP = (dispatch) => ({

  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))

})



export default connect(mSTP,mDTP)(NavBar)
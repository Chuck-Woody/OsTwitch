import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelEdit from './channel_edit'



const mSTP = (state,ownProps) => {
  return {

  }

}

const mDTP = (dispatch) => {
  return {

  }
}

export default withRouter(connect(mSTP,mDTP)(ChannelEdit))
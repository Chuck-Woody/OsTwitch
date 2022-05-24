import { connect } from "react-redux";
import HomeIndex from "./home_index";
import {fetchChannels} from '../../actions/channel_actions'

const mSTP = (state) => {
  
  return {
    channels: Object.values(state.entities.channels)
  }
  
}

const mDTP = (dispatch) => ({

  fetchChannels: () => dispatch(fetchChannels())
})





export default connect(mSTP,mDTP)(HomeIndex)